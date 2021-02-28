---
layout: post
title: Configurar Páginas de Error en htaccess
excerpt: "Cxxx"
categories: apache
tags: [servidor web,htaccess,error]
image:
image:
  feature: covers/pluma.jpg
  credit: Alexander Sinn
  creditlink: https://unsplash.com/@swimstaralex
comments: true
share: true
author: victor_cuervo
---

Ya hemos visto [qué es el fichero .htaccess y qué podemos hacer con él][ficherohtaccess]. En este caso vamos a entrar en detalle de cómo podemos configurar páginas de error en htaccess.


* **400 - Bad Request**, la petición recibida está mal formada o bien no tenemos privilegios para verla o es una página que ya no existe.
* **401 - Unauthorized**, ha existido un error en la autenticación sobre la URL que se está intentado cargar.
* **403 - Forbidden**, error que se genera cuando el usuario no tiene permisos de acceso al recurso que se intenta acceder y que se encuentra protegido.
* **404 - Not Found**, este error salta cuando la URL que se está buscando en el servidor no se encuentra.
* **500 - Internal Server Error**, se produce cuando hay un error en la ejecución de la petición del recurso. El origen del error está en la aplicación y pueden ser múltiples las causas de su aparición.

ErrorDocument 404 /404.html


ErrorDocument 404 http://www.otroservidort.com/404.html
ErrorDocument 404 "<h1>Página no encontrada</h1>"


Se puede configurar en el servidor, en el código



[ficherohtaccess]: {{site.url}}/apache/que-es-htaccess/