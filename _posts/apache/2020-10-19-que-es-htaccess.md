---
layout: post
title: ¿Qué es .htaccess?
excerpt: "Conocer qué es .htaccess y como funciona este fichero del servidor Apache es fundamental para poder optimizar la configuración de nuestros sitios web."
categories: apache
tags: [servidor web,htaccess,bloqueo ip,redirección]
image:
image:
  feature: covers/pluma.jpg
  credit: Alexander Sinn
  creditlink: https://unsplash.com/@swimstaralex
comments: true
share: true
author: victor_cuervo
---

Si estás empezando a manejarte con el servidor Apache una de las cosas que vas a descubrir es que **hay un fichero que se llama .htaccess** que tiene una especial relevancia en la gestión de los sitios web que montemos con el servidor Apache.

Y es que **el fichero .htaccess nos sirve para configurar el comportamiento de un sitio web que hayamos creado dentro de nuestro servidor Apache**. Si el sitio web contiene algún software tipo [CMS][CMS], gestión de foros, e-commerce,... lo más probable es que modifiquen el fichero .htaccess para gestionar el comportamiento de tu sitio web. Así que tendrás que tener especial cuidado con la gestión del mismo y copiarlo cuando estés manejando tu sitio web.

## ¿Dónde se encuentra el fichero .htaccess?
Lo primero será saber **dónde se puede encontrar el fichero .htaccess**. El fichero .htaccess se encuentra normalmente en la raíz del sitio web que estés montando.

> Hay que tener especial cuidado ya que **el fichero .htaccess es un fichero que está oculto** y si hacer un simple copiar y pegar de los ficheros de tu sistema te lo puedes dejar y conseguir que el servidor web destino no funcione. Es por ello que cuando realices copias de sitios web tengas activo la visualización de este tipo de ficheros.

Si bien cada directorio que montemos puede tener su propio .htaccess. En este caso se utilizará el que esté en el directorio más los subdirectorios que lo contengan. Cierto es que solo se suele poner un fichero .htaccess en la raíz y configurar todo nuestro sitio web.

Podemos **manipular el contenido del fichero .htaccess con cualquier editor de textos**.

## ¿Qué podemos hacer con el fichero .htaccess?
Y qué puede hacer el fichero .htaccess. Pues entre muchas otras cosas este fichero sirve para lo siguiente:

Por ejemplo podemos utilizar el fichero .htaccess para:

* **Redirigir las peticiones a una página u a otra**. Podemos coger una petición sobre el servidor web y redirigirla a un sitio u a otro. Los [CMS][CMS] suelen coger todas las peticiones y las reenvian a un único punto que es el que las maneja.

* **Página de Inicio**. Podemos indicar cual es la página por defecto que se cargará al llamar a nuestro sitio web. Si queremos que sea index.html o index.php o ....

* **Páginas de error personalizadas**. Podemos indicar cual queremos que sea la página o páginas que se muestren para cada uno de los códigos http de las peticiones que se generen en el servidor. Entre ello podemos decidir si no se encuentra el recurso asociado y se quiere mostrar un error 400.

* **Bloquear directorios**. Se puede bloquear el acceso a determinados directorios del servidor en los que tengamos información que no queramos exponer hacia el exterior.

* **Bloquear IPs**. Por ejemplo si queremos que un conjunto de IPs no accedan a nuestro sitio web. Muy útil si queremos bloquear conexiones que vengan de sitios exóticos o potencialmente sospechoso de técnicas de hacking. 

* **Activar caché**. Podemos activar la caché para ciertos recursos, por ejemplo con las imágenes, que sepamos que no van a cambiar en el tiempo y de esta manera mejorar el rendimiento ya que se evitan llamadas innecesarias para pedir estos recursos.

* **Comprimir ficheros**. Ciertos ficheros pueden ser comprimidos, si son susceptibles de ello, antes de ser enviados.

[CMS]: {{site.url}}/cms