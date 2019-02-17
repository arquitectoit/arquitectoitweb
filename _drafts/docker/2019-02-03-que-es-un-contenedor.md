---
layout: post
title: ¿Qué es un contenedor?
excerpt: "bla bla bla"
categories: docker
tags: [contenedor,cgroups,namespaces,linux]
image:
  feature: covers/container.jpg
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---

Una de las mayores apuestas tecnológicas de los últimos años y a la sazón una de las más reclamadas en cuanto dentro del perfil tecnológico es el uso de los **contenedores**.

Pero ¿qué es un contenedor?¿es una tecnología nueva?¿por qué se han convertido el algo primordial en el desarrollo del software?¿realmente es tan útil como lo describen?

Bien, vayamos paso a paso explicando **¿qué es un contenedor?**.

## 1. ¿Qué es un contenedor?

Podríamos definir un **contenedor** como *un paquete ligero, autónomo y ejecutable de una pieza de software, el cual incluye todo lo necesario para ser ejecutado: código, runtime, herramientas y librerías del sistema, así como sus configuraciones*.

La idea es que, al ser autocontenido, el software se comporta siempre de la misma forma, independientemente del entorno en el que lo ejecutemos. El software se aisla del entorno y de las diferencias que los entornos puedan tener en sus diferentes estadios: desarrollo, preproducción y producción, así como de las diferentes configuraciones que estos entornos puedan tener entre sí.


Un **contenedor** es un proceso que se ejecuta de forma aislada, al cual se le dota de las capacidades de ejecución básicas de un runtime. Estas capacidades nos permiten instanciar servicios y aplicaciones sobre el contenedor.

Esta configuración hace que los **contenedores** que sean muy ligeros y rapidos de arrancar a diferencia de otros modelos como podría ser las **máquinas virtuales**.

![Qué es un contenedor]({{ site.url }}/images/dockers/que-es-contenedor.png){: .align-center}

Existen **contendores** tanto para sistemas Linux como para sistemas Windows, por lo cual se puede construir casi cualquier tipo de aplicación utilizando tecnología de contenendores.

## Contenedores Linux

Los contenedores aparecen en el mundo *Linux* por el año 2001 mediante el *proyecto VServer*.

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


## 2. Beneficios (o característias) de los contenedores --> Podría ser otro art?
contenedor -> problemas de entorno
contenedor -> devops
seguridad


## 3. Diferencias contenedores, vm

## 3. Historia de los contenedores

## cgroups
Los grupos de control o **cgroups** .





## Qué es un contenedor
* Un grupo de procesos que se ejecutan de forma aislada
* Cada contenedor tiene su conjunto de **namespaces**. Los **namespaces** que offece un contenedor de forma aislada son:





Los contenedores ofrecen namesapces y control groups:

* cgroups (control groups), control de grupos y monitorización

* Los contenedores llevan en linux más de 10 años, con lo cual no es una tecnología moderna.




## VM versus contenedores
* Cada VM tiene su propio SO y es muy pesada
* Contenedores no tienen un SO, si no que solo un conjunto específico de contenedores. Los contenedores comparten el mismo kernel.

* El aislamiento de los procesos del contenedor es proporcionado por los Linux Namespaces. Esto hace que su arranque sea muy rápido. Más rápido que las máquinas virtuales.

* Contenedores no sustituten a las VM. Si no que se complementan, incluso pueden ejecutarse sobre la VM.


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



[cgroups]: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/ch01

[namespaces]: https://lwn.net/Articles/528078/
