# Microservicio de Rewards

Este microservicio asigna puntos al usuario basado en las compras confirmadas del mismo.

Cada punto que es asignado se corresponde a un valor preestablecido. Por cada orden de compra confirmada se calculan los puntos y se determinan los puntos ha asignar al usuario.

Los puntos obtenidos por el usuario prodrán ser intercambiados por futuros beneficios para el.

[Documentación de API](./README-API.md)

La documentación de las api también se pueden consultar desde el home del microservicio
que una vez levantado el servidor se puede navegar en [localhost:3005](http://localhost:3005/)

## Dependencias

### Auth

Solo ordenes de compra confirmadas por usuarios autorizados.

### Order

El canculo de puntos depende del monto declarado en la orden de compra.


### Node 10.15

Seguir los pasos de instalación del sitio oficial

[nodejs.org](https://nodejs.org/en/)

### MongoDb

Ver tutorial de instalación en [README.md](../README.md) en la raíz.

### RabbitMQ

La comunicación con Catalog y Auth es a través de rabbit.

Ver tutorial de instalación en [README.md](../README.md) en la raíz.

## Ejecución

Abrir ventana de comandos en la carpeta del microservicio y ejecutar :

```bash
npm install
npm start
```

## Apidoc

Apidoc es una herramienta que genera documentación de apis para proyectos node (ver [Apidoc](http://apidocjs.com/)).

El microservicio muestra la documentación como archivos estáticos si se abre en un browser la raíz del servidor [localhost:3003](http://localhost:3003/)

Ademas se genera la documentación en formato markdown.

## Archivo .env

Este archivo permite configurar diversas opciones de la app, ver ejemplos en .env.example
