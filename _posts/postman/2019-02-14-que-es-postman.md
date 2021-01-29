---
layout: post
title: ¿Qué es Postman?
excerpt: "Postman es un entorno de desarrollo de APIs que nos permite diseñar, probar y monitorizar servicios REST"
categories: postman
tags: [api first,mockups]
image:
  feature: covers/postman.png
  credit: Marius Christensen
  creditlink: https://unsplash.com/photos/UXfi8LyqGDk
comments: true
share: true
author: victor_cuervo
---

**Postman** nace como una herramienta que principalmente nos permite crear peticiones sobre APIs de una forma muy sencilla y poder, de esta manera, probar las APIs. Todo basado en una extensión de *Google Chrome*. El usuario de **Postman** puede ser un *desarrollador* que esté comprobando el funcionamiento de una API para desarrollar sobre ella o un *operador* el cual esté realizando tareas de mnonitorización sobre un API.

Alrededor de la idea de testear las APIs, **Postman** nos ofrece un conjunto de utilidades adicionales para poder gestionar las APIs de una forma más sencilla. Es por ello que nos va a proporcionar herramientas para documentar los APIs, realizar una monitorización sobre las APIs, crear equipos sobre un API para que trabajen de forma colaborativa,... convirtiendo a **Postman plataforma de desarrollo de APIs que se basa por un modelo de desarrollo API First**.

A día de hoy **Postman** nos ofrece aplicaciones *Windows*, *Linux* y *Mac*, así como un módulo colaborativo para equipos basado en [Cloud][Cloud]

## Características de Postman

* **Crear Peticiones**, te permite crear y enviar peticiones http a **servicios REST** mediante un interface gráfico. Estas peticiones pueden ser guardadas y reproducidas a posteriori.

* **Definir Colecciones**, mediante **Postman** podemos agrupar las APIs en colecciones. En estas colecciones podemos definir el modelo de autentificación de las APIs para que se añada en cada petición. De igual manera podemos ejecutar un conjunto de test, así como definir variables para la colección.

* **Gestionar la Documentación**, genera documentación basada en las API y colecciones que hemos creado en la herramienta. Además **esta documentación podemos hacerla pública**.

* **Entorno Colaborativo**, permite compartir las API para un equipo entre varias personas. Para ello se apoya en una herramienta de colaborativa en [Cloud][Cloud].

* **Genera código de invocación**, dado un API es capaz de generar el código de invocación para diferentes lenguajes de programación: *C*, *cURL*, *C#*, *Go*, *Java*, *JavaScript*, *NodeJS*, *Objective-C*, *PHP*, *Python*, *Ruby*, *Shell*, *Swift*,...

* **Establecer variables**, con **Postman** podemos crear variables locales y globales que posteriormente utilicemos dentro de nuestras invocaciones o pruebas.

* **Soporta Ciclo Vida API management**, desde **Postman** podemos gestionar el ciclo de vida del API Management, desde la conceptualización del API, la definición del API, el desarrollo del API y la monitorización y mantenimiento del API.

* **Crear mockups**, mediante **Postman** podemos crear un servidor de mockups o sandbox para que se puedan testear nuestras API antes de que estas estén desarrolladas.

## Instalar Postman
Para instalarte **Postman** tienes que descargarte el software desde [el área de descargas de Postman][PostmanDownload]. Allí encontraras aplicaciones para *Windows*, *Linux* y *Mac*.

El uso de **Postman** es gratuito, si bien nos ofrece un par de planes adicionales que serían el ***Postman Pro*** que nos ofrece más ancho de banda para las pruebas y ***Postman Enterprise*** que nos permite, entre otras cosas, poder integrar la herramienta en los sistemas de SSO de nuestra empresa.

Puedes [consultar en detalle los planes de uso de Postman][PlanesPostman].


[Cloud]: {{site.url}}/cloud/
[PostmanDownload]:https://www.getpostman.com/downloads/
[PlanesPostman]: https://www.getpostman.com/pricing
