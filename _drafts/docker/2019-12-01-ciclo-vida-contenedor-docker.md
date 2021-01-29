---
layout: post
title: Ciclo de Vida de un Contenedor Docker
excerpt: "xx"
categories: docker
tags: [ciclo de vida]
image:
  feature: covers/docker.png
  credit: Thomas Kelley
  creditlink: https://unsplash.com/photos/t20pc32VbrU
  comments: true
share: true
author: victor_cuervo
---

![Arquitectura Docker]({{ site.url }}/images/dockers/arquitectura-docker.png)



## Flujo de creación de un contenedor

Vamos a partir del siguiente comando. En él se indica que **se ejecute un contenedor** a partir de una **imagen Ubuntu** y sobre ese Ubunto se ejecute el comando `top` que nos muestra los procesos que hay en el SO.

`$ docker container run -t ubuntu top`

De esta manera el flujo de creación del contenedor será el siguiente:

1. Si no existe la **imagen Ubuntu** de forma local, esta será descargada desde el **registro Docker** configurado, por defecto el **Docker Hub**. Esto es lo mismo que podríamos haber conseguido mediante el comando `$ docker pull ubuntu`.
2. [Docker][Docker] crea el contenedor a partir de la imagen. Lo mismo habríamos conseguido mediante `$ docker container create`.
3. [Docker][Docker] proporciona un espacio en el sistema de ficheros para el contenedor como última capa del mismo.
4. [Docker][Docker] crea el interface de red para conectar el contenedor a la red. Se asigna una IP al contenedor.
5. Se arranca el contenedor [Docker][Docker] y se ejecuta el comando `top`. Al haber indicado la opción -t veremos el terminal de salida del mismo.



[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
[Nginx]: {{site.url}}/nginx/
