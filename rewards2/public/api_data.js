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
          "content": "HTTP/1.1 200 OK\n{\n    “pointValue” : “{pointValue}”,\n“{levelId}” : {\n        “levelName” : “{levelName}”,\n    “minValue” : “{minValue}”,\n    “maxValue” : “{maxValue}”\n    }\n}",
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
        "content": "{\n    “levelName” : “{levelName}”,\n    “minValue” : “{minValue}”,\n    “maxValue” : “{maxValue}”\n\n}",
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
    "type": "delete",
    "url": "/rewards/:levelId",
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
        "content": "{\n    \"levelID\" :\"{levelID}\",\n    “minValue” : “{minValue}”,\n    “maxValue” : “{maxValue}”\n\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    “score” : “{score}”,\n    “levelName” : “{levelName}” \n}",
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
    "type": "get",
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
    "type": "get",
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
    "url": "catalog/order-placed",
    "title": "Acreditar Puntos",
    "group": "RabbitMQ_GET",
    "description": "<p>Escucha de mensajes order-placed desde order. Acredita Puntos</p>",
    "examples": [
      {
        "title": "Mensaje",
        "content": "{\n      “type” : “order-placed”,\n      “exchange” : “{Exchange name to reply}”\n      “queue” : “{Queue name to reply}”\n      “message” : { \n          “orderId” : {orderId}”\n      }\n\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_GET",
    "name": "DirectCatalogOrderPlaced"
  },
  {
    "type": "direct",
    "url": "auth/level-data",
    "title": "",
    "group": "RabbitMQ_POST",
    "description": "<p>Enviá de mensajes level-updated desde cart. Informa el Nivel del Usuario</p>",
    "success": {
      "examples": [
        {
          "title": "Mensaje",
          "content": "{\n  \"type\": \"level-updated\",\n  \"message\" : {\n      \"levelId\": \"{levelId}\",\n      \"score\": {score}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_POST",
    "name": "DirectAuthLevelData"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/main.js",
    "group": "_home_lino_UTN_ArquitecturaMicroservicios_microservrewards_rewards2_public_main_js",
    "groupTitle": "_home_lino_UTN_ArquitecturaMicroservicios_microservrewards_rewards2_public_main_js",
    "name": ""
  }
] });
