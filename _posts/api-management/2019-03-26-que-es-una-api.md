---
layout: post
title: ¿Qué es una API?
excerpt: "Artículo que analiza qué es una API desde una perspectiva de negocio. Revisando la pequeña historia que ha existido de los APIs en el mundo de la tecnología."
categories: api-management
tags: [api,api-economy,]
image:
  path: /images/covers/api.png
  thumbnail: /images/covers/api.png
comments: true
share: true
author: victor_cuervo
---

Describir **¿qué es una API?** puede resultar, a priori, una tarea sencilla. Si bien las múltiples acepciones que puede tener o la percepción que tenga el receptor puede cambiar por completo la explicación.

En este artículo intento explicar ¿qué es una API? pensando en que nuestro receptor es un usuario de negocio al cual tenemos que intentar embarcar en una estrategia de **API Economy** o al cual tenemos que convencer que el uso de las APIs desde negocio representan un beneficio global para la compañía.

Todavía recuerdo mis conversaciones con tecnólogos aprendidos y curtidos en un *entorno mainframe* a los cuales había que transmitir el concepto de las APIs. Ante mis explicaciones no podía obtener otra respuesta que no fuese el *"si esto lo hemos hecho toda la vida en el host"*. No andaban desencaminados, y en cierta medida lo expresaban de forma correcta, ya que el uso de las **rutinas** entre programas o las **transacciones** no dejaban de ser un interface de aplicación o API (Application Programming Interface) el cual les permitía compartir información entre programas o exponer las transacciones para ser consumidas por pantallas u otros sistemas. Si sabes ya algo de qué es una API verás que existen bastantes similitudes.

Y es que **en los modelos de desarrollo de software siempre nos hemos encontrado con las integraciones entre aplicaciones**. Mecanismos que permitían compartir información entre un sistema u otro. La base de datos de personas con las tarjetas, los datos de clientes con las campañas de marketing,...

Lo que ha ido evolucionando con el paso del tiempo son dos cosas. Por un lado **la tecnología que utilizábamos para poder comunicar un sistema con otro**. Ya fuesen las rutinas Cobol, las librerías de un lenguaje Java/.Net, las invocaciones RPC, la estandarización de los Webservices o los últimos modelos con REST.

Por otro **la forma en el cual se comparte la información entre los dos sistemas**. Es decir, cómo el sistema que expone la información hace llegar al sistema que la consume la suficiente información como para que pueda consumirlo. Aquí nos encontramos múltiples derivadas. Por un lado *cómo definir elementos que sean dinámicos y no estructuras estáticas*, por otro *modelos de estandarización de los tipos de dato entre los sistemas*,... Pero siempre desde un enfoque tecnológico. Es decir, **la información que se intercambiaban los sistemas estaba dictada por dos equipos de tecnólogos**, dejando de lado su carácter de negocio.

Llegando así hasta el momento actual, en el cual una API nos sirve para intercambiar información entre sistemas, utilizando estándares, pero siempre desde una perspectiva de negocio. Y es este último punto el que da un valor diferenciar al modelo de APIs actual o **APIs de Negocio**.

Pero entonces, al final, **¿qué es una API?**

## ¿Qué es una API?
A mi me gusta explicar que **una API es un interface de cualquier elemento del mundo real sobre el cual podamos interactuar**. Por ejemplo, si tenemos *una bombilla podremos encenderla o apagarla (ya incluso cambiarla de color)*, esta interacción con la bombilla es una API. Si pensamos en un restaurante, el *reservar una mesa es una acción que podemos hacer contra ese negocio y por lo tanto es posible definirlo como una API*. Si quiero realizar una *transferencia entre bancos*, dicha operación la podremos definir mediante una API,...

Así **las APIs nos permitirán conectar diferentes consumidores para que puedan acceder a dicha información**. Por ejemplo, si pensamos en el API de la bombilla lo que podemos tener es un *ChatBot como Alexa al cual podamos pedirle que encienda o apague nuestra luz*, o mediante *el móvil podemos saber si estamos cerca de casa para apagar o encender la luz*, o *una simple aplicación web nos permitirá trabajar con el interface*.

Lo que tiene que hacer **la API es definir claramente que información tengo que suministrar, la acción que desencadena y que información voy a recibir**. Para que de esta forma pueda exponer un negocio y este pueda ser consumido.

## Beneficios de una API

Si conseguimos modelar nuestro negocio mediante APIs podremos tener algunos de los siguientes beneficios:

* **Generar nuevos modelos negocio**, ya que ponemos información de negocio a terceros los cuales pueden encontrar nuevos modelos de negocio que nosotros desconozcamos. Muy útil para aplicarlo a modelos de innovación.

* **Automatizar acciones**, si un negocio tiene expuesta su funcionalidad mediante APIs, podremos consumirlas y finalmente automatizar acciones del día a día. Esta automatización redundará en una reducción de costes.

* **Integrar áreas de negocio**, la información de una API puede ser externa e interna. En el caso que la información sea interna los departamentos de nuestra empresa pueden compartirla y reutilizarla entre los áreas. Evitando que la información aparezca duplicada.

## Ejemplos de APIs

Existen miles de APIs en el mercado que nos permiten hacer cosas de lo más variopintas. Por mencionar algunas podemos encontrar:

* [Buscar información sobre el tiempo en una localidad](https://openweathermap.org/api)
* [Traducir un texto a diferentes idiomas](https://cloud.google.com/translate/docs/)
* [Consultar información de tu cuenta bancaria](https://www.bbvaapimarket.com/)
* [Obtener información sobre matrículas](http://www.matriculaapi.com/)
* [Realizar pagos por Paypal](https://developer.paypal.com/docs/api/overview/)
* ... [miles de ellas en Programmable Web](https://www.programmableweb.com/).

## Un pequeño extra
Como fin del articulo quería dejar un vídeo que siempre me ha resultado curioso sobre la **definición de las APIs por Visa**:

<iframe width="560" height="315" src="https://www.youtube.com/embed/81ygVYCupdo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Espero, que aunque diferente, el artículo haya quedado algo didáctico y que sea de utilidad.
