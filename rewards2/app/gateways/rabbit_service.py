# coding=utf_8

import threading
import traceback

import pika

import app.domain.articles.crud_service as crud
import app.domain.articles.rest_validations as articleValidation
import app.utils.config as config
import app.utils.json_serializer as json
import app.utils.security as security

EVENT = {
    "type": {
        "required": True,
        "type": str
    },
    "message": {
        "required": True
    }
}

EVENT_CALLBACK = {
    "type": {
        "required": True,
        "type": str
    },
    "message": {
        "required": True
    },
    "exchange": {
        "required": True
    },
    "queue": {
        "required": True
    }
}


MSG_ORDER_PLACED = {
    "orderId": {
        "required": True,
        "type": str
    },
    "referenceId": {
        "required": True,
        "type": str
    }
}


def init():
    """
    Inicializa los servicios Rabbit
    """
    initAuth()
    initRewards()


def initAuth():
    """
    Inicializa RabbitMQ para escuchar eventos logout.
    """
    authConsumer = threading.Thread(target=listenAuth)
    authConsumer.start()


def initRewards():
    """
    Inicializa RabbitMQ para escuchar eventos de order específicos.
    """
    catalogConsumer = threading.Thread(target=listenOrder)
    catalogConsumer.start()


def listenAuth():
    
    EXCHANGE = "auth"

    try:
        connection = pika.BlockingConnection(
            pika.ConnectionParameters(host=config.get_rabbit_server_url())
        )
        channel = connection.channel()

        channel.exchange_declare(exchange=EXCHANGE, exchange_type='fanout')

        result = channel.queue_declare('', exclusive=True)
        queue_name = result.method.queue

        channel.queue_bind(exchange=EXCHANGE, queue=queue_name)

        def callback(ch, method, properties, body):
            event = json.body_to_dic(body.decode('utf-8'))
            if(len(validator.validateSchema(EVENT, event)) > 0):
                return

            if (event["type"] == "logout"):
                security.invalidateSession(event["message"])

        print("RabbitMQ Auth conectado")

        channel.basic_consume(queue_name, callback, auto_ack=True)

        channel.start_consuming()
    except Exception:
        print("RabbitMQ Auth desconectado, intentando reconectar en 10'")
        threading.Timer(10.0, initAuth).start()



def listenOrder():
    """
    order-placed : Es una validación solicitada por Rewards para validar si hay una nueva orden corndirmada para acreditar los puntos

    @api {direct} catalog/order-placed Acreditar Puntos

    @apiGroup RabbitMQ GET

    @apiDescription Escucha de mensajes order-placed desde order. Acredita Puntos

    @apiExample {json} Mensaje
      {
            “type” : “order-placed”,
            “exchange” : “{Exchange name to reply}”
            “queue” : “{Queue name to reply}”
            “message” : { 
                “orderId” : {orderId}”
            }

        }
    """
    
    
    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.get_rabbit_server_url()))
        channel = connection.channel()
        channel.exchange_declare(exchange="sell_flow",exchange_type='topic')
        
        EXCHANGE = "sell_flow"
        
        """
        ESTO ES DE listenCatalog(), lo reemplazo para probar si el 
        metodo de fanout me sirve más
        channel.exchange_declare(exchange=EXCHANGE, exchange_type='direct')

        channel.queue_declare(queue=QUEUE)

        channel.queue_bind(queue=QUEUE, exchange=EXCHANGE, routing_key=QUEUE)
        """
        result = channel.queue_declare('', exclusive=True)
        queue_name = result.method.queue
        queue=queue_name
        binding_key="order_payed"
        channel.queue_bind(exchange=EXCHANGE, queue=queue_name, routing_key=binding_key)

        
        def callback(ch, method, properties, body):
            print(" [x] %r:%r" % (method.routing_key, body))
            event = json.body_to_dic(body.decode('utf-8'))
            """if(len(validator.validateSchema(EVENT_CALLBACK, event)) > 0):
                return
            """
            if(event["type"]=="order-payed"):
                message = event["message"]
                exchange = event["exchange"]
                queue = event["queue"]
                orderId = message["orderId"]
                userId = message["userId"]
                amount = message["amount"]
                print("RabbitMQ order-placed orderId:",orderId,"userId: ",userId, " amount= $",amount)
                crud.updateScore(userId,amount)
                print("Score Updated Succesfully")

        print("RabbitMQ ORDER CONECTADOO")
        channel.basic_consume(queue, callback, consumer_tag=queue, auto_ack=True)
        channel.start_consuming()

    except Exception:
        traceback.print_exc()
        print("RabbitMQ Catalog desconectado, intentando reconectar en 10'")
        


def sendLevelNotice (exchange, queue, levelId, score):
    """
    Envía notificacion a Auth (User si existise) para informar que hay un cambio en el nivel

    level-data : Es una notificación al perfil del usuario informando el estado de su puntaje y su estado actual


    @api {direct} auth/level-data 

    @apiGroup RabbitMQ POST

    @apiDescription Enviá de mensajes level-updated desde cart. Informa el Nivel del Usuario

    @apiSuccessExample {json} Mensaje
      {
        "type": "level-updated",
        "message" : {
            "levelId": "{levelId}",
            "score": {score}
        }
      }
    """
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.get_rabbit_server_url()))
    channel = connection.channel()

    channel.exchange_declare(exchange=exchange, exchange_type='direct')

    channel.queue_declare(queue=queue)

    message = {
        "type": "score-data",
        "message": {
            "score": score
        }
    }

    channel.basic_publish(exchange=exchange, routing_key=queue, body=json.dic_to_json(message))

    connection.close()

    print("RabbitMQ Cart POST score-data rewardsId:%r , orderId:%r ", referenceId)


def sendScoreData(exchange, queue, referenceId, userId, score):
    
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=config.get_rabbit_server_url()))
    channel = connection.channel()

    channel.exchange_declare(exchange=exchange, exchange_type='direct')

    channel.queue_declare(queue=queue)

    message = {
        "type": "score-data",
        "message": {
            "score": score
        }
    }

    channel.basic_publish(exchange=exchange, routing_key=queue, body=json.dic_to_json(message))

    connection.close()

    print("RabbitMQ Cart POST score-data rewardsId:%r , orderId:%r ", referenceId)
