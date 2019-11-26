---
layout: post
title: Arquitectura Docker
excerpt: "Artículo que revisa la arquitectura Docker y los componentes que la conforman: cliente, servidor y API Rest."
categories: docker
tags: [docker,arquitectura]
image:
  feature: covers/container.jpg
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---

[Docker][Docker] es una arquitectura cliente-servidor, dónde el *cliente* habla con el *servidor* (que es un proceso daemon) mediante un *API* para poder gestionar el ciclo de vida de los [contenedores][QueEsContenedor] y así poder construir, ejecutar y distribuir los [contenedores][QueEsContenedor].

[Docker][Docker] está **escrito en GO**, aunque también se aprovecha de muchas de las *capacidades del kernel Linux*, como *namespaces*, *cgroups*, y el sistema de ficheros *UnionFS*.


El cliente se comunica con el servidor mediante el API, por lo que pueden estar en la misma máquina comunicándose mediante sockets UNIX o en máquinas diferentes y comunicarse mediante un end-point de la red.


---

## Docker Engine
El Docker Engine es la aplicación cliente-servidor que implementa Docker. Esta aplicación tiene tres componentes:

* **Servidor**, es el proceso principal de docker y que funciona como demonio del sistema. Es el encargado de gestionar los objetos que hay en Docker como *imágenes*, *contenedores*, *redes* y *volúmenes*. Se representa mediante el comando `dockerd`.
* **API Rest**, es un API REST que nos permite acceder a las capacidades del servidor y ejecutar comandos sobre él.
* **Cliente**, es la línea de comandos representada por el comando `docker`. El cliente habla vía el API Rest para poder ejecutar los comandos.

![Docker Engine]({{ site.url }}/images/dockers/docker-engine-components.png)

---



## Docker Daemon
El **Docker Daemon** escucha del **API Rest** las peticiones para manejar los **objetos Docker**: imágenes, contenedores, redes y volúmenes. `dockerd` es el proceso que representa al **Docker Daemon**.

Los **Docker Daemon** se pueden comunicar entre sí para manejar servicios [Docker][Docker].

## Registros Docker
Los **registros Docker** (Docker Registry) almancenan **Imágenes Docker**. El **Docker Hub** es un regisro público que almacena múltiples imágenes, algunas de ellas certificadas por **[Docker][Docker]**. Por defecto se buscan las imágenes en **Docker Hub**. Si bien se pueden crear registros privados de imágenes mediante **Docker Datacenter (DDC)** y **Docker Trusted Registry (DTR)**

## Objetos Docker
Existen diferentes tipos de objetos [Docker][Docker]:

* Imágenes
* Contenedores
* Redes
* Volúmenes

### Imágen Docker
Una **imágen Docker** es una plantilla de solo lectura con instrucciones para crear un **contenedor Docker**. Normalmente las imágenes se basan en otras **imágenes Docker** incluyendo parametrizaciones o configuraciones adicionales.

¿La imagen base es **ubuntu**?

De esta manera puedes disponer de una *imágen que solo contenga un sistema operativo Ubuntu*, sobre la que instales un servidor [Nginx][Nginx] y una aplicación sobre dicho servidor, de igual manera que las instrucciones para poder ejecutar la aplicación. Cómo resultado se tiene una *nueva imagen Docker*.

Las imágenes se almacenan en los **Registros Docker** de tal manera que así podemos crear nuestras propias imágenes u otras que hayan generado otras personas.

La forma en la que se crea una imágen es mediante el fichero **Dockerfile**. Dicho fichero contiene las instrucciones para crear y ejecutar la imagen. Cada instrucción del fichero **Dockerfile** genera una capa en la imagen, de tal manera que si se cambian el fichero **Dockerfile** y alguna de las instrucciones, solo se regenera aquellas capas que hayan sido modificadas. Este proceso es el que hace realmente rápida y poco pesada la tecnología [Docker][Docker].

## Contenedores Docker
Un **contenedor Docker** es una instancia ejecutable de una imagen. De esta manera podremos crear, arrancar, parar, mover o borrar un contenedor mediante el cliente de [Docker][Docker].

El **contenedor Docker** se crea a partir de las instrucciones indicadas en la imágen más las configuraciones que le pasemos cuando estamos creando dicho contenedor.

Los **contenedores Docker** están aislados entre sí y de la máquina que los alberga.

El formato de contenedores que soporta [Docker][Docker] es el **libcontainer**.

## Flujo de creación de un contenedor

Vamos a partir del siguiente comando. En él se indica que **se ejecute un contenedor** a partir de una **imagen Ubuntu** y sobre ese Ubunto se ejecute el comando `top` que nos muestra los procesos que hay en el SO.

`$ docker container run -t ubuntu top`

De esta manera el flujo de creación del contenedor será el siguiente:

1. Si no existe la **imagen Ubuntu** de forma local, esta será descargada desde el **registro Docker** configurado, por defecto el **Docker Hub**. Esto es lo mismo que podríamos haber conseguido mediante el comando `$ docker pull ubuntu`.
2. [Docker][Docker] crea el contenedor a partir de la imagen. Lo mismo habríamos conseguido mediante `$ docker container create`.
3. [Docker][Docker] proporciona un espacio en el sistema de ficheros para el contenedor como última capa del mismo.
4. [Docker][Docker] crea el interface de red para conectar el contenedor a la red. Se asigna una IP al contenedor.
5. Se arranca el contenedor [Docker][Docker] y se ejecuta el comando `top`. Al haber indicado la opción -t veremos el terminal de salida del mismo.

![Arquitectura Docker]({{ site.url }}/images/dockers/arquitectura-docker.jpg)  

## Servicios Docker
Los **servicios Docker** permiten escalar contenedores a lo largo de múltiples **demonios Docker**. Todos estos demonios conforman **Swarm**, dónde encontramos múltiples *managers* y *nodos workers*. Cada nodo de *Swarm* es un **demonio Docker**, estos demonios se comunican mediante el **API Rest**

Mediante el **Servicio Docker** podemos indicar, por ejemplo, el *número de réplicas que queremos de nuestro contenedor*. El **servicio Docker** es balanceado sbre diferentes *nodos worker*.

EL modo **Swarm** es soportado a partir de **Docker 1.12**.



[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
[Nginx]: {{site.url}}/nginx/
