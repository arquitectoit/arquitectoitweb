---
layout: post
title: Beneficios de utilizar Docker
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

Si estás revisando la tecnología [Docker][Docker] es muy probable que te estés preguntando cuales son los beneficios de utilizar [Docker][Docker] para tus desarrolladores, para tus administradores y para tu negocio.

Podríamos indicar que los principales beneficios de utilizar [Docker][Docker] son:


### 1. Entorno Desarrollo ¿?

Estandariza los entornos de ejecución para las aplicaciones, ya que estos entornos pasan a estar definidos en imágenes. De esta manera las imágenes se podrán utilizar de igual manera en un entorno local o en entornos de producción.


Al estar los entornos definidos por softare, las herramientas de CI/CD pueden creaarlos, manejarlos y borrarlos atendiendo a las necesidades del pipeline.

### 2. Entornos portables y de poco peso

Al ser un entorno estánar disponemos de una **gran portabilidad de las cargas**, las cuales pueden ejecutarse desde una máquina en local, pasando por una máquina virtual en un datacenter o en una cloud pública.

La portaibildiad y poco peso del entorno hace que sea sencillo manejar las cargas de forma dinámica realizando escalado atendiendo a la demanda de las aplicaciones, de forma casi en tiempo real.

### 3. Ejecutar más cargas en el mismo hardware

Los **contenedores Docker** ofrecen una alternativa más ligera que los gestores de máquinas virtuales, por lo cual se puede optimizar de mejor manera el hardware que tenemos para albergarlo.



### Fácil de Utilizar
Docker es una tecnología rápida de aprender y que se puede empezar a utilizar de una forma sencilla. Además existen muchos recursos alrededor de Docker que facilitar esa sencilla adopción.

Además la tecnología Docker está disponible en las plataformas Windows y Mac, por lo cual cualquier desarrollador puede empezar a utilizarla en pocos pasos.

### Rápido escalado de los sistemas
Hasta ahora el escalado de aplicaciones estaba directamente relacionado con la incorporación de nuevo hardware. Por lo cual el ritmo de crecimiento del hardware era lineal al número de aplicaciones que ibamos incorporando.

El uso de contenedores Docker permite que mucha más carga sea procesada con menos necesidades de hardware, ya que el hardware puede ser compartido entre múltiples contenedores Docker.
