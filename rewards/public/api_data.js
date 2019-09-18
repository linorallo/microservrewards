define({ "api": [
  {
    "type": "post",
    "url": "/v1/articles/:articleId",
    "title": "Actualizar Artículo",
    "name": "Actualizar_Art_culo",
    "group": "Articulos",
    "examples": [
      {
        "title": "Body",
        "content": "{\n    \"name\": \"{nombre del articulo}\",\n    \"description\": \"{descripción del articulo}\",\n    \"image\": \"{id de imagen}\",\n    \"price\": {precio actual},\n    \"stock\": {stock actual}\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"{id de articulo}\"\n    \"name\": \"{nombre del articulo}\",\n    \"description\": \"{descripción del articulo}\",\n    \"image\": \"{id de imagen}\",\n    \"price\": {precio actual},\n    \"stock\": {stock actual}\n    \"updated\": {fecha ultima actualización}\n    \"created\": {fecha creación}\n    \"enabled\": {si esta activo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Articulos",
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
    "url": "/v1/articles/:articleId",
    "title": "Buscar Artículo",
    "name": "Buscar_Art_culo",
    "group": "Articulos",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"{id de articulo}\"\n    \"name\": \"{nombre del articulo}\",\n    \"description\": \"{descripción del articulo}\",\n    \"image\": \"{id de imagen}\",\n    \"price\": {precio actual},\n    \"stock\": {stock actual}\n    \"updated\": {fecha ultima actualización}\n    \"created\": {fecha creación}\n    \"enabled\": {activo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Articulos",
    "error": {
      "examples": [
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
    "url": "/v1/articles/search/:criteria",
    "title": "Buscar Artículo",
    "name": "Buscar_Art_culo",
    "group": "Articulos",
    "description": "<p>Busca articulos por nombre o descripción</p>",
    "success": {
      "examples": [
        {
          "title": "Respuesta",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"{id de articulo}\"\n        \"name\": \"{nombre del articulo}\",\n        \"description\": \"{descripción del articulo}\",\n        \"image\": \"{id de imagen}\",\n        \"price\": {precio actual},\n        \"stock\": {stock actual}\n        \"updated\": {fecha ultima actualización}\n        \"created\": {fecha creación}\n        \"enabled\": {activo}\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/find_service.py",
    "groupTitle": "Articulos",
    "error": {
      "examples": [
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
    "url": "/v1/articles/",
    "title": "Crear Artículo",
    "name": "Crear_Art_culo",
    "group": "Articulos",
    "examples": [
      {
        "title": "Body",
        "content": "{\n    \"name\": \"{nombre del articulo}\",\n    \"description\": \"{descripción del articulo}\",\n    \"image\": \"{id de imagen}\",\n    \"price\": {precio actual},\n    \"stock\": {stock actual}\n}",
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
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"{id de articulo}\"\n    \"name\": \"{nombre del articulo}\",\n    \"description\": \"{descripción del articulo}\",\n    \"image\": \"{id de imagen}\",\n    \"price\": {precio actual},\n    \"stock\": {stock actual}\n    \"updated\": {fecha ultima actualización}\n    \"created\": {fecha creación}\n    \"enabled\": {si esta activo}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/domain/articles/crud_service.py",
    "groupTitle": "Articulos",
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
    "url": "/articles/:articleId",
    "title": "Eliminar Artículo",
    "name": "Eliminar_Art_culo",
    "group": "Articulos",
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
    "groupTitle": "Articulos",
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
    "url": "catalog/article-exist",
    "title": "Validación de Articulos",
    "group": "RabbitMQ_GET",
    "description": "<p>Escucha de mensajes article-exist desde cart. Valida articulos</p>",
    "examples": [
      {
        "title": "Mensaje",
        "content": "{\n  \"type\": \"article-exist\",\n  \"exchange\" : \"{Exchange name to reply}\"\n  \"queue\" : \"{Queue name to reply}\"\n  \"message\" : {\n      \"referenceId\": \"{referenceId}\",\n      \"articleId\": \"{articleId}\",\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_GET",
    "name": "DirectCatalogArticleExist"
  },
  {
    "type": "direct",
    "url": "catalog/article-exist",
    "title": "Validación de Articulos",
    "group": "RabbitMQ_GET",
    "description": "<p>Escucha de mensajes article-data desde cart. Valida articulos</p>",
    "examples": [
      {
        "title": "Mensaje",
        "content": "{\n  \"type\": \"article-exist\",\n  \"exchange\" : \"{Exchange name to reply}\"\n  \"queue\" : \"{Queue name to reply}\"\n  \"message\" : {\n      \"referenceId\": \"{referenceId}\",\n      \"articleId\": \"{articleId}\",\n  }",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_GET",
    "name": "DirectCatalogArticleExist"
  },
  {
    "type": "fanout",
    "url": "auth/logout",
    "title": "Logout",
    "group": "RabbitMQ_GET",
    "description": "<p>Escucha de mensajes logout desde auth. Invalida sesiones en cache.</p>",
    "examples": [
      {
        "title": "Mensaje",
        "content": "{\n  \"type\": \"article-exist\",\n  \"message\" : \"tokenId\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_GET",
    "name": "FanoutAuthLogout"
  },
  {
    "type": "direct",
    "url": "cart/article-data",
    "title": "Validación de Articulos",
    "group": "RabbitMQ_POST",
    "description": "<p>Enviá de mensajes article-exist desde cart. Valida articulos</p>",
    "success": {
      "examples": [
        {
          "title": "Mensaje",
          "content": "{\n  \"type\": \"article-exist\",\n  \"message\" : {\n      \"referenceId\": \"{referenceId}\",\n      \"articleId\": \"{articleId}\",\n      \"valid\": True|False,\n      \"stock\": {stock},\n      \"price\": {price}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_POST",
    "name": "DirectCartArticleData"
  },
  {
    "type": "direct",
    "url": "cart/article-exist",
    "title": "Validación de Articulos",
    "group": "RabbitMQ_POST",
    "description": "<p>Enviá de mensajes article-exist desde cart. Valida articulos</p>",
    "success": {
      "examples": [
        {
          "title": "Mensaje",
          "content": "{\n  \"type\": \"article-exist\",\n  \"message\" : {\n      \"referenceId\": \"{referenceId}\",\n      \"articleId\": \"{articleId}\",\n      \"valid\": True|False\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app/gateways/rabbit_service.py",
    "groupTitle": "RabbitMQ_POST",
    "name": "DirectCartArticleExist"
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
    "filename": "./pblic/main.js",
    "group": "_home_lino_Documents_UTN_Arquitectura_de_Microservicios_microservrewards_catalog_python_pblic_main_js",
    "groupTitle": "_home_lino_Documents_UTN_Arquitectura_de_Microservicios_microservrewards_catalog_python_pblic_main_js",
    "name": ""
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
    "group": "_home_lino_Documents_UTN_Arquitectura_de_Microservicios_microservrewards_catalog_python_public_main_js",
    "groupTitle": "_home_lino_Documents_UTN_Arquitectura_de_Microservicios_microservrewards_catalog_python_public_main_js",
    "name": ""
  }
] });
