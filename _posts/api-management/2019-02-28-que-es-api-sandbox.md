---
layout: post
title: ¿Qué es un API Sandbox?
excerpt: "Mediante la técnica de API Sandbox podemos simular la respuesta funcional de un API hasta que este API está disponible en producción para sus dependencias"
categories: api-management
tags: [api sanbox,testing,api virtualización]
image:
  feature: covers/api.png
comments: true
share: true
author: victor_cuervo
---

Los modelos [DevOps][DevOps] nos han llevado a un mundo más ágil enfocado a reducir en lo máximo posible los tiempos de desarrolo y despliegue de aplicaciones. En este marco [DevOps][DevOps] las estrategias **API First** han tomado una vital importancia.

Una estrategia **API First**, dentro de un modelo [API Management][APIManagement], define que una de las primeras cosas que se debe de realizar es la definición de un **API**. El disponer de esta definición del **API** nos permite dividir a los equipos que consumen el **API** y a los equipos que realizan la implementación para que puedan trabajar en paralelo. Esto refuerza más la idea de agilidad del [DevOps][DevOps].

Hasta aquí todo bien, pero el modelo se complica cuando nuestra aplicación empieza a consumir **APIs de terceros**, **APIs** cuyos desarrollos no dependen de nuestros ciclos [DevOps][DevOps]. Viéndonos abocados a terminar en un entorno de integración en el cual coordinarnos con otros equipos.

Cierto es que la granularidad en el desarrollo de [microservicios][microservicios] y el uso de técnicas asíncronas de eventos nos van a ayudar a reducir este escenario, pero, por desgracia no van a eliminarlo.

Nos vamos a encontrar en un modelo de linealidad en el desarrollo y gestión de dependencias, iterando en varias ocasiones para depurar los errores propios de la integración.

Es en este punto dónde se hace necesaria la implantación de un modelo de **API Sandbox**. Pero ¿qué es un **API Sandbox**?

## API Sandbox: virtualización de servicios

Un modelo de **API Sandbox** es un modelo de virtualización de APIs. Es la **técnica en la cual simulamos la respuesta funcional de un API hasta que este API está disponible en PRO para sus dependencias**.

El **API Sandbox** simulara la respuestas ante diferentes llamadas de los consumidores. Estas llamadas serán las mismas llamadas que se producirán en un entorno productivo. Es por ello que la aplicación que invoca no cambiará cuando se disponga del API definitivo.

Estas **API Sandbox** no solo simularán entornos de respuestas correctas ante la invocación de un servicio, si no que también deberá de simular escenarios de error para poder soportarlos por parte de las aplicaciones. Deberá de tener tal completitud funcional que tiene que ser capaz de ser válido en un entorno de integración.

Mediante el uso de un **API Sandbox** podemos permitir realizar pruebas y desarrollos de forma concurrente, **reduciendo los tiempos de puesta en producción de las aplicaciones**. Por ejemplo, reduce el coste y el riesgo de llamar a APIs de terceros durante las etapas de pruebas o testing.

Hay que tener en cuenta que **el API Sandbox no es una maqueta** que nos da una funcionalidad de pruebas en un momento dado, el **API Sandbox es un activo de software más que tiene que gestionar la compañía y que al final debe de seguir un flujo de despliegue por los diferentes entornos**, como si de una aplicación se tratase.

## Crear un API Sandbox

Si vamos a crear un **API Sandbox** debemos de tener en cuenta las siguientes cosas para su correcto desarrollo y despliegue:

### Entorno API Sandbox
Se deberá de disponer un entorno en el cual puedas tener un **API Sandbox**. Este entorno deberá de estar disponible para los consumidores del API.

Este entorno debe ser tratado, a todos los efectos, como un **entorno productivo**. El cual sea alcanzable por los consumidores, esté disponible 24/7, nos permita desplegar diferentes servicios y que múltiples usuarios puedan suscribirse a los **API Sandbox**.

### Casos de Uso
El **API Sandbox** debe de dar respuesta a todos los casos de uso que definen el API. Para ello es bueno que se haya enfocado desde una perspectiva **API First** y ya se disponga de esas especificaciones y casos de uso aterrizados en un fichero descriptivo como podría ser **Swagger**.

### Gestión de Errores
Uno de los puntos en los que ciertas veces no se hace mucho hincapié es en incluir el **soporte a la gestión de errores dentro del API Sandbox**. De tal manera que el consumidor pueda saber qué errores se pueden producir y por ende pueda actuar en consecuencia y no "quedarse colgado".

Se deberá de **dar respuesta a todos y cada uno de los errores posibles que tenga el API**.

Esta gestión de errores deberá de responder a **errores técnicos**: 403, insuficientes permisos de ejecución, 500: timeout de operación,... y a **errores funcionales**, por ejemplo "El Cliente No Existe", "No se ha podido realizar la transferencia",...

### Pruebas de Carga
Cuando estamos realizando **pruebas de carga** en un sistema que invoca a los API externos no tiene mucho sentido que lo hagamos en entornos productivos. Entre otras cosas porque los **API Gateways** suelen tener contramedidas ante ataques que pueden bloquear las pruebas de carga del sistema invocador.

Es por ello que las pruebas de carga de las aplicaciones deben de realizarse sobre los entornos de **API Sandbox**.

En este sentido nuestro **API Sandbox debe de tener un juego de pruebas suficiente como para dar respuesta a las peticiones de pruebas que reciba**. Ese juego de pruebas debería de estar coordinado con la alicación invocante que está haciendo las pruebas de carga.

## Ejemplos de API Sandbox

Algunos de los ejemplos que podemos consultar de **API Sandbox** en el mercado son:

* [Paypal Sandbox](https://developer.paypal.com/docs/classic/lifecycle/ug_sandbox/)
* [Instagram Sandbox](https://www.instagram.com/developer/sandbox/)
* [BBVA Payments Sandbox](https://www.bbvaapimarket.com/documentation/bbva/payments#documentation-53616e64626f78)
* [Trello Sandbox](https://developers.trello.com/page/sandbox)
* [Twitter Sandbox](https://developer.twitter.com/en/docs/ads/general/overview/ads-api-sandbox.html)

## Conclusiones sobre API Sandbox

El uso de **API Sandbox** en un modelo [DevOps][DevOps] nos puede proporcionar un modelo en el cual podemos reducir costes y tiempos de desarrollo y desliegue.

Si bien requiere de un **esfuerzo inicial** en el cual se defina el **API Sandbox** de una forma correcta para que nos sirva a lo largo del tiempo. El problema es que ciertas veces (quizás demasiadas) no se asume este esfuerzo y solo se piensa en desplegar de forma rápida nuestro API en producción. En estos casos el uso de un **API Sandbox** puede convertirse en un calvario.

[DevOps]: {{site.url}}/devops/
[APIManagement]: {{site.url}}/api-management/
[microservicios]: {{site.url}}/microservicios/
