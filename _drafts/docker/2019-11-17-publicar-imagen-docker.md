---
layout: post
title: Publicar imagen Docker
excerpt: "Proceso que explica como publicar imagen Docker en un registro Docker Hub utilizando la línea de comandos."
categories: docker
tags: [docker]
image:
  feature: covers/container.png
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---


## Publicar la imagen
Una vez que hemos definido una imagen con un Dockerfile podemos publicarla en el registro. De esta manera lo que haremos será que pueda ser utilizada por cualquier otra persona.


**Un registro es una colección de repositorios y un repositorio es una colección de imágenes**. Una cuenta en un registro nos permite crear múltiples repositorios.
El cliente de Docker (Docker CLI) utiliza el registro público de Docker por defecto. Aunque podríamos configurar que accediese a un Registro Privado.

Si queremos logarnos en el registro público de Docker deberemos de escribir. (Tenemos que tener una cuenta en https://hub.docker.com/)

~~~sh
$docker login
~~~

Para poder publicar la imagen lo primero que tenemos que hacer es tagearla.

~~~sh
$docker tag image username/repositorio:tag
~~~

Por ejemplo

~~~sh
$docker tag image victorcuervo/get-started:part2
~~~

Ahora pasaremos a publicarla, para ello utilizamos la opcicón push

~~~sh
$docker push username/repositorio:tag
~~~

Si queremos, podemos ejecutar la imagen en remoto

~~~sh
$docker run -p 4000:80 username/repositorio:tag
~~~



## Chuleta de creación y publicación de imágenes

~~~sh
docker build -t friendlyhello . # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello # Run "friendlyname" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello # Same thing, but in detached mode
docker container ls # List all running containers
docker container ls -a # List all containers, even those not running
docker container stop <hash> # Gracefully stop the specified container
docker container kill <hash> # Force shutdown of the specified container
docker container rm <hash> # Remove specified container from this machine
docker container rm $(docker container ls -a -q) # Remove all containers
docker image ls -a # List all images on this machine
docker image rm <image id> # Remove specified image from this machine
docker image rm $(docker image ls -a -q) # Remove all images from this machine
docker login # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag # Tag <image> for upload to registry
docker push username/repository:tag # Upload tagged image to registry
docker run username/repository:tag # Run image from a registry
~~~








[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
