---
layout: post
title: ¿Qué es Dockerfile?
excerpt: "bla bla bla"
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






[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
