---
layout: post
title: Fases del DevOps
excerpt: "bla bla bla"
categories: devops
tags: [herramientas]
image:
  feature: covers/devops.png
comments: true
share: true
author: victor_cuervo
---

¿Fases o Proceso?

# El Proceso DevOps

![Diagram DevOps]({{site.url}}/images/devops/devops.png)

CI
* Planificación
* Desarrollo - Programación
* Compilación
* Test

CD
* Entrega
* Despliegue
* Operaración
* Monitorización


¿Contarlas? y en cada una explicar que se hace???



### Planificación

* Definición de las funcionalidades que existen para el producto de software.
* Hay que identificar qué funcionalidades se van a acometer en cada iteración del modelo.
* *Product Backlog* ¿DevOps o Agile?


### Desarrollo
* Codificación de las funcionalidades
* Uso de repositorios de código en los que tener dichas funcionalidades
* Pruebas e Infraestructura como código

### Test

* Calidad de Código
* Pruebas Unitarias
* Pruebas de Regresión


## CI
La integración continua es el proceso por el cual se automatiza el proceso de definición, desarrollo, compilación y ejecución del test.

Con lo cual conseguiremos que las últimas funcionalidades estén disponible como un entregable compilado con todas las pruebas pasadas.



### Liberar

### Desplegar

* El desplegar siempre ha sido complicado al existir los roles de desarrollo y explotación
* Problemas de hacerlo a mano, ¿en cuántos nodos tengo que desplegarlo? ¿cómo hago una parada ordenada del nodo?
* La solución pasa por la Automatización de los procesos de despliegue
* El equipo de desarrollo solicita el despliegue y este se ejecuta de forma automática
* En el caso de que falle, poder de forma automática echarlo atrás
* En el proceso de despliegue se ejecuta de forma automática las pruebas

* Hay que apoyarse en procesos de automatización tipo Ansible

### Operar
* Toda aplicación puesta en producción necesita de una operación y más en los primeros momentos tras el despliegue que es dónde puede sufrir más incidencias.

* La operación ya no es asignar recursos de forma manual: asignar más espacio en disco, dar de alta otro nodo u asignar más moemoria o capacidad de computo.

* La aplicación y la infraestructura deben de convivir en un entorno en la cual la infraestructura sea capaz de absorver de forma dinámica las necesidades que demande la aplicación (siempre dentro de un marco correcto)

* Esto se consigue mediante modelos de cloud en los cuales el aprovisionamiento de recursos pueda realizarse de forma dinámica. Uso de infraestructura como código.


### Monitorizar

* La aplicación puesta en producción debe de monitorizarse de forma continua para conocer su "estado de salud"
* Ya no hay un operador mirando fíjamente una pantalla o las alertas que se producen

* Monitorización reactiva -> ante fallos ajusto la plataforma
No consigue en detectar posibles fallos o falta de recursos de la aplicación. Si no que ante una alerta la aplicación pueda interactuar con la operación para poder disponer de más recursos, balancear entre nodos,...

* Monitorización proactiva -> conociendo las posibles fallos futuros, modifico la plataforma
Aprendizaje, si se que la CPU está subiendo, doy más CPU


* Los fallos de de funcionalidad detectados de la aplicación deben de ser notificados como incidencias dentro del backlog de la aplicación de forma automática. Y así, de esta forma, poder cerrar nuestro ciclo para empezar de nuevo.
