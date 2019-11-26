---
layout: post
title: Características Contenedores
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


## Características de un contenedor

Características:
	* **Ligeros**, los contenedores son construidos a partir del sistema de ficheros, por lo cual comparten el mismo sistema operativo y máquina. Necesitan menos capacidad de memoria para arrancar.
	* **Estándares**, los contenedores están basados en estándares y se ejecutan en múltiples plataformas de SO: Linux, Windows,... y plataformas Cloud.
	* **Seguros**, los contenedores aíslan a las aplicaciones entre sí y de la infraestructura.



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
