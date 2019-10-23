<a name="top"></a>
# Rewards Service v0.1.0

Microservicio de Rewards

- [Niveles](#niveles)
	- [Consultar Niveles](#consultar-niveles)
	- [Crear Nivel](#crear-nivel)
	- [Eliminar Nivel](#eliminar-nivel)
	- [Modificar Nivel](#modificar-nivel)
	
- [Puntaje](#puntaje)
	- [Consultar Puntaje](#consultar-puntaje)
	- [Gestionar Puntaje](#gestionar-puntaje)
	- [Modificar Valor de Puntaje](#modificar-valor-de-puntaje)
	
- [RabbitMQ_GET](#rabbitmq_get)
	- [Acreditar Puntos](#acreditar-puntos)
	
- [RabbitMQ_POST](#rabbitmq_post)
	- [Informar Cambio de Nivel](#informar-cambio-de-nivel)
	


# <a name='niveles'></a> Niveles

## <a name='consultar-niveles'></a> Consultar Niveles
[Back to top](#top)



	GET /v1/rewards/levels



### Examples

Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    “pointValue” : “{pointValue}”,
“{levelId}” : {
        “levelName” : “{levelName}”,
    “minPointValue” : “{minPointValue}”,
    “maxPointValue” : “{maxPointValue}”
    }
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='crear-nivel'></a> Crear Nivel
[Back to top](#top)



	POST /v1/rewards/create-level



### Examples

Body

```
{
    “levelName” : “{levelName}”,
    “minPointValue” : “{minPointValue}”,
    “maxPointValue” : “{maxPointValue}”

}
```
Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    “levelId” : “{levelId}”,
    “levelName” : “{levelName}”,
“minPointalue” : “{minPointValue}”,
“maxPointValue” : “{maxPointValue}”

}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='eliminar-nivel'></a> Eliminar Nivel
[Back to top](#top)



	DELETE /rewards/levels/:levelId



### Examples

Header Autorización

```
Authorization=bearer {token}
```


### Success Response

200 Respuesta

```
HTTP/1.1 200 OK
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='modificar-nivel'></a> Modificar Nivel
[Back to top](#top)



	POST /v1/rewards/modify-level



### Examples

Body

```
{
    "levelName" :"{levelName}",
    “minPointValue” : “{minPointValue}”,
    “maxPointValue” : “{maxPointValue}”

}
```
Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    “levelId” : “{levelId}”,
    “levelName” : “{levelName}”,
“minValue” : “{minValue}”,
“maxValue” : “{maxValue}”

}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
# <a name='puntaje'></a> Puntaje

## <a name='consultar-puntaje'></a> Consultar Puntaje
[Back to top](#top)



	GET /v1/rewards/:userId



### Examples

Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    "_id":":userId"
    “score” : “{score}”,
    “levelName” : “{levelName}” 
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='gestionar-puntaje'></a> Gestionar Puntaje
[Back to top](#top)



	POST /v1/rewards/:userId/manage



### Examples

Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    “action” : “SUMAR|RESTAR”,
    “valor” : “{valor}” 

}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
## <a name='modificar-valor-de-puntaje'></a> Modificar Valor de Puntaje
[Back to top](#top)



	POST /v1/rewards/update-points-value



### Examples

Header Autorización

```
Authorization=bearer {token}
```


### Success Response

Respuesta

```
HTTP/1.1 200 OK
{
    “pointValue” : “{pointValue}”
}
```


### Error Response

401 Unauthorized

```
HTTP/1.1 401 Unauthorized
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "path" : "{Nombre de la propiedad}",
    "message" : "{Motivo del error}"
}
```
400 Bad Request

```
HTTP/1.1 400 Bad Request
{
    "error" : "{Motivo del error}"
}
```
500 Server Error

```
HTTP/1.1 500 Server Error
{
    "error" : "{Motivo del error}"
}
```
# <a name='rabbitmq_get'></a> RabbitMQ_GET

## <a name='acreditar-puntos'></a> Acreditar Puntos
[Back to top](#top)

<p>Escucha de mensajes order-payed desde order. Acredita Puntos</p>

	DIRECT order/order-payed



### Examples

Mensaje

```
{
      “type” : “order-payed",
      “exchange” : “{Exchange name to reply}”
      “queue” : “{Queue name to reply}”
      “message” : { 
          “orderId” : "{orderId}”,
          "userId" : "{userId}",
          "amount" : {amount}
      }

  }
```




# <a name='rabbitmq_post'></a> RabbitMQ_POST

## <a name='informar-cambio-de-nivel'></a> Informar Cambio de Nivel
[Back to top](#top)

<p>Enviá de mensajes level-updated. Informa el Nivel del Usuario</p>

	DIRECT rewards/level-data





### Success Response

Mensaje

```
{
  "type": "level-updated",
  "message" : {
      "userId": "{userId}",
      "levelId": "{levelId}"
  }
}
```


