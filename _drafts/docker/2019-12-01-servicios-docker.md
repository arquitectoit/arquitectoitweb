---
layout: post
title: Servicios Docker
excerpt: "xxx"
categories: docker
tags: [docker,arquitectura,api]
image:
  feature: covers/docker.png
  credit: Thomas Kelley
  creditlink: https://unsplash.com/photos/t20pc32VbrU
  comments: true
share: true
author: victor_cuervo
---


## Servicios Docker
Los **servicios Docker** permiten escalar contenedores a lo largo de múltiples **demonios Docker**. Todos estos demonios conforman **Swarm**, dónde encontramos múltiples *managers* y *nodos workers*. Cada nodo de *Swarm* es un **demonio Docker**, estos demonios se comunican mediante el **API Rest**

Mediante el **Servicio Docker** podemos indicar, por ejemplo, el *número de réplicas que queremos de nuestro contenedor*. El **servicio Docker** es balanceado sbre diferentes *nodos worker*.

EL modo **Swarm** es soportado a partir de **Docker 1.12**.





[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
[QueEsContenedor]: {% post_url docker/2019-02-18-que-es-un-contenedor %}
