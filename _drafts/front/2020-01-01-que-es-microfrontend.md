---
layout: post
title: ¿Qué es un Microfrontend?
excerpt: "aaa"
categories: front
tags: [microfrontend]
image:
  feature: covers/front.png
comments: true
share: true
author: victor_cuervo
---

https://martinfowler.com/articles/micro-frontends.html
https://micro-frontends.org/


Al igual que se hace con los microservicios, la idea de los microfrontends es dividir un frontal monolítico en pequeños frontales. La idea es buscar la eficiencia en el desarrollo de los frontales, desde su concepción, pasando por el desarrollo hasta el despliegue a entornos productivos.

Los frontales monolíticos llevan asociadas unas estructuras organizativas y arquitecturas complejas que den soporte a estas soluciones. Es por ello que nacen patrones que permiten desacoplar las partes del frontal en partes más pequeñas. Esto es a lo que se llama **microfrontends**.

> Un **microfrontend** es un estilo arquitectural que nos permite conjuntar pequeñas aplicaciones de front independientes en una única aplicación de front.

¿¿Además cada frontal puede estar desarrollado en una tecnología diferente??

## Principios de diseño sobre los micro-frontends

* **Agnóstico a la tecnología**, cada equipo puede elegir su stack tecnológico para desarrollar su microfrontend sin tener que coordinarse con el resto de equipos.

* **Aislar el código del equipo**, no compartir el runtime. Aunque los equipos utilicen el mismo framework. Desarrollar aplicaciones independientes autocontenidas. No apoyarse en ***estados globales*** o ***variables compartidas***.

* **Establecer prefijos de equipos**, establecer convenciones de nombres que permitan el aislamiento de los equipos. Los elementos con prefijos deben de ser [CSS][CSS], eventos, [LocalStorage][LocalStorage] y cookies. Esto evitará futuras colisiones.

* **Prioriza funciones nativas de los navegadores sobre APIs personalizadas**, por ejemplo utiliza los eventos del navegador en vez de diseñar un sistema de publicación/subscripción. Si hay que construir un API personalizada y compartida por los equipos, que sea lo más sencilla posible.

* **Construye sitios elásticos**, aunque el [Javascript][Javascript] falle, el sitio que construyas debe de seguir funcionando



## Custom Elements



## Revisar

* Custom Elements https://developers.google.com/web/fundamentals/web-components/customelements
* Browser Events (for communication). https://micro-frontends.org/#parent-child-communication--dom-modification
* Universal Rendering. https://micro-frontends.org/#serverside-rendering--universal-rendering
* Web Components

[LocalStorage]:http://www.manualweb.net/html5/webstorage/
[CSS]: http://www.manualweb.net/css/
