---
layout: post
title: Chuleta Comandos Docker
excerpt: "Chuleta Comandos Docker dónde puedes encontrar los comandos más utilizados con los contenedores Docker."
categories: docker
tags: [docker]
image:
  feature: covers/container.jpg
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---

Cuando trabajamos con [Docker][Docker] siempre es bueno el tener a mano una **culeta comandos [Docker][Docker]** con la que recordar cuáles son los comandos más utilizados, que seguro que nos sacan de más de un aprieto.

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
