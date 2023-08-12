---
layout: post
title: ¿Qué es Docker?
excerpt: "Artículo que nos explica qué es Docker y los conceptos principales de imágenes y contenedores que están en su base."
categories: docker
tags: [docker,contenedor,imágen]
image:
  path: /images/covers/docker.png
  thumbnail: /images/covers/docker.png
  caption: Fotografía de [Thomas Kelley](https://unsplash.com/photos/t20pc32VbrU)
comments: true
share: true
author: victor_cuervo
---

Si estás empezando con el mundo de los [contenedores][QueEsUnContenedor] seguro que una de las preguntas que te asalta es **¿Qué es Docker?**. Pues Docker nace como un conjunto de herramientas que facilitan la gestión de contenedores y acaba convirtiéndose en una empresa que ofrece múltiples soluciones alrededor de los contenedores, tanto para la comunidad como soluciones enfocadas a empresas. Es por ello que podemos hablar de Docker como empresa o Docker como solución para la gestión de contenedores.

![Qué es Docker]({{ site.url }}/images/dockers/logo-docker.png)

Centrándonos en Docker como gestor de contenedores, y echamos la vista atrás, teníamos que las utilidades que existían para gestionar contenedores eran complejas. Es por ello que aparece Docker. Docker es una **tecnología opensource** que nos permite gestionar [contenedores][QueEsUnContenedor] de una forma sencilla. Docker **crea un conjunto de tools para que se pueda extender y generalizar el uso de contenedores**. Así, a través de Docker podremos crear, desplegar y ejecutar aplicaciones mediante el uso de los [contenedores][QueEsUnContenedor]. Es decir, Docker proporciona una serie de herramientas que nos permiten **manejar el ciclo de vida de los contenedores**

Docker permite a los desarrolladores y operadores **empaquetar aplicaciones dentro de los contenedores**. E integrar este proceso en los pipelines de CI/CD. Obteniendo una cadena unificada desde el desarrollo de aplicaciones hasta su puesta en producción.

Esto nos permite ir a un **modelo de único despliegue de las aplicaciones**. Lo cual reduce los tiempos de configuración de los entornos, los tiempos de despliegue,... mejorando, en ese sentido, el tiempo de puesta en producción de las aplicaciones.

La idea principal es que **las aplicaciones se empaquetan con todas las funcionalidades que necesitan para ser ejecutadas**. De esta manera independientemente del entorno en el que ejecutemos el contenedor (local, desarrollo o entornos productivos) siempre nos vamos a asegurar que se ejecuta de la misma manera.

![Contenedores Docker]({{ site.url }}/images/dockers/contenedores-docker.png)

## Imágenes y Contenedores Docker

Para poder llevar a cabo todo esto, Docker crea los conceptos de: **imagen y contenedor**. La **definición de las funcionalidades que necesita la aplicación se realiza en la imagen**. Las funcionalidades pueden ser varias y van desde definir cómo tiene que ser los servidores en los que corre la aplicación, qué librerías son necesarias para que se ejecute la aplicación y en que versiones, qué puertos tenemos que abrir al exterior,...

Cualquier modificación futura que sea necesaria realizar en el entorno se realiza sobre la imagen.

Cuando queremos ejecutar la imagen lo que hacemos es instanciarla de manera particular en lo que ya sería el **contenedor**. Podremos crear tantas instancias de una imagen como queramos y en los entornos que queramos.

Para poder instanciar una imagen simplemente tenemos que utilizar la utilidad `docker` ejecutando un comando

~~~
docker run nombre-imagen
~~~

## Beneficio de utilizar Docker

La tecnología Docker es un beneficio tanto para los desarrolladores como para los administradores. Por un lado **los desarrolladores se pueden focalizar en el desarrollo del código de la aplicación** y olvidar de la parte de infraestructura de la misma, mientras que **los administradores de sistemas pueden estandarizar los sistemas que tienen que controlar** y reducir el consumo de los mismos. Si bien se hace todo en un mismo punto de manera ordenada.

Todo este proceso, y mediante el uso de las **imágenes y contenedores**, es lo que permite que gestionemos nuestra infraestructura de la misma forma que gestionábamos las aplicaciones.

Además Docker nos permite separar las aplicaciones de la infraestructura y así podremos desplegar nuestro software de una mucho más rápida. Todo esto hace que se acorten los tiempos de puesta en producción de las aplicaciones.

[QueEsUnContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
