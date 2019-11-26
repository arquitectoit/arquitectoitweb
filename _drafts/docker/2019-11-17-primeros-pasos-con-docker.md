---
layout: post
title: Primeros pasos con Docker
excerpt: "bla bla bla"
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


Ahora que ya [sabes un poco más sobre lo qué es Docker][Docker], ahora vamos a dar los primeros pasos con [Docker][Docker] y **aprender los comandos básicos para poder ejecutar un contenedor**.


## Ejecutar un contenedor

`$ docker container run -t ubuntu top`
Ejecuta el comando top para sacar los procesos. Al no tener la imagen ubuntu la descarga

`$ docker container ls`
Lista los contenedores disponibles

~~~sh
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
84d711ce23e0        ubuntu              "top"               32 seconds ago      Up 31 seconds                           optimistic_hodgkin
fc6aa677306c        ubuntu              "top"               9 minutes ago       Up 9 minutes                            agitated_tereshkova
~~~

`$ docker container exec -it b3ad2a23fab3 bash`
Mediante la opción exec y bash podemos inspeccionar el contenido del contenedor.

`-it`


Docker se basa en **Linux Kit** que es un proyecto opensource que nos permite ejecutar contenedores en diferentes plataformas (Windows/Mac) ofreciendo un subsistema Linux.

De esta manera Docker nos permite ofrecer la capacidad de los contenedores a muchas plataformas y así extenderse más.


## Docker Store
Es un registro público central de imágenes Docker.
Todo el mundo puede subir imágenes públicas sobre este registro.

https://store.docker.com/


Las imágenes del registro han sido escaneadas por Docker en búsqueda de vulnerabilidades.

Hay **imágenes certificadas** preparadas para el uso empresarial y que han sido testeadas con **Docker Enterprise Edition**.

`$ docker container run --detach --publish 8080:80 --name nginx nginx`
Ejecuta la imagen de nginx

`-- detach`
Ejecuta el contenedor en background

`--publish 8080:80`
Publica el puerto 80 del contenedor en el puerto 8080 de nuestra máquina

`--name nginx`
Indica el nombre que le ponemos a la imagen para así poder gestionarla. Podríamos poner `--name pepon-nieto`




`docker container inspect nginx`
Para inspeccionar la imagen de nginx


## Eliminar un contenedor

Para poder parar un contenedor deberemos de enviarle el comando `stop`.

`docker container stop [container id]`


~~~sh
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
d31755230016        nginx               "nginx -g 'daemon of…"   12 minutes ago      Up 12 minutes       0.0.0.0:8080->80/tcp   nginx
84d711ce23e0        ubuntu              "top"                    22 hours ago        Up 22 hours                                optimistic_hodgkin
fc6aa677306c        ubuntu              "top"                    22 hours ago        Up 22 hours                                agitated_tereshkova
~~~


`$ docker system prune`
Elimina los contenedores que están parados, volúmenes y redes no utilizadas e imágenes que se hayan quedado colgadas.

~~~sh
$ docker system prune
WARNING! This will remove:
        - all stopped containers
        - all networks not used by at least one container
        - all dangling images
        - all dangling build cache
Are you sure you want to continue? [y/N]
~~~



## Comandos Básicos Docker

~~~sh
$ docker version
~~~

Nos da información sobre la versión de Docker que estamos ejecutando.

~~~sh
$docker info
~~~

Nos da más detalles de la versión de Docker instalada

~~~sh
$docker run hello-world
~~~

Ejecuta una imagen. En este caso hello-worl

~~~sh
$docker image ls
~~~

Lista las imágenes que nos hemos descargado a nuestra máquina

~~~sh
$docker container ls
$docker container ls -all
~~~

Lista los contenedores que se están ejecutando. Si queremos ver aquellos que ya se ejecutaron deberemos de poner el atributo `-all`


Chuleta
## List Docker CLI commands
docker
docker container --help

## Display Docker version and info
docker --version
docker version
docker info

## Execute Docker image
docker run hello-world

## List Docker images
docker image ls

## List Docker containers (running, all, all in quiet mode)
docker container ls
docker container ls --all
docker container ls -aq






[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
