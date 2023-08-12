---
layout: post
title: Objetos Docker
excerpt: "Para entender la arquitectura Docker hay que conocer los objetos Docker que la conforman: Imágenes, Contenedores, Servicios y elementos de Red."
categories: docker
tags: [imágenes,contenedores,volúmenes,redes]
image:
  path: /images/covers/docker.png
  thumbnail:  /images/covers/docker.png
  caption: Fotografía de [Thomas Kelley](https://unsplash.com/photos/t20pc32VbrU)
comments: true
share: true
author: victor_cuervo
---

Dentro de la [Arquitectura Docker][ArquitecturaDocker] existen diferentes tipos de **objetos Docker**, los cuales tenemos que conocer para poder trabajar con los [contenedores][QueEsContenedor]:

* Imágenes Docker
* Contenedores Docker
* Volúmenes Docker
* Redes Docker

## Imagen Docker
Una **imagen Docker** es una plantilla de solo lectura con instrucciones para crear un **contenedor Docker**. Normalmente las imágenes se basan en otras **imágenes Docker** incluyendo parametrizaciones o configuraciones adicionales.

De esta manera puedes disponer de una *imagen que solo contenga un sistema operativo Ubuntu*, sobre la que instales un servidor [Nginx][Nginx] y una aplicación sobre dicho servidor, de igual manera que las instrucciones para poder ejecutar la aplicación. Cómo resultado se tiene una *nueva imagen Docker*.

Las imágenes se almacenan en los **Registros Docker** de tal manera que así podemos crear nuestras propias imágenes u otras que hayan generado otras personas.

La forma en la que se crea una imagen es mediante el **fichero Dockerfile**. Dicho fichero contiene las instrucciones para crear y ejecutar la imagen. Cada instrucción del **fichero Dockerfile** genera una capa en la imagen, de tal manera que si se cambian el **fichero Dockerfile** y alguna de las instrucciones, solo se regenera aquellas capas que hayan sido modificadas. Este proceso es el que hace realmente rápida y poco pesada la tecnología [Docker][Docker].

## Contenedor Docker
Un **contenedor Docker** es una instancia ejecutable de una imagen. De esta manera podremos crear, arrancar, parar, mover o borrar un contenedor mediante el cliente de [Docker][Docker].

El **contenedor Docker** se crea a partir de las instrucciones indicadas en la imagen más las configuraciones que le pasemos cuando estamos creando dicho contenedor.

Es importante conocer que los **contenedores Docker** están aislados entre sí y de la máquina que los alberga.

El formato de contenedores que soporta [Docker][Docker] es el **libcontainer**.

Podemos arrancar un contenedor de la siguiente manera:
~~~
$docker run -it --name contenedor1 ubuntu bash
~~~

## Volúmenes Docker

Los datos persistentes generados y utilizados por [Docker][Docker] se almacenan en **volúmenes Docker**

Los contenedores no pueden almacenar datos ya que una vez que se elimina el contenedor se eliminan todos los datos asociados a él. Es por ello que en este caso montaremos **volúmenes Docker** para almacenar la información persistente.

El ciclo de vida de los **volúmenes Docker** es diferente al ciclo de vida de los [contenedores][QueEsContenedor]

Podemos asociar un volumen a un contenedor de la siguiente manera:
~~~
$docker run -it --name contenedor1 -v mivolumen:/volumen ubuntu bash
~~~

## Redes Docker
La parte de redes de [Docker][Docker] es la que permite que los contenedores, aislados por diseño, se comuniquen entre sí.

Dentro del sistema de redes de [Docker][Docker] encontramos 5 tipos de controlador. Dependiendo de las necesidades podemos utilizar uno u otro:

* **Bridge**, es el driver de red por defecto del contenedor. Se utiliza si la aplicación está ejecutándose en un sistema "standalone".
* **Host**, este driver elimina el aislamiento entre el [contenedor Docker][Docker] y el host Docker. Esto es cuando no se necesita aislamiento entre el contenedor y el host.
* **Overlay**, permite que los *servicios Swarm* se comuniquen entre sí. Se utiliza si los contenedores se están ejecutando en diferentes *Docker Host*.
* **None**, este driver deshabilita todo el sistema de networking.
* **macvlan**, asigna una dirección MAC al contenedor para que parezca un dispositivo físico.

Ya hemos visto los 4 principales **objetos Docker** que hacen que la [Arquitectura Docker][Docker] pueda gestionar el ciclo de vida de los [contenedores][QueEsContenedor].

[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
[ArquitecturaDocker]: {% post_url docker/2019-12-02-arquitectura-docker %}
[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
[Nginx]: {{site.url}}/nginx/
