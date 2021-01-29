---
layout: post
title: Arquitectura Docker
excerpt: "Análisis de los elementos que conforman la Arquitectura Docker: cliente, daemon process, api rest y registros Docker."
categories: docker
tags: [arquitectura,api,docker engine,docker registry]
image:
  feature: covers/docker.png
  credit: Thomas Kelley
  creditlink: https://unsplash.com/photos/t20pc32VbrU
comments: true
share: true
author: victor_cuervo
---

La arquitectura [Docker][Docker] es una **arquitectura cliente-servidor**, dónde el *cliente* habla con el *servidor* (que es un proceso daemon) mediante un *API* para poder gestionar el ciclo de vida de los [contenedores][QueEsContenedor] y así poder construir, ejecutar y distribuir los [contenedores][QueEsContenedor].

El hecho de que el *cliente* se comunique con el *servidor* mediante el *API* hace que el *cliente* y *servidor* puedan estar en la misma máquina comunicándose mediante sockets de UNIX o bien en máquinas diferentes comunicándose mediante un end-point en la red.

![Arquitectura Docker]({{ site.url }}/images/dockers/arquitectura-docker.png)

[Docker][Docker] está **escrito en GO**, aunque también se aprovecha de muchas de las *capacidades del kernel Linux*, como *namespaces*, *cgroups*, y el sistema de ficheros *UnionFS*.

Dentro de los elementos de la **Arquitectura Docker** encontramos dos, por un lado el elemento principal de la arquitectura [Docker][Docker] que es el **Docker Engine** y por otro el **Registro Docker**.

## Docker Engine
El **Docker Engine** es la *aplicación cliente-servidor* que implementa [Docker][Docker]. Esta aplicación tiene tres componentes:

* **Servidor**, es el proceso principal de [Docker][Docker] y que funciona como proceso demonio del sistema. Es el encargado de gestionar los objetos que hay en Docker como *imágenes*, *contenedores*, *redes* y *volúmenes*. Se representa mediante el comando `dockerd`.
* **API Rest**, es un API Rest que nos permite acceder a las capacidades del servidor y ejecutar comandos sobre él. Podemos utilizar un simple `curl` para acceder a las capacidades del API de [Docker][Docker]
* **Cliente**, es la línea de comandos representada por el comando `docker`. El cliente habla vía el *API Rest* para poder ejecutar los comandos. Es lo que utilizaremos para poder ir gestionando el ciclo de vida de nuestras imágenes y contenedores.

<div style="text-align:center">
  <img src="{{ site.url }}/images/dockers/docker-engine-components.png" alt="Docker Engine"/>
</div>

## Registros Docker

Además del **Docker Engine** la **Arquitectura Docker** contiene otro elemento importante que son los **registros Docker**.

Los **registros Docker** (Docker Registry) son los que almacenan **imágenes Docker**. El **Docker Hub** es un registro público que almacena múltiples imágenes, algunas de ellas certificadas por **[Docker][Docker]**.

Por defecto, cuando ejecutamos un comando para crear un contenedor, se buscan las imágenes en **Docker Hub**. Si bien se pueden crear *registros privados de imágenes* mediante **Docker Datacenter (DDC)** y **Docker Trusted Registry (DTR)**

[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
