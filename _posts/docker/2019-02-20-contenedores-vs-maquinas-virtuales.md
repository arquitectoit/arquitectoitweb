---
layout: post
title: Contenedores versus Máquinas Virtuales
excerpt: "bla bla bla"
categories: docker
tags: [contenedor,máquina virtual, hipervisor]
image:
  feature: covers/container.jpg
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
comments: true
share: true
author: victor_cuervo
---

Cuando empezamos a [tomar contacto con los **contenedores** y a leer sobre ellos][contenedor] una de las dudas que nos puede asaltar es ¿no es lo mismo un **contenedor** que una **máquina virtual**? No en vano ambas tecnologías nos ofrecen un mecanismo de virtualización.

Y es que aunque nos pueden servir para lo mismo presentan algunas diferencias, veámoslas **comparando un contenedor versus una máquina virtual**.

## Máquina Virtual

En el caso de una **máquina virtual** se permite que varios sistemas operativos (ya sean *Windows* o *Linux*) se ejecuten a la vez sobre una misma máquina física, es decir, sobre un mismo hardware.

El nacimiento de las **máquinas virtuales** se basa en poder aprovecha la capacidad de memoria y cpu de grandes máquinas físicas de forma virtual por varias instancias de sistemas operativos. Aprovechando al máximo el no uso, en ciertos momentos, de los sistemas. Es por ello que cuando configuramos nuestras **máquinas virtuales** definiremos cuanta cpu/memoria necesitan para arrancar.

En el caso de las **máquinas virtuales** se dispone de una pieza que es el **hipervisor** la cual emula el hardware físico para que las **máquinas virtuales** puedan utilizarlo. Estos hipervisores consumen recursos del sistema.

Cuando virtualizamos con una **máquina virtual** esta arranca todo el sistema operativo que está virtualizando. Es por ello que las imágenes de las **máquinas virtuales** son muy pesadas (al contener todos los ficheros del sistema operativo) y digamos que "se toman su tiempo" a la hora de arrancar

## Contenedores

Si hablamos de **contenedores**, estos comparten el mismo kernel del sistema operativo, si bien tienen un espacio aislado y controlado para la ejecución de procesos, gracias a los *namespaces* y *control groups* de Linux. Son solo necesarios un pequeño conjunto de ficheros para poder generar el contenedor sobre el sistema operativo.

El que solo necesitemos un conjunto de ficheros para poder ejecutar de forma aislada hace que los **contenendores** sean, por un lado muy ligeros y por el otro muy rápidos de arrancar.

El nacimiento de los **contenedores** va más enfocado a poder ejecutar aplicaciones y sus servicios relacionados de una forma aislada e independiente, buscando que se comportase de igual forma en todos los entornos.

![Contenedores versus Máquinas Virtuales]({{ site.url }}/images/dockers/virtualizacion-vs-contenedores.png){: .align-center}


## Contenedores versus Máquinas Virtuales
Entonces ¿la tecnología de **contenedores** viene a sustituir a las **máquinas virtuales**?

En el caso de que necesites utilizar todas las capacidades de un sistema operativo lo mejor es acudir a un modelo de **máquina virtual**. Por ejemplo si queremos que un usuario final disponga de un set de herramientas de trabajo puede ser un entorno idóneo. Estaremos enfocados a optimizar, de la mejor manera posible, el hardware dónde se ejecuta.

Mientras que si estamos pensando más en virtualizar aplicaciones para desplegarlas en entornos productivos deberíamos de ir más por el modelo de **contenedores**, dónde pudiésemos aislar todo lo necesario para que nuestra aplicación se ejecute.

De esta manera podemos desplegar nuestras aplicaciones en sus **contenedores** no solo en infraestructura *on premise*, si no que podremos subirla de igual manera a infraestructuras de [*cloud*][cloud], ya sean públicas o privadas. Es decir, al final le es indiferente la infraestructura hardware sobre la que se ejecuta.

A la hora de trabajar con recursos, las **máquinas virtuales** necesitan de una reserva de recursos, por ejemplo si la **máquina virtual** necesita de 1Gb, al tener 100 **máquinas virtuales** necesitaremos de 100Gb, mientras que los **contenedores** se podrían desplegar sobre la misma memora de 1Gb si necesidad de reserva.

Podríamos concluir que ambas tecnologías se van a utilizar para fines distintos, es decir, los **contenedores** no vienen a sustituir a las **máquinas virtuales**. Incluso, en algunos casos, se pueden complementar ya que lo que se suele hacer es levantar una **máquina virtual** y empezar a ejecutar **contenedores** sobre este entorno virtualizado.

[cloud]: {{site.url}}/cloud/
[contenedor]: {{site.url}}/{% post_url /docker/2019-02-18-que-es-un-contenedor %}
