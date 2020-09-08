---
layout: post
title: Ciclo de Vida DevOps
excerpt: "bla bla bla"
categories: devops
tags: [herramientas]
image:
  feature: covers/devops.png
comments: true
share: true
author: victor_cuervo
---

Sería de extrañar que hubieses visto una presentación sobre [DevOps][DevOps] y no te hubieses encontrado el diagrama que lo representa en forma de infinito. Diagrama que viene a representar que el **ciclo de vida [DevOps][DevOps]** sigue una serie de fases, las cuales terminan realimentando el inicio del proceso, convirtiéndose este en un proceso infinito.

![Diagram DevOps]({{site.url}}/images/devops/devops.png)

Veamos un poco más en detalle cual es la finalidad de cada una de las fases del **ciclo de vida [DevOps][DevOps]**:

## Planificación
En la fase de **planificación** del **ciclo de vida [DevOps][DevOps]** es dónde nos tenemos que centrar en dos puntos: *¿Qué queremos?* y *¿Cuándo lo queremos?*.

Para poder saber *¿qué queremos?* deberemos de **definir las funcionalidades** que existen dentro del producto de software que vamos a desarrollar. Estas funcionalidades se definen mediante la creación de **requisitos**.

Es por ello que en esta fase deberemos de apoyarnos en una herramienta que nos permita esa definición clara de los requisitos que debe cumplir nuestro software.

Los **requisitos** deberá de organizarse en **versiones**. Es decir, es en esta primera fase de planificación en la que vamos a decidir qué funcionalidades van en cada una de las versiones de nuestro software. Esto es muy importante ya que deberemos de **mantener la trazabilidad desde el requisito hasta que el software esté siendo operado en una producción**.

La organización de las funcionalidades en versiones nos responderá a la pregunta de *¿cuándo lo queremos?*.

Si estamos trabajando bajo un marco o modelo Agile **agruparemos los requisitos en un backlog**, al cual iremos dándo salida en cada una de las iteraciones de nuestra metodología Agile.

## Desarrollo
En esta fase realizaremos la **codificación de las funcionalidades descritas en el anterior paso** utilizando el lenguaje o los lenguajes de programación necesarios para llevarlo a cabo.

En este punto del **ciclo de vida [DevOps][DevOps]** deberemos de disponer de un repositorio de código sobre el cual trabaje el equipo y que nos sirva para poder dejar todo el código fuente que vayamos desarrollando. Existen varios tipos de repositorios de código fuente en el mercado, si bien los más extendidos son los **repositorios Git**.

Es muy importante que mientras vamos desarrollando el código asociado a una funcionalidad, **codifiquemos las pruebas unitarias asociadas al mismo** que nos permitan dar una cobertura de nuestro código en sucesivas fases.


## Construcción

* Pruebas funcionales

### Test

* Calidad de Código
* Pruebas Unitarias
* Pruebas de Regresión




## Entrega

### Despliegue

* El desplegar siempre ha sido complicado al existir los roles de desarrollo y explotación
* Problemas de hacerlo a mano, ¿en cuántos nodos tengo que desplegarlo? ¿cómo hago una parada ordenada del nodo?
* La solución pasa por la Automatización de los procesos de despliegue
* El equipo de desarrollo solicita el despliegue y este se ejecuta de forma automática
* En el caso de que falle, poder de forma automática echarlo atrás
* En el proceso de despliegue se ejecuta de forma automática las pruebas

* Hay que apoyarse en procesos de automatización tipo Ansible

## Operación
* Toda aplicación puesta en producción necesita de una operación y más en los primeros momentos tras el despliegue que es dónde puede sufrir más incidencias.

* La operación ya no es asignar recursos de forma manual: asignar más espacio en disco, dar de alta otro nodo u asignar más moemoria o capacidad de computo.

* La aplicación y la infraestructura deben de convivir en un entorno en la cual la infraestructura sea capaz de absorver de forma dinámica las necesidades que demande la aplicación (siempre dentro de un marco correcto)

* Esto se consigue mediante modelos de cloud en los cuales el aprovisionamiento de recursos pueda realizarse de forma dinámica. Uso de infraestructura como código.


## Monitorización

* La aplicación puesta en producción debe de monitorizarse de forma continua para conocer su "estado de salud"
* Ya no hay un operador mirando fíjamente una pantalla o las alertas que se producen

* Monitorización reactiva -> ante fallos ajusto la plataforma
No consigue en detectar posibles fallos o falta de recursos de la aplicación. Si no que ante una alerta la aplicación pueda interactuar con la operación para poder disponer de más recursos, balancear entre nodos,...

* Monitorización proactiva -> conociendo las posibles fallos futuros, modifico la plataforma
Aprendizaje, si se que la CPU está subiendo, doy más CPU


* Los fallos de de funcionalidad detectados de la aplicación deben de ser notificados como incidencias dentro del backlog de la aplicación de forma automática. Y así, de esta forma, poder cerrar nuestro ciclo para empezar de nuevo.



[DevOps]: {{site.url}}/devops/que-es-devops/
