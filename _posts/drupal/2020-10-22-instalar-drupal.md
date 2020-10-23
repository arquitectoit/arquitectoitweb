---
layout: post
title: Instalar Drupal
excerpt: "Descripción de los pasos que hay que seguir para poder realizar para poder instalar Drupal (idioma, configuración de base de datos, creación de usuarios,...)"
categories: drupal
tags: [drupal,apache,bases de datos,xampp]
image:
  feature: covers/gota.jpg
  credit: Mayank Dhanawade
  creditlink: https://unsplash.com/@mayank_dhanawade
comments: true
share: true
author: victor_cuervo
---

Vamos a revisar qué es lo que tenemos que hacer y que pasos hay que seguir para poder desplegar un [CMS][CMS] Drupal.

Lo primero que tenemos que hacer para instalar [Drupal][Drupal] es descargarnos la versión que queramos instalar. Para ello lo podemos hacer desde [el área de descargas de Drupal][DescargarDrupal] dónde encontraremos la última versión de [Drupal][Drupal] (A día de hoy Drupal 9.0.7) o bien podemos ir a la [página de descargas de todas las versiones de Drupal][DescargarDrupalOtrasVersiones] dónde podemos encontra las versiones de Drupal 8 (a día de hoy Drupal 8.9.7) y Drupal 7 (a día de hoy Drupal 7.73), así cómo los múltiples fixes y minor version que tiene el producto.

Una vez hayamos decargado el fichero podremos descomprimirlo y veremos todos los ficheros que contiene Drupal.

Cuando tengamos descomprimido el fichero deberemos de chequear el fichero `/core/install.txt` que nos dará información relativa al proceso de instalación de Drupal, así como los requisitos mínimos que necesitaremos.

## Requerimientos Instalar Drupal 8
Seguiremos la secuencia para instalar un Drupal 8.9.7. En el fichero `/core/install.txt` podremos encontrar los requerimientos para instalar Drupal, entre ellos encontramos

* Mínimo PHP 7.0.8. Recomendable 7.2.17 por temas de seguridad
* WebServer que soporte PHP. Recomendados:
  * Apache 2.0 o superior
  * Nginx 1.1 o superior.
* Una base de datos. En este sentido recomienda:
  * MySQL 5.5.3 o superior
  * MariaDB 5.5.20 o superior
  * Percona Server 5.5.8 o superior
  * PostgreSQL 9.1.2 o superior
  * SQLite 3.7.11 o superior

## 1: Copiar los ficheros
Si trabajamos con un [servidor Apache][Apache] lo que habrá que hacer es localizar **la carpeta htdocs** que es dónde procederemos a instalar [Drupal][Drupal] y copiar sobre ella los ficheros. Esta carpeta estará en un sitio u otro dependiendo de la instalación.

Dependiendo de como hayamos instalado nuestro [servidor Apache][Apache] podremos localizar la carpeta en diferentes sitios:

* Para XAMPP en Widnows, la encontraremos en `c:/xampp/htdocs`.
* Para LAMPP en Linux, la encontramos en `/opt/lampp/etc/`
* Para Macs que vienen con un Apache la encontramos en `/Library/WebServer/Documents`
* ...

> Siempre podremos conocer la ubicación de htdocs y cambiarla en el fichero **httpd.conf** de [Apache][Apache].

## 2: Arrancar proceso de instalación
Para poder arrancar el proceso de instalación lo que tendremos que hacer es acceder a la carpeta de nuestro servidor web dónde tenemos los ficheros. Por ejemplo `http://localhost/drupal`. Solo accediendo a la raíz del directorio dónde instalamos los ficheros de [Drupal][Drupal] nos permitirá el arrancar la instalación.

## 3: Selección de Idioma
Lo primero será el elegir el [idioma en el cual queremos instalar Drupal][IdiomaDrupal]. El instalador nos ofrece múltiples opciones entre inglés, español, alemán,...

![Idioma en Drupal 8]({{ site.url }}/images/drupal/drupal8-idioma.jpg)

En el caso de que sea un idioma diferente al inglés, va a necesitar un fichero para guardar las traducciones, es por ello que deberemos de crear el directorio `/sites/default/translations`. 

Pero no solo nos valdrá con crear el directorio `/sites/default/translations` si no que además deberemos de darle los permisos 555 o 755 para que el proceso de instalación pueda generar contenido en ese directorio.

## 4: Perfil de Instalación

Una vez pasado el proceso de elección del idioma vamos a selección del **perfil de instalación**. Los perfiles que nos ofrece son los siguientes:

* **Estándar**, instala las características de uso más comunes preconfiguradas.
* **Mínimo**, construye un sitio personalizado sin funcionalidades preconfiguradas.
* **Demostración**, nos instala un sitio de ejemplo que nos muestra algunas de las características de [Drupal][Drupal].

![Perfiles de Drupal 8]({{ site.url }}/images/drupal/drupal8-perfil.jpg)

En nuestro caso vamos a elegir el perfil **estándar**. A partir de aquí Drupal verifica que las capacidades que necesitan están disponibles: *servidor web*, *versión de PHP*, *extensiones PHP activadas*, *si está activado el caché OPCODE*, *si puede generar números aleatorios*, *si hay capacidades de la base de datos*, *el límite de la memoria PHP*, *capacidades UNICODE*, *si puede escribir en el sistema de ficheros* y *si existe el fichero de configuración*.

Llegados a este punto puede darse que haya varios de los puntos que no tengamos configurados en nuestro sistema. Pero el primordial es que tengamos un fichero de configuración que es base para la instalación. Este fichero se puede encontrar en `/sites/default/settings.php`.

## 5: Configurar la base de datos
Lo siguiente será configurar la base de datos. Ya hemos visto más arriba las bases de datos que están soportadas. Para poder configurar la base de datos con [Drupal][Drupal] tienes que indicarle los siguientes datos:
* **Nombre de la base de datos**
* **Nombre del usuario de acceso a la base de datos**
* **Contraseña del usuario de acceso a la base de datos**
* **Servidor en el que se encuentra la base de datos.** Si está en el mismo servidor de que instalamos el servidor web se podrá utilizar localhost.
* **Puerto de conexión a la base de datos.** Cada base de datos suele tener un puerto por defecto, como el 3306 de MySQL, pero puede ser que tu lo tengas configurado en otro puerto, así que aquí podrás indicar cual es dicho puerto. Por ejemplo el 55000.
* **Prefijo de las tablas**. Aunque se puede dejar vacío es bueno que des algún prefijo a tu instalación para diferenciar las tablas de [Drupal][Drupal].

> Aunque Drupal te recomienda utilizar el prefijo `drupal_`, por motivos de seguridad es mejor que personalices tu prefijo. Sobre todo para no dar pistas de que tienes instalado un [Drupal][Drupal] en tu sitio web.

![Bases de Datos en Drupal 8]({{ site.url }}/images/drupal/drupal8-bbdd.jpg)

Una vez configurada la base de datos pasaremos a realizar la instalación de [Drupal][Drupal].

![Instalando Drupal 8]({{ site.url }}/images/drupal/drupal8-instalando.jpg)

Terminada la instalación es bueno que restauremos los permisos iniciales del fichero `/sites/default/settings.php` y solo dejarlos con permisos de lectura. Es decir, ejecutar la siguiente secuencia de comandos:

~~~
chmod 444 ./sites/default/settings.php
~~~

## 6: Configuración del Sitio
Cuando termine la instalación de los componentes básicos se procederá a realizar **la configuración del sitio**. Aquí podremos elegir cosas cómo el nombre que va a tener nuestra página web o el nombre del usuario que queremos que acceda al sitio.

Los datos que podemos rellenar son los siguientes:

* **Nombre del sitio**. Cómo se llamará nuestra página web.
* **Dirección de correo del sitio**. Para recibir notificaciones del sitio.
* **Usuario de acceso**. Aquí indicaremos el nombre del usuario con el que accederemos, así como su *email* y *contraseña*.
* **Opciones regionales**. Para poder configurar el país y zona horaria en el que se encuentra el sitio.

![Configuración del Sitio en Drupal 8]({{ site.url }}/images/drupal/drupal8-configurar-sitio.jpg)

> Una buena recomendación de seguridad es que el nombre del usuario con el que accedas al sitio no sea uno típico como admin, root o tu nombre. Utiliza un nombre de usuario que no sea identificativo.

Este será el último paso y ya estaremos en el Panel de Control de [Drupal][Drupal]. De esta manera habríamos terminado de instalar [Drupal][Drupal].

[Drupal]: {% link _posts/drupal/2020-10-20-que-es-drupal.md %}
[DescargarDrupal]: https://www.drupal.org/download
[DescargarDrupalOtrasVersiones]: https://www.drupal.org/project/drupal
[CMS]: {{ site.url }}/cms/
[Apache]:  {{ site.url }}/apache/
[IdiomaDrupal]: {{ site.url }}/drupal/instalar-drupal-en-otros-idiomas/
