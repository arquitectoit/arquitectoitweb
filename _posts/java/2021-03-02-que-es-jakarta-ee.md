---
layout: post
title: ¿Qué es Jakarta EE?
excerpt: "Para saber qué es Jakarta EE tenemos que conocer un poco la historia de Java y de cómo Oracle a liberado a la comunidad opensource los desarrollos de Java EE."
categories: java
tags: [java ee,jakarta ee,java se,java me]
image:
  feature: covers/velero.png
  credit: Vidar Nordli-Mathisen
  creditlink: https://unsplash.com/@vidarnm
comments: true
share: true
author: victor_cuervo
---

En el artículo de hoy vamos a ver qué es Jakarta EE y qué relación tiene con las especificaciones del lenguaje [Java][Java] como **Java SE** o **Java EE**.

## Un poco de historia de Java SE, Java EE y Java ME

Pero lo primero es echar la vista un poco atrás y revisar las diferentes tecnologías [Java][Java] que han ido apareciendo a lo largo del tiempo vemos que la base se fundamenta en la especificación **Java SE** que es la edición estándar del lenguaje y que fue publicada en 1995.

Después aparecerían otras especificaciones como **Java EE** (o como se conocíoa entonces **J2EE**) en 2001 dónde se recogen tecnologías como los EJB, WebServices, JavaServer Pages, JavaServer Faces, JSON,... La especificación **Java EE** está definida para que poder realizar aplicaciones más complejas y dentro del ámbito empresarial.

Y más tarde tenemos, en 2006, el desarrollo de **Java ME** para dispositivos de menor capacidad como móviles, electrodomésticos,...

Todo este crecimiento de las **tecnologías Java** nace y crece bajo el amparo de **SUN Microsystems** quién guía su desarrollo hasta el año 2010 dónde es comprada por **Oracle**. Esto hace que todos los derechos de la marca [Java][Java] pasen a ser propiedad de **Oracle**.


## ¿Qué es Jakarta EE?

En 2017 **Oracle** decide que deja de controlar el desarrollo de **Java EE** y decide pasarlo a la comundidad para que sea guiado en un proceso más abierto y flexible por la [Eclipse Foundation][EclipseFoundation]. Manteniendo el modelo de **JCP** que se seguía en su desarrollo.

Si bien en este proceso de traspaso se decide no pasar la marca **Java EE** y la comunidad tiene que renombrar el proyecto a **Jakarta EE**. En este proceso de renombrado, otros elementos como el servidor **Glassfish** también se han visto afectados y ahora se llama **Eclipse Glassfish**.

El nombre **Jakarta EE** [es elegido por la comunidad Eclipse en una votación entre **Jakarta EE** y **Enterprise Profile**](https://eclipse-foundation.blog/2018/02/26/and-the-name-is/).

Así que **Jakarta EE** pasa a ser la nueva plataforma opensource de **Java EE** gestionada por [Eclipse Foundation][EclipseFoundation].

Además los paquetes deJakarta EE , que en **Jakarta EE 8.0** se mantuvieron iguales, han pasado a ser `jakarta.*` en **Jakarta EE 9.0**. Desapareciendo los `javax.*` De esta forma tenemos, entre muchos otros:

* jakarta.activation	
* jakarta.annotation
* jakarta.batch
* jakarta.decorator	
* jakarta.ejb
* jakarta.faces
* jakarta.json
* jakarta.mail
* jakarta.security
* ...

## Versión de Jakarta EE
La versión actual de Jakarta es **Jakarta EE 9.0** que fue publicada en noviembre 2020. En esta versión el cambio principal ha sido el renombrado del namespace por el de `jakarta.*`.

Contamos con el servidor **Glassfish 6** para tener un soporte de **Jakarta EE 9.0**. Otros como **Payara 5** , **Tomcat 10**, **Jetty 11** y **Wildfly 22** dan soporte a **Jakarta EE 8.0**.


## Futuro de Jakarta EE
Parece que de momento **Jakarta EE** y **Java EE** van a seguir vidas paralelas. Tendiendo **Jakarta EE** un proceso más flexible y gestionado por la comunidad. Parece que el único que queda es **Jakarta EE** dirigido por la comunidad. Pero veremos que nos depara el futuro de **Jakarta EE**. 


[EclipseFoundation]: https://www.eclipse.org/org/
[Java]: http://wwww.manualweb.net/java