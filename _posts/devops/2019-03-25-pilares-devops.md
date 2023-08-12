---
layout: post
title: Pilares del DevOps
excerpt: "Para una buena implantación de un modelo DevOps será fundamental que adoptemos una serie de pilares tecnológicos dentro de la organización. De esta manera conseguiremos la mayor eficiencia del modelo DevOps."
categories: devops
tags: [requisitos,microservicios,testing,automatización,cloud computing,monitorización,colaboración]
image:
  path: /images/covers/devops3.png
  thumbnail: /images/covers/devops3.png
  caption: Fotografía de [Chad Kirchoff](https://unsplash.com/photos/xe-e69j6-Ds)
comments: true
share: true
author: victor_cuervo
---

Una reacción normal cuando un **CIO** lee sobre [Devops][QueEsDevOps] y ve los [beneficios que nos aporta][BeneficiosDevOps] sería la de ¡yo quiero esto! y ¡lo quiero ya!. Esto es debido a que posiblemente muchos de los puntos de fallos que tenga en la organización se vean mejorados o solventados por la apliación de las técnicas de [Devops][QueEsDevOps].

Pero el camino de [Devops][QueEsDevOps] no es sencillo y para poder implantar una [metodología Devops][QueEsDevOps] en nuestra compañía deberemos de asentar los **pilares del [Devops][QueEsDevOps]**. Esto es el adoptar una seríe de tecnologías o técnicas previas a la implantación del [Devops][QueEsDevOps] o al menos para que posibiliten el mejor resultado del [modelo Devops][QueEsDevOps].

Podríamos identificar los siguientes **pilares sobre los que se asentaría el [Devops][QueEsDevOps]**:

* Gestión de requisitos
* Desarrollo basado en Microservicios
* Capacidades de Testing
* Automatización de Procesos
* Infraestructura como Código
* Cloud Computing
* Medición Continua
* Monitorización de Sistemas
* Herramientas de Comunicación y Colaboración

## Herramientas de Gestión de Requisitos
La fase de **definición de requisitos de un software** puede parecer la más sencilla en cuanto a su complejidad tecnológica, pero se convierte finalmente en la más costosa en tiempos y esfuerzos para los equipos. Esto suele ser debido a que, normalmente, no existe una definición clara de dichos requisitos.

Para este escenario deberemos de **huir rápidamente de lo que es una definición de requisitos basada en documentos**. En la cual el usuario y equipo de desarrollo esté iterando de forma eterna hasta encontrar un consenso.

> Que cada requisito esté asociado a una versión del software es fundamental para todos los procesos de un modelo [devops][QueEsDevOps].

Deberemos de apalancarnos en **herramientas de gestión de requisitos** para poder completar esta fase con el usuario. De tal manera que *cada requisito lleve asociado su código*, *tengamos clara la versión del software en la que se encuentra un requisito*, *estén definidas las historias de usuario de los requisitos*,...

Es primordial esta catalogación de requisitos mediante un herramienta para el flujo [devops][QueEsDevOps], ya que las posteriores fases se basarán en dicha organización para poder completar sus tareas, véase el *definir los test asociados a un requisito*, *pruebas funcionales de un requisito*, *notificación al usuario de la versión/requisitos puestos en producción*,...

## Desarrollo basado en Microservicios
Los modelos tradicionales de software nos han llevado en muchas ocasiones a desarrollorar aplicaciones monolíticas o sistemas complejos con múltiples integraciones de servicios. Como resultado tenemos sistemas complejos de gestionar, mantener y evolucionar, pero sobre todo tenemos sistemas complejos de desplegar. Los procedimientos de despliegue de estos sistemas suelen tener tal nivel de dependencias que hace extremadamente complicado su manipulación y puesta en producción.

El adoptar un modelo de [microservicios][microservicios] en nuestros procesos de desarrollo de software nos dara muchos beneficios entre los cuales encontramos la simplificación de la gestión y evolución del software. Pero además si desarrollamos los [microservicios][microservicios] de forma que mantengan su independencia, es decir, que **delimiten de forma correcta la funcionalidad de negocio sobre la que trabajan**, nos permitirá que podamos estar desplegando estas partes del software de manera continua, es decir, que realicemos un flujo [DevOps][QueEsDevOps] completo desde la definición hasta un modelo de **despliegue continuo (CD)**.

Así, los [microservicios][microservicios] se convierten en un pilar de los [modelos DevOps][QueEsDevops] desde el momento que nos permiten desarrollar pequeñas parte de código con una funcionalidad de negocio completa, a la cual añadamos todos los test necesarios, pruebas de regresión,... de tal manera que podamos disponer de un software compilado, el cual desplegar de forma continua a producción.

## Capacidades Testing
Los modelos de testing y calidad suelen estar ya implantados en las empresas. Si bien las capacidades de testing son un limitante dentro de un modelo de desarrollo basado en [devops][QueEsDevOps]. Y es que **la no existencia de unos *test unitarios*, *funcionales* o *pruebas de regresión* hará que ciertas fases del modelo de [devops][QueEsDevOps], directamente no funcionen**.

Y es que cada requisito identificado dentro de un desarrollo de [devops][QueEsDevOps] debe de llevar asociadas las *pruebas de test unitario*, cada funcionalidad debe llevar asociadas las *pruebas funcionales* y el sistema al completo deberá de tener definido sus *test de regresión*.

En un modeo [devops][QueEsDevOps], cada vez que un usuario cierre una funcionalidad las *pruebas unitarias* será ejecutadas para poder comprobar que se sigue obteniendo los mismos resultados. Las pruebas de *test funcional* serán ejecutadas para que podamos disponer de un **entregable con capacidades para poder ser puesto en producción**. Y no se tendrá un modelo de **despliegue continuo (CD)** si no asociamos las suficientes *pruebas de regresión* como para que podamos comprobar de forma automática que el nuevo software a desplegar no rompe nada de lo que ya tenemos en el entorno productivo.

## Automatización de Procesos
Por desgracia muchos de los procesos de desarrollo y sobre todo de operación llevan asociadas intervenciones manuales por parte de los desarrolladores y operadores. Es por ello que **uno de los pilares del [devops][QueEsDevOps] es el de disponer de un sistema de automatización mediante el cual podamos automatizar las actividades asociadas al software**.

Los sistemas de automatización se suelen enfocar sobre todo en tareas de definición o construcción del entorno de infraestructura y en la ejecución del despliegue del software. De esta manera se puede *eliminar las actividades de trabajo repetitivo*, *reducir las posibilidades de error*, *permitir reproducir escenarios una y otra vez*,...

Estos **sistemas de automatización se apoyan en código para poder implementar las tareas de automatización**. Por lo que finalmente tendremos tanto el desarrollo de software como las tareas asociadas a su manipulación definidas en código. Todo ello podrá gestionarse desde un mismo repositorio.

Todo esto hace que, posiblemente, el pilar de la **automatización** sea el más importante a la hora de implantar el [modelo devops][QueEsDevOps].

## Infraestructura como Código
Si el proceso de [devops][QueEsDevOps] busca velocidad en la puesta en producción de las aplicaciones, una de las cosas que no podemos tener es la dependencia sobre un aprovisionamiento manual de la infraestructura sobre la que se vaya a ejecutar.

Es por ello que dentro de los [modelos devops][QueEsDevOps] debemos de apoyarnos sobre técnicas de **infraestructura como código** en las cuales podamos definir desde *imágenes que reproduzcan el entorno productivo sobre el que se ejecutará la aplicación* hasta *los elementos de nuestra infraestructura: redes, balanceadores, firewalls,.. mediante código para que estos sean desplegados de forma automática*.

El adoptar la **infraestructura como código** nos permitirá el poder generar nuestros entornos de forma automática una y otra vez. Por ejemplo podremos crear entornos de test para probar una aplicación de forma dinámica y eliminarlos una vez que ya no sea necesaria dicha infraestructura. Esto nos dará una gran flexibilidad para las pruebas continuas.

Además el hecho de definir la **infraestructura como código** generará una sinergia entre los desarrolladores y operadores ya que el lenguaje entre el que se intercambie los activos siempre será código fuente y por lo tanto cualquiera podría entender lo que conforma una aplicación.

## Cloud Computing
Los modelos de **infraestructura como código** solo funcionarán si disponemos debajo de un modelo de infraestructura que soporte dicha definición como código.

Es por ello que el [cloud computing][cloud] se convierte en otro de los **pilares fundamentales del [devops][QueEsDevOps]**. El poder disponer de una **infraestructura elástica en la que vayamos incorporando de forma flexible nuevos activos hardware de forma sencilla**.

Los modelos de [cloud computing][cloud] nos ayudará a poder *crear entornos de forma dinámica de tal manera que los construyamos, utilicemos y eliminemos*, *aprovisionar de forma elástica elementos que atiendan a las demandas de capacidad de nuestras aplicaciones*, *facilitar las puestas en produción generando de forma automática nuevas instancias sin impacto sobre el usuario final*,..

Como **pilar del [devops][QueEsDevOps]** el [cloud computing][cloud] nos ayuda principalmente como modelo **IaaS**, si bien, también tenemos que ver que el disponer de infraestructuras **PaaS** o **SaaS** nos van a reducir los tiempos de construcción del software.

Los modelos **PaaS** nos permitirán el tener nuevos productos de infraestructura *"production ready"* en muy poco tiempo y el apoyarnos en modelos **SaaS** hará que tengamos funcionalidades de negocio directamente construidas, ahorrándonos en este caso todo el tiempo de construir dicha funcionalidad.

## Medición Continua
Uno de los puntos más importantes a la hora de implantar el [devops][QueEsDevOps] es medir la efectividad del proceso de despliegue. Es decir, deberíamos de **medir** cuánto nos cuesta desplegar una funcionalidad nueva de negocio desde que recibimos los primeros requisitos por parte del negocio hasta que ponemos en producción el software que los implementa.

Pero no solo se deben de medir los tiempos de ejecución, si no que se debe de medir los activos que se van generando en el camino: *cuantos test se han pasado en cada una de las iteraciones del software*, *cuál es la deuda técnica que va acumulando el desarrollo*, *cuantas releases fallan en el momento de despliegue*, *cuantos bugs son detectados una vez una aplicación está disponible en un entorno productivo*,...

El [modelo devops][QueEsDevOps] debe de reducir los tiempos parciales de cada una de las actividades del desarrollo del software, y por lo tanto el tiempo total que tardamos en desplegar el software.

> El disponer de métodos de medición de las fases del [devops][QueEsDevOps] nos permitirá saber si la implantación de dicho modelo nos está generando beneficios y ver cómo se mejora en cada una de las partes.

Para ello necesitamos **medir**, medir los tiempos de cada una de las fases, desde la recepción de los requisitos, hasta llegar a los tiempos de medición del despliegue del software. Por lo tanto deberemos de disponer de herramientas las cuales nos permitan medir cada una de estas fases.


## Monitorización de Sistemas
La **monitorización** es un concepto muy ligado a la **medición**, ya que los sistemas de **monitorización** nos deben de dar información suficiente como para poder **medir**. Si bien hablamos de la **monitorización como pilar del [devops][QueEsDevOps]** pensando en los sistemas productivos. Y es que tenemos que saber cómo se están comportando los sistemas que desplegamos para tomar las acciones pertinentes.

> Para disponer de un buen modelo [devops][QueEsDevOps] deberemos de tener implantadas herraientas que nos permitan una monitorización y gestión de trazas de los sistemas.

Con la **monitorización** podemos tomar acciones *reactivas* o *proactivas* sobre nuestros sistemas en aras de su buen funcionamiento. En el mundo [devops][QueEsDevOps] podemos asociar las **acciones necesarias por código de cara a aprovisionar nueva infraestructura ante una alerta de monitorización**, pero también, las alarmas o traspaso de umbrales de la monitorización puede dar como resultado la generación de nuevas necesidades de modificación de nuestros sistemas. Lo que al final se convertirá en nuevos requisitos dentro del flujo [devops][QueEsDevOps].

## Herramientas de Comunicación y Colaboración
El **mundo [devops][QueEsDevOps] se sustenta en la colaboración de los equipos de desarrollo y de los equipos de operación**. Y es que aunque disponibilicemos técnicas que hagan que hablen un mismo idioma, como la definición de cualquier artefacto mediante código, será necesario utilizar herramientas de comunicación y colaboración.

Así tendremos que tener herramientas que sirvan simplemente para establecer un canal mediante el cual hablar o poder mantener conversaciones. Pero no solo deberemos de limitarlo a esto, si no que **deberemos de integrar en el canal de conversación el resto de herramientas del ciclo [devops][QueEsDevOps]**. Así se podría gestionar desde este canal *las puestas en producción*, *la gestión de incidencias*, *las operaciones de monitorización*,... de tal manera que la actividad [devops][QueEsDevOps] tome como epicentro del trabajo las herramientas de comunicación y colaboración.

---

Estás de acuerdo en que estos serían los pilares [devops][QueEsDevOps] y que son fundamentales para la implantación del modelo [devops][QueEsDevOps]. ¿Alguno te sobra? o ¿Echarías alguno en falta? Te animamos a que nos lo indiques en los comentarios.

[QueEsDevOps]: {{site.url}}/devops/que-es-devops/
[BeneficiosDevOps]: {{site.url}}/devops/7-beneficios-devops/
[Microservicios]: {{site.url}}/microservicios/
[cloud]: {{site.url}}/cloud/
