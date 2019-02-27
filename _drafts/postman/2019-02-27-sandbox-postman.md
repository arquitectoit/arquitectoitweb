---
layout: post
title: Sanbox en Postman
excerpt: "bla bla"
categories: api-management
tags: [sanbox]
image:
  feature: covers/api.png
comments: true
share: true
author: victor_cuervo
---


¿Qué es un sandbox?


En una estrategia **API First** dentro de un modelo **API Management** se define que una de las primeras cosas que se debe de realizar es la definición de un **API**. Esto nos permite dividir a los equipos que consumen el **API** y a los equipos que realizan la implementación para que puedan trabajar en paralelo.

Pero, si nos ponemos en el papel de los que consumen el **API**, ¿qué van a consumir si solo tienen un interface? ¿Es esto suficiente? Claramente no es suficiente para poder avanzar en el consumo de **API** que están en fase de desarrollo.

Es en este punto dónde se hace necesario la creación de un **Sandbox**, ¿qué es un **sandbox**?



* Reduce el coste y el riesgo de llamar a APIs de terceros durante el testing
* Permiten realizar pruebas y desarrollos de forma concurrente, reduciendo los tiempos de puesta en PRO de las aplicaciones.
* Simula escenarios de error para poder soportarlos por parte de las aplicaciones


## Virtualización API
El desarrollo orientado a API es un escenario muy normal a día de hoy. El desarrollar aplicaciones en base a la invocación de diferentes API es una técnica habitual. Esto permite reducir los tiempos y por tanto los costes en el desarrollo de aplicaciones.

Pero no solo en el tiempo de desarrollo de una aplicación, si no también en el mantenimiento de la misma.

Uno de los problemas en los escenarios de consumo de API es el tema del sola de tiempos a la hora de tener la disponibilidad del API a consumir. Y esto puede implicar un retraso al tener la dependencia de la disponibilidad del API.

> **Virtualización del API** es la técnica en la cual simulamos la respuesta de un API hasta que este API está disponible en PRO para sus dependencias.

El API virtualizado simulara la respuestas ante diferentes llamadas de los consumidores. Estas llamadas serán las mismas llamadas que se producirán en un entorno productivo. Es por ello que la aplicación invocante no cambiará cuando se disponga del API definitivo.


## Qué debe de contemplar una herramienta de virtualización del API
* Capacidad de definir un servicio virtual de un API para que un tercero pueda utilizar para construir y probar su aplicación.
* Gestión del ancho de banda del API para poder probar al API en escenarios de saturación.
* Simular condiciones de error para que la aplicación que invoca sepa como debe de comportarse en casos de error o si el API no se encuentra disponible.
* Capacidad de incluir usuarios para las pruebas de integración.

## Técnicas para crear un sandbox

Cuando se cree un **API Sandbox** se debe de tener en cuenta las siguientes cosas:

### Entorno API Sandbox
Se deberá de disponer un entorno en el cual puedas tener un **API Sandbox**. Este entorno deberá de estar disponible para los consumidores del API.

Este entorno debe ser tratado, a todos los efectos, como un entorno productivo. El cual sea alcanzable por los consumidore, esté disponible 24/7, nos permita desplegar diferentes servicios y que múltiples usuarios puedan suscribirse a los **API Sandbox**.

### Casos de Uso
El API Sandbox debe de dar respuesta a todos los casos de uso que definen el API. Para ello es bueno que se haya enfocado desde una perspectiva **API First** y ya se disponga de esas especificaciones y casos de uso aterrizados en un fichero descriptivo como podría ser **Swagger**.


## Gestión de Errores
Uno de los puntos en los que ciertas veces no se hace mucho hincapié es en incluir el soporte a la gestión de errores dentro del **API Sandbox**. De tal manera que el consumidor pueda saber qué errores se pueden producir y por ende pueda actuar en consecuencia y no "quedarse colgado".

Se deberá de dar respuesta a todos y cada uno de los errores posibles que tenga el API.

Esta gestión de errores deberá de responder a errores técnicos: 403, insuficientes permisos de ejecución, 500: timeout de operación,... y a errores funcionales, por ejemplo "El Cliente No Existe", "No se ha podido realizar la transferencia",...

## Pruebas de Carga
Cuando estamos realizando pruebas de carga en un sistema que invoca a los API externos no tiene mucho sentido que lo hagamos en entornos productivos. Entre otras cosas porque los **API Gateways** suelen tener contramedidas ante ataques que pueden bloquear las pruebas de carga del sistema invocante.

Es por ello que las pruebas de carga de las aplicaciones deben de realizarse sobre los entornos de **API Sandbox**.

En este sentido nuestro **API Sandbox** debe de tener un juego de pruebas suficiente como para dar respuesta a las peticiones de pruebas que reciba. Ese juego de pruebas debería de estar coordinado con la alicación invocante que está haciendo las pruebas de carga.

## Conslusiones

Reduce costes y tiempos, pero requiere de un esfuerzo inicial que, ciertas veces no se asume. Se quiere ir rápido a PRO.


## Herramientas para crear una virtualización de API









¿Hasta dónde llevo el sandbox??

¿¿ Reduce el Sandbox mis entornos de PRE???

Cómo me ayuda Postman a montar el Sandbox
