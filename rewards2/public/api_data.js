define({ "api": [
  {
    "type": "get",
    "url": "/v1/rewards/levels",
    "title": "Consultar Niveles",
    "name": "Consultar_Niveles",
    "group": "Niveles",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    “pointValue” : “{pointValue}”,\n“{levelId}” : {\n        “levelName” : “{levelName}”,\n    “minPointValue” : “{minPointValue}”,\n    “maxPointValue” : “{maxPointValue}”\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Niveles",
    "examples": [
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/rewards/create-level",
    "title": "Crear Nivel",
    "name": "Crear_Nivel",
    "group": "Niveles",
    "examples": [
      {
        "title": "Body",
        "content": "{\n    “levelName” : “{levelName}”,\n    “minPointValue” : “{minPointValue}”,\n    “maxPointValue” : “{maxPointValue}”\n\n}",
        "type": "json"
      },
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    “levelId” : “{levelId}”,\n    “levelName” : “{levelName}”,\n“minPointalue” : “{minPointValue}”,\n“maxPointValue” : “{maxPointValue}”\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Niveles",
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/rewards/levels/:levelId",
    "title": "Eliminar Nivel",
    "name": "Eliminar_Nivel",
    "group": "Niveles",
    "success": {
      "examples": [
        {
          "title": "200 Respuesta",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Niveles",
    "examples": [
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/rewards/modify-level",
    "title": "Modificar Nivel",
    "name": "Modificar_Nivel",
    "group": "Niveles",
    "examples": [
      {
        "title": "Body",
        "content": "{\n    \"levelName\" :\"{levelName}\",\n    “minPointValue” : “{minPointValue}”,\n    “maxPointValue” : “{maxPointValue}”\n\n}",
        "type": "json"
      },
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    “levelId” : “{levelId}”,\n    “levelName” : “{levelName}”,\n“minValue” : “{minValue}”,\n“maxValue” : “{maxValue}”\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Niveles",
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/v1/rewards/:userId",
    "title": "Consultar Puntaje",
    "name": "Consultar_Puntaje",
    "group": "Puntaje",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\":\":userId\"\n    “score” : “{score}”,\n    “levelName” : “{levelName}” \n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Puntaje",
    "examples": [
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/rewards/:userId/manage",
    "title": "Gestionar Puntaje",
    "name": "Gestionar_Puntaje",
    "group": "Puntaje",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    “action” : “SUMAR|RESTAR”,\n    “valor” : “{valor}” \n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Puntaje",
    "examples": [
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/v1/rewards/update-points-value",
    "title": "Modificar Valor de Puntaje",
    "name": "Valor_de_Puntaje",
    "group": "Puntaje",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    “pointValue” : “{pointValue}”\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Puntaje",
    "examples": [
      {
        "title": "Header Autorización",
        "content": "Authorization=bearer {token}",
        "type": "String"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "401 Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"path\" : \"{Nombre de la propiedad}\",\n    \"message\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "400 Bad Request",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        },
        {
          "title": "500 Server Error",
          "content": "HTTP/1.1 500 Server Error\n{\n    \"error\" : \"{Motivo del error}\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "direct",
    "url": "order/order-payed",
    "title": "Acreditar Puntos",
    "group": "RabbitMQ_GET",
    "description": "<p>Escucha de mensajes order-payed desde order. Acredita Puntos</p>",
    "examples": [
      {
        "title": "Mensaje",
        "content": "{\n      “type” : “order-payed\",\n      “exchange” : “{Exchange name to reply}”\n      “queue” : “{Queue name to reply}”\n      “message” : { \n          “orderId” : \"{orderId}”,\n          \"userId\" : \"{userId}\",\n          \"amount\" : {amount}\n      }\n\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_GET",
    "name": "DirectOrderOrderPayed"
  },
  {
    "type": "direct",
    "url": "rewards/level-data",
    "title": "Informar Cambio de Nivel",
    "group": "RabbitMQ_POST",
    "description": "<p>Enviá de mensajes level-updated. Informa el Nivel del Usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Mensaje",
          "content": "{\n  \"type\": \"level-updated\",\n  \"message\" : {\n      \"userId\": \"{userId}\",\n      \"levelId\": \"{levelId}\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_POST",
    "name": "DirectRewardsLevelData"
  }
] });
