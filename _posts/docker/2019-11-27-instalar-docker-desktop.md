---
layout: post
title: Instalar Docker Desktop
excerpt: "Proceso que explica cómo instalar Docker Desktop en Windows y en Mac. Requerimientos mínimos que necesitas para ejecutarlo en tu ordenador."
categories: docker
tags: [docker,docker desktop,windows,mac]
image:
  feature: covers/docker.png
  credit: Thomas Kelley
  creditlink: https://unsplash.com/photos/t20pc32VbrU
comments: true
share: true
author: victor_cuervo
---

Ahora que ya sabes lo [que es Docker][Docker] vamos a ver cómo podemos instalar Docker Desktop en nuestro ordenador para empezar a utilizarlo.

Lo primero que tenemos que conocer es qué es **Docker Desktop**. **Docker Desktop es la plataforma de desarrollo de [Docker][Docker]**, en la que incluye todas las herramientas y la mejor forma de empezar a trabajar con [Docker][Docker].

## Docker Desktop en Mac
Para instalar **Docker Desktop en Mac** debes de seguir los siguientes pasos:

1. [Descargarte Docker](https://hub.docker.com/?overlay=onboarding)
2. Una vez descargado pinchar en el instalable `Docker.dmg`, el cual arrastraremos sobre nuestra carpeta de aplicaciones.
3. Hacer click sobre la aplicación `Docker` en nuestras aplicaciones, lo cual nos pedirá una autorización para arrancarse
4. Se ejecutará el proceso daemon de Docker en nuestro ordenador.

![Docker Desktop en Mac]({{ site.url }}/images/dockers/docker-desktop-mac.png)

> Para poder ejecutar Docker en Mac necesitamos que sea un sistema operativo 10.13 o superior con 4Gb de RAM.

En el caso de Mac, la ballena de [Docker][Docker] aparece en la barra de estado y debería de tener el estado *"Docker Desktop is running"*.

## Docker Desktop en Windows

Para instalar **Docker Desktop en Windows** debes de seguir los siguientes pasos:

1. [Descargarte Docker](https://hub.docker.com/?overlay=onboarding)
2. Una vez descargado pinchar sobre el ejecutable `InstallDocker.msi` que lanzará el proceso de instalación.
3. Seguir el proceso de instalación para aceptar la licencia, autorizar al instalador y proceder a ejecutar la instalación.
4. Finaliza el proceso de instalación.
5. Automáticamente se arrancará el proceso daemon de Docker en nuestro ordenador.

![Docker Desktop en Windows]({{ site.url }}/images/dockers/docker-desktop-windows.png)

> Para poder ejecutar Docker en Windows necesitamos que sea un Windows 10 Pro, Enterprise o Education de 64bits con 4Gb de RAM.

En el caso de Windows, la ballena de [Docker][Docker] aparece en la barra de Windows y debería de tener el estado *"Docker Desktop is running"*.

## Primera ejecución de un contenedor
Si quieres ver que está todo funcionando correctamente lo que tienes que hacer es abrir un terminal de Mac `terminal` o consola de comandos en Windows `cmd` y ejecutar el siguiente comando.

~~~
docker run hello-world
~~~

Habrás ejecutado tu primer contenedor [Docker][Docker] y en pantalla verás lo siguiente:

~~~
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
~~~

[Docker]: {% post_url docker/2019-11-26-que-es-docker %}
