---
layout: post
title: Qué son los Dockers
excerpt: "bla bla bla"
categories: docker
tags: [docker]
image:
  feature: covers/dialogflow.jpg
comments: true
share: true
author: victor_cuervo
---

Documentación
* https://docs.docker.com/get-started/

Formación
* https://training.play-with-docker.com/
* https://training.play-with-docker.com/alacart/




## Qué es un Docker

Las utilidades que exitian para gestionar contenedores eran complejas. Es por ello que aparece Docker.

Docker crea un conjunto de tools para que se pueda extender el uso de contenedores.

Permite a los desarrolladores y operadores empaquetar aplicaciones dentro de los contenedores. E integrar esta integración en los pipelines CI/CD.

Esto nos permite ir a un modelo de único despliegue de las aplicaciones. Lo cual reduce los tiempos de configuración de los entornos.

Las aplicaciones se empaquetan con todas las funcionalidades que necesitan para ser ejecutadas. De esta manera cuando ejecutemos el contenedor en otro entorno nos vamos a asegurar que se ejecuta de la misma manera.

Las modificaciones sobre el entorno se hacen directamente sobre la imagen.

Los contenedores aprovechan los recursos mejor que una VM, ya que se pueden ajutar más contenedores que VM a una máquina física.

Los contenedores ofrecen un interface estandar a los desarrolladores. Ya que les puedes ofrecer una imagen con lo que ellos necesiten y simplemente utilizand un `docker run`.

Docker ofrece un conjunto de herramientas, desarrolladas por la comunidad en proyectos opensource, que resuelven problemas comunes como puede ser la "orquestación de contenedores".


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
~~

## Docker MongoDB




## Características de un contenedor

Características:
	* **Ligeros**, los contenedores son construidos a partir del sistema de ficheros, por lo cual comparten el mismo sistema operativo y máquina. Necesitan menos capacidad de memoria para arrancar.
	* **Estándares**, los contenedores están basados en estándares y se ejecutan en múltiples plataformas de SO: Linux, Windows,... y plataformas Cloud.
	* **Seguros**, los contenedores aíslan a las aplicaciones entre sí y de la infraestructura.

![Contenedores Docker]({{ site.url }}/images/dockers/contenedores-docker.png)

## Contenedores versus Docker

* **Los contenedores** son una abstracción de la capa de aplicación, por lo cual múltiples contenedores comparten el mismo SO. Cada contenedor se ejecuta como un proceso aislado dentro del SO. Los contenedores son mucho más pequeños en espacio y además arrancan de una forma rápida.
* **Las máquinas virtuales** son abstracciones del hardware físico, las cuales nos permiten ejecutan múltiples máquinas virtuales en un único servidor. Cada máquina virtual tiene su propio SO, con sus librerías, configuraciones y aplicaciones necesarias para ejecutarse. Las máquinas virtuales pueden llegar a ocupar gigas de memoria y por lo tanto son lentas a la hora de arrancar.


![Contenedores]({{ site.url }}/images/dockers/contenedor.png)
![Máquina Virtual]({{ site.url }}/images/dockers/vm.png)
![Aplicaciones en Contenedores y Máquinas Virtuales]({{ site.url }}/images/dockers/aplicaciones-mv-docker.png)

## Características de los Contenedores

Características de un Contenedor
https://docs.docker.com/get-started/#docker-concepts

* **Flexible**, incluso las aplicaciones más complejas se pueden poner dentro de un
* **Ligeros**, aprovechan y comparten el kernel de la máquina.
* **Intercambiables**, se pueden desplegar actualizaciones en caliente.
* **Portables**, se pueden construir localmente, desplegar en el cloud y ejecutar en cualquier sitio.
* **Escalables**, se pueden incrementar y distribuir de forma automática réplicas de los contenedores.
* **Apilables**, se pueden apilar servicios de forma vertical y en caliente.


## Historia de Docker

En 2015 Docker dona la implementación de contenedores conocida como **runC** a la Open Container Initiative (OCI) para ayudar a la estandarización y extensión del ecosistema de contenedores.
A partir de este momento Docker utiliza **Containerd** como runtime de contenedores.
El sistema de Docker está compuesto por runC y containerd. Por un lado se basa en el estándar de contenedores y por otro va incluyendo nuevas herramientas al ecosistema de contenedores.


## ¿Qué es Docker?
Realmente Docker ya se vende como un producto. Con sus versiones Docker CE para equipos pequeños y Docker EE como solución para empresas.

![Qué es Docker]({{ site.url }}/images/dockers/que-es-docker.png)


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


## Dockerfile

En un entorno normal de desarrollo lo primero que tienes que hacer es solicitar un servidor sobre el cual puedan instalar el framework sobre el cual se apoyen tus desarrollos. Además una vez que lo consigues hacer funcionar en tu máquina local debías de probar que el entorno estaba configurado de la misma forma en los diferentes estadios: integración, pre y pro.

¿¿ejemplo Flask para las demos???

En el caso de Docker lo que se hace es descargar una imagen la cual contenga montado el framework de desarrollo. Sobre esta imagen iremos construyendo nuestra aplicación. De esta manera nos aseguraremos que la imagen base, las librerías necesarias y el código van todos juntos. Consiguiendo que se ejecute de igual forma en todos los entornos.

Las imágenes portables son definidas en un **Dockerfile**.


Un ejemplo  de Dockerfile sería el siguiente:

~~~sh
# Use an official Python runtime as a parent image
FROM python:2.7-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
~~~


Lo que estamos creando con el Dockerfile es una imagen portable que podemos publicar en un repositorio y que podría ser descargada y utilizada por otros.

Para construir una imagen desde un Dockerfile podemos utilizar lo siguiente:

~~~sh
$docker build -t <nombreimagen> <directorio>
~~~

Por ejemmplo

~~~sh
$docker build -t friendlyhello .
~~~

Para correr una aplicación (que ya lo habíamos visto)

~~~sh
$docker run friendlyhello
~~~

En este caso hay que publicar los puertos externos desde el contenedor hacía la máquina en la que lo ejecutamos. Es por eso que utilizamos el parámetro -p

~~~sh
$docker run -p 4000:80 friendlyhello
~~~

Estamos publicnado el puerto 80 del conetendor en el puerto 4000 de la máquina que lo alberga. El puerto 80 lo hemos expuesto desde el contenedor mediante el comando  EXPOSE 80 del Dockerfile.

Para ejecutar una aplicación como daemon

~~~sh
$docker run -d -p 4000:80 friendlyhello
~~~

Lo ejecutamos como daemon mediante la opción -d

Si queremos parar un contenedor, escribiremos lo siguiente:

~~~sh
$docker container stop <id>
~~~


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

## Docker Services: docker-compose
