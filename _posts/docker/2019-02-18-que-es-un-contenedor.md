---
layout: post
title: ¿Qué es un contenedor?
excerpt: "Los contenedores son paquetes ligeros, autónomos y ejecutables que incluyen todo lo necesario para ser ejecutados de forma independiente."
categories: docker
tags: [contenedor,cgroups,namespaces,linux]
image:
  feature: covers/container.png
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---

Una de las mayores apuestas tecnológicas de los últimos años y a la sazón una de las más reclamadas dentro del perfil tecnológico es el uso de los **contenedores**.

Pero ¿qué es un contenedor?¿es una tecnología nueva?¿por qué se han convertido el algo primordial en el desarrollo del software?¿realmente es tan útil como lo describen?

Bien, vayamos paso a paso explicando **¿qué es un contenedor?**.

## ¿Qué es un contenedor?

Podríamos definir un **contenedor** como *un paquete ligero, autónomo y ejecutable de una pieza de software, el cual incluye todo lo necesario para ser ejecutado: código, runtime, herramientas y librerías del sistema, así como sus configuraciones*.

Un **contenedor** es un proceso que se ejecuta de forma aislada, dentro de nuestro sistema operativo, al cual se le dota de las capacidades de ejecución básicas de un runtime. Estas capacidades nos permiten instanciar servicios y aplicaciones sobre el contenedor.

Esta configuración hace que los **contenedores** que sean muy ligeros y rapidos de arrancar a diferencia de otros modelos como podría ser las **máquinas virtuales**.

![Qué es un contenedor]({{ site.url }}/images/dockers/que-es-contenedor.png){: .align-center}

Existen **contendores** tanto para sistemas Linux como para sistemas Windows, por lo cual se puede construir casi cualquier tipo de aplicación utilizando tecnología de contenendores.

La idea es que dentro del contenedor podamos definir **los servicios básicos que necesita nuestro software**, las **configuraciones del software** y por último el **software en sí**. Todo queda autocontenido dentro del contenedor.

Al tener un elemento autocontenido, **el software se comporta siempre de la misma forma, independientemente del entorno en el que lo ejecutemos**. El software se aisla del entorno y de las diferencias que los entornos puedan tener en sus diferentes estadios: desarrollo, preproducción y producción, así como de las diferentes configuraciones que estos entornos puedan tener entre sí.

Esto nos permite reducir las configuraciones de los entornos, con el coste de tener igualados entornos de preproducción y producción, nos permite que el desarrollador inserte las configuraciones del software de una forma aislada y que los departamentos de explotación solo tengan que gestionar un elemento único independientemente de la tecnología que subyace por debajo.

Además los contenedores enmarcados dentro de un entorno [Devops][Devops] hace que se pueda automatizar todo su proceso, desde la construcción, pasando por el despliegue, hasta la gestión en producción de los mismos.

## Contenedores en Linux
Pero, ¿los contenedores son una tecnología nueva? La realidad es que los contenedores aparecen en el mundo *Linux* allá por el año 2001 mediante el *proyecto VServer*.

La idea del contenedor *Linux* se apoya en dos de sus tecnologías, por un lado en los [control groups o cgroups][cgroups], que son una función del kernel que controla y limita el uso de recursos para un proceso o grupo de subprocesos.

[Control groups][cgroups] utiliza **systemd** que proporciona un sistema y un gestor de servicios para poder gestionar procesos de forma aislada.

Por otro los [namespaces][namespaces] permiten virtualizar el kernel de Linux, desde los que son los identificadores de proceso hasta las funciones de red.

Así los [namespaces][namespaces] nos ofrecen los siguientes espacios de nombre de forma virtualizada:

* **mnt**, para montar y desmontar directorios.
* **net**, el contenedor dispone de su propio stack de red.
* **ipc**, mecanismos de comunicación entre procesos, por ejemplo colas de mensajes.
* **user**, su propia vista de usuarios y grupos de usuarios del sistema.
* **utc**, para tener un hostname y domain por contenedor.

Esta virtualización es la que nos permite ejecutar varios **contenedores** sobre el mismo sistema.

[cgroups]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/ch01
[namespaces]: https://lwn.net/Articles/528078/
[Devops]: {{site.url}}/devops/
