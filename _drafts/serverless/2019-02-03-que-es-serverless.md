---
layout: post
title: ¿Qué es Serverless?
excerpt: "bla bla bla"
categories: cloud
tags: [serverless]
image:
  feature: covers/dialogflow.jpg
comments: true
share: true
author: victor_cuervo
---

* Qué es
* Ejemplos
* Framework estándar
* Alternativas


Serverless no significa que no haya servidores como más de uno pueda estar pensando. Ya que al final todo software se ejecutará bao algún servidor.

La idea del Serverless es que el usuario que está desarrollando **no se preocupe por el servidor de ejecución y por lo tanto tenga que saber de él**. De esta forma se enfoca en las necesidades de aplicación.

Las aplicaciones serverless son desencadenadas por eventos los cuales invocan a las funciones que implementan la funcionalidad.

En un modelo PaaS te tienes que ocupar por más elementos para que la aplicación funcione.


* El servior atienda o no peticiones deberá de estar encendido
* Hay que mantener actualizado y parcheado el servidor
* Hay que gestionar el escalado up&down atendiendo a la demanda.


Es una evolución del IaaS y el PaaS


Soluciones de Serverless

	* Amazon WebServices Lambda
	* Google Cloud Functions
	* Azure Functions
	* IBM OpenWhisk
	* Kubeless

	
	* Spotinst?
	* Webtasks??


¿Existe algún framework estandar?


## Características del Serverless

* El código de desarrollo sobre serverless se diseñará en base a funciones de pequeño tamaño.
* Las funciones se ejecutan en un contexto sin estado, por lo que no hay relación entre una inovcación a la función y la siguiente.

* Solo se paga por lo que se consume





