---
layout: post
title: Que es Kubernetes
excerpt: "aaa"
categories: kubernetes
tags: [x,x]
image:
  feature: covers/write.png
  credit: Wim Mulder
  creditlink: https://www.flickr.com/photos/wimmulder/
comments: true
share: true
author: victor_cuervo
---

El proceso de despliegue de una nueva versión en producción siempre ha sido una experiencia cual menos compleja, posiblemente haya quién nos diga que traumática, y ni mucho menos sencilla.

Este arduo proceso que es la puesta en producción de una aplicación...




* Recrear
* Incremental (Ramp Up)
* Blue/Green
* Canary
* Test A/B
* Shadow


# Curso Introducción Kubernetes

## Introducción
Muchas de las compañías a día de hoy están moviendo su software al Cloud.
Si bien muchas compañías depedenden de un legacy creado a lo largo de decadas obteniendo **monolitos de software** con múltiples de componentes acoplados e imposibles de separar que hace una verdadera pesadilla las puestas en producción de estos tipos de software.

### Monolito
Aunque muchas aplicaciones quieren tener una estrategia de movimiento a cloud, existe una realidad y es que las aplicaciones legay, en algunos casos, no pueden desplegarse en un entorno cloud.

Las aplicaciones monolíticas suelen ejecutarse en un único proceso, por lo que escalar parte de las funcionalidades que contiene el monolito es imposible, solo es posible instanciar todo. Es por ello que se suele instanciar el monolito como un nuevo servicio en un nuevo servidor y por normalmente estos servicios se pueden poner detrás de un balanceador (cosa que hace que sea más cara la solución).

Las actualizaciones, parcheados y migraciones de los monolítos generan paradas en la aplicación y ventanas de mantenimiento. Algo que se puede minimizar mediantel el uso de configuraciones activo/pasivo. Esta situación **hace que sea muy complejo tener al día los sistemas parcheados**.

### Microservicios
Al revés que tener un sistema monolítoco la idea de los microservicios es la de dividir la aplicación


-----

Índice
* ¿Qué es Kubernetes?


Si revisámos en [la página oficias de Kubernetes][KubernetesOficial] sobre **¿Qué es Kuberneres?** vemos que nos dice que **es una plataforma portable y extensible de código abierto para administrar cargas de trabajo y servicios**.

¿Qué quiere decir con que Kubernetes es una plataforma?

Kubernetes está diseñado como una plataforma con un conjunto de componentes y herramientas que facilitan el despliegue, el escalado y la administración de aplicaciones.


Kubernetes es un entorno **centrado en la gestión de contenedores**. De esa manera nos permite controlar la parte de infraestructura relativa al computo, las redes y el almacenamiento.

Permite portabilidad entre proveedores de infraestructura?



## Historia de Kubernetes
Kubernetes es desarrollador por Google y **liberado a la comunidad en 2014**.


## Características de Kubernetes

* Plataforma de Contenedores
* Plataforma de Microservicios


## Elementos de Kubernetes
https://kubernetes.io/docs/concepts/overview/components/

* **Etiquetas o Labels** para organizar los recursos.
* **Anotaciones**, para asignar información a un recurso y así facilitar sus flujos de trabajo y facilitar que las herramientas administrativas inspeccionen su estado.
* **Control Plane o Plano de Control**, ...


## Arquitectura Kubernetes

![Componentes Kubernetes]({{site.url}}/images/kubernetes/componentes-kubernetes.png)

### Nodos Worker
Un cluster Kubernetes se compone de un conjunto nodos, que serían los workers. Los **workers** son los encargados de ejecutar las aplicaciones contenerizadas. Al menos existe un nodo worker.

Dentro de un nodo worket encontramos los **pods** que son los componentes de carga de la aplicación.

### Control Plane
El plano de control o control plane gestiona los nodos worker y los pods que existan en los clusters.



contiene nodos agente **kubelet** y un **plano de control del cluster** conocido como **master**.





[KubernetesOficial]: https://kubernetes.io/es/docs/concepts/overview/what-is-kubernetes/


