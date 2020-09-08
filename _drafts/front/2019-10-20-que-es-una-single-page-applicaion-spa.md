---
layout: post
title: ¿Qué es una Single Page Application (SPA)?
excerpt: "aaa"
categories: front
tags: [spa]
image:
  feature: covers/front.jpg
comments: true
share: true
author: victor_cuervo
---

Una SPA o **Single Page Application** es un patrón para el diseño de páginas web basados en modelos cliente. De tal manera que cada página por la que se navega se carga directamente en el navegador generando un nuevo DOM y obteniendo una nueva [página HTML][HTML], de tal manera que lo único para lo que se llama al servidor es para obtener los datos con los que rellenar la página.

![Arquitectura petciones SPA]({{ site.url }}/images/front/spa/spa-architecture.png)

El modelo tradicional de páginas web difiere del modelo de **single page application** en que su funcionamiento es que cada interacción del usuario con la página se realiza una llamada al servidor web, será el servidor el que monte el nuevo modelo DOM que representa a la [página HTML][HTML] y lo devuelva montado al cliente web.

![Arquitectura peticiones tradicional]({{ site.url }}/images/front/spa/traditional-architecture.png)

* El el modelo AJAX, aunque hay técnicas más avanzadas como los WebSockets

* El cliente puede devolver contenido en JSON, Elementos HMTL o cadenas de texto

* Problemas que presenta y resoluciones
Historial y Navegación - HMTL5 lo resuelve

* Beneficios
** Velocidad
** No efecto de refresco





[HTML]: http://www.manualweb.net
