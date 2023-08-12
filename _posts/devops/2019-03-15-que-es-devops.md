---
layout: post
title: ¿Qué es DevOps?
excerpt: "DevOps es una metodología de desarrollo de software la cual acerca el desarrollo de aplicaciones a la operación de estas y viceversa, propiciando un entorno de colaboración."
categories: devops
tags: [desarrollo,operacion,metodología,despliegue continuo,entrega continua,integración continua]
image:
  path: /images/covers/devops.png
  thumbnail: /images/covers/devops.png
comments: true
share: true
author: victor_cuervo
---

Durante muchos años el mundo tecnología ha vivido en una **separación total entre el mundo del desarrollo y el mundo de la operación**. Es decir, entre aquellos que diseñaban y desarrollaban las aplicaciones y aquellos que desplegaban las aplicaciones en una infraestructura y las operaban. Quizás pueda parecer algo muy lejano, o quizás no.

Los equipos de desarrollo y operación viven de forma separada, con objetivos totalmente distintos el uno del otro. Por un lado **los desarrolladores buscan el construir la aplicación lo antes posible** y ponerla en producción esté como esté y le pese a quien le pese. Y en algunos casos, me atrevería a afirmar que, funcione o no. Pero cumpliendo fechas.

Por el otro tenemos a **operaciones en la búsqueda de la estabilidad y la optimización de los sistemas de producción**. Sistemas que cuanto menos se modifiquen, cuanto menos cambien, mejor que mejor. Más estables serán nuestros sistemas.

Estos **objetivos tan contrapuestos** suelen presentar como síntoma modelos de baja colaboración entre los equipos, que suelen desencadenar en **jornadas de despliegues a producción verdaderamente maratonianas**. Generando, como resultado, proyectos de larga duración, incumplimiento de fechas, poca capacidad de atender a cambios o incidencias de la aplicación,... creando una total insatisfacción en el usuario final.

Este modelo de trabajo tan problemático hizo que sobre el 2008 naciesen las primeras conversaciones alrededor de cómo mejorar el entorno y actividad entre los desarrolladores (*Development*) y la explotación (*Operation*), dando lugar a lo que hoy se conoce como **DevOps**.

## Historia del DevOps

El concepto **DevOps** surge por la frustración del consultor IT [Patrick Debois][Patrick] tras un proyecto de migración de un centro de datos para el *Gobierno de Bélgica*. Dicho proyecto sufría de fallos de comunicación y cooperación entre los desarrolladores y operadores.

En 2008, en el ámbito de la *Agile Conference de Toronto*, [Patrick Debois][Patrick] tiene una conversación con [Andrew Shafer][Andrew] (Puppet Labs) sobre cómo llevar las *metodologías Agile* al ámbito de las infraestructuras y administradores de sistemas.

Todo aquello desemboca en la creación de los **DevOpsDays** en Bélgica 2009, evento que intentaba unir el mundo del desarrollo con el mundo de las operaciones.

A partir de ese momento el concepto de **DevOps** empieza a calar en toda la comunidad de desarrollo de software.

## ¿Qué es DevOps?

Podríamos decir que el **DevOps** es una **metodología de desarrollo de software** la cual acerca el desarrollo de aplicaciones a la operación de estas y viceversa. Propiciando un **entorno de colaboración** entre ambos equipos que incremente la eficiencia de los mismos.

Un modelo **DevOps** ayuda a la organización a **definir, construir y desplegar activos de software de una manera más ágil, a un menor coste y con mayor calidad**.

La idea del modelo **DevOps** es buscar la capacidad de **hacer entregas del software de manera más continua**. A mayor capacidad de despliegue más funcionalidades podremos poner en producción, y las podremos desplegar en un menor tiempo. Facilitando la adopción de modelos incrementales de funcionalidades y, por ende, **acortando los plazos de entrega al usuario final**.

Esto es recogido en los **modelos DevOps** mediante los conceptos **(CI/CD)**:

* **Integración Continua (CI)**, modelo en el cual se automatiza el proceso de definición de los requisitos de negocio, desarrollo de la aplicación, compilación de los artefactos y ejecución del test.

* **Entrega Continua (CD)**, extiende el concepto de **integración continua** con la búsqueda de tener siempre un artefacto de software compilado y probado con capacidad de ser desplegado en los entornos de producción.

* **Despliegue Continuo (CD)**, si tenemos artefactos compilados, probados y listos para ser desplegados en producción, habilita mecanismos por los cuales poder estar continuamente desplegando aplicaciones.

Pero no solo tenemos que pensar en el momento de construcción y despliegue de la aplicación. Mediante modelos **DevOps** podremos **acortar los tiempos de mantenimiento y corrección de errores de las aplicaciones**. Obteniendo una **mayor calidad de los activos desplegados en producción**.

## Aplicabilidad y Cultura DevOps

La metodología **DevOps** puede ser aplicada en cualquier entorno IT. Si bien son modelos especialmente útiles para escenarios de **transformación digital** o en la aplicación de modelos de **startup** en los que se busca el tener un nuevo producto de una forma ágil ajustando los costes.

Si se aplican en organizaciones con modelos de estructura tradicional deberemos de tener en cuenta que con todo lo descrito podemos ver que **DevOps** no es solo una **metodología** si no que también es una **cultura**, *Cultura DevOps*. Y esa *Cultura DevOps* debe de calar en las diferentes estructuras organizativas para un correcto funcionamiento de la misma.

Es por ello que La implantación de los modelos **DevOps** suele llevar implícita cambios organizativos, cambios en la forma de realizar las cosas, en los modelos de desarrollo, en los proceso de gestión, en los modelos de colaboración,...  **cambiando por completo la forma de desarrollar y gestionar software de los departamentos de tecnología**.


[Patrick]: https://twitter.com/patrickdebois
[Andrew]: https://twitter.com/littleidea
