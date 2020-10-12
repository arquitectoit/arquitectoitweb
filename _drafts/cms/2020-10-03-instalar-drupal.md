---
layout: post
title: Instalar Drupal
excerpt: "bla bla bla."
categories: cms
tags: [drupal]
image:
  feature: covers/write.jpg
  credit: Wim Mulder
  creditlink: https://www.flickr.com/photos/wimmulder/
comments: true
share: true
author: victor_cuervo
---

Lo primero es chequear el fichero `/core/install.txt` que nos dará información relativa al proceso de instalación de Drupal.

En este fichero podremos encontrar los requerimientos para instalar Drupal, entre ellos encontramos

# Requerimientos Instalar Drupal 8
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



## Selección de Idioma

Permisos de instalación en el directorio
https://www.drupal.org/project/drupal/issues/2333293

Indica que sea 555, pero me ha funcionado con 755

Lo primero será el elegir el idioma en el cual queremos instalar Drupal. En el caso de que sea un idioma diferente al inglés va a necesitar un fichero para guardar las traducciones, es por ello que deberemos de crear el directorio `/sites/default/translations`. 

Hay que tener cuidado ya que el instalador de Drupal se puede encontrar con problemas de que no exista el directorio o que no tengamos los permisos necesarios.

## Perfil de Instalación

Una vez pasado el proceso de elección del idioma vamos a selección del perfil de instalación. Los perfiles que nos ofrece son los siguientes:

* **Estándar**, instala las características de uso más comunes preconfiguradas.
* **Mínimo**, construye un sitio personalizado sin funcionalidades preconfiguradas.
* **Demostración**, nos instala un sitio de ejemplo que nos muestra algunas de las características de [Drupal][Drupal].

En nuestro caso vamos a elegir el perfil **estándar**. A partir de aquí Drupal verifica que las capacidades que necesitan están disponibles: *servidor web*, *versión de PHP*, *extensiones PHP activadas*, *si está activado el caché OPCODE*, *si puede generar números aleatorios*, *si hay capacidades de la base de datos*, *el límite de la memoria PHP*, *capacidades UNICODE*, *si puede escribir en el sistema de ficheros* y *si existe el fichero de configuración*.

Llegados a este punto puede darse que haya varios de los puntos que no tengamos configurados en nuestro sistema. Pero el primordial es que tengamos un fichero de configuración que es base para la instalación. Este fichero se puede encontrar en `/sites/default/settings.php`.

## Configurar la base de datos
Lo siguiente será configurar la base de datos. Ya hemos visto más arriba las bases de datos que están soportadas. Para poder configurar la base de datos con [Drupal][Drupal] tienes que indicarle los siguientes datos:
* **Nombre de la base de datos**
* **Nombre del usuario de acceso a la base de datos**
* **Contraseña del usuario de acceso a la base de datos**
* **Servidor en el que se encuentra la base de datos.** Si está en el mismo servidor de que instalamos el servidor web se podrá utilizar localhost.
* **Puerto de conexión a la base de datos.** Cada base de datos suele tener un puerto por defecto, como el 3306 de MySQL, pero puede ser que tu lo tengas configurado en otro puerto, así que aquí podrás indicar cual es dicho puerto.
* **Prefijo de las tablas**. Aunque se puede dejar vacío es bueno que des algún prefijo a tu instalación para diferenciar las tablas de [Drupal][Drupal].

> Aunque Drupal te recomienda utilizar el prefijo `drupal_`, por motivos de seguridad es mejor que personalices tu prefijo. Sobre todo para no dar pistas de que tienes instalado un [Drupal][Drupal] en tu sitio web.

Una vez configurada la base de datos pasaremos a realizar la instalación de [Drupal][Drupal].

Terminada la instalación es bueno que restauremos los permisos iniciales del fichero `/sites/default/settings.php` y solo dejarlos con permisos de lectura. Es decir, con un `chmod 444 ./sites/default/settings.php`


## Configuración del Sitio
Cuando termine la instalación de los componentes básicos se procederá a realizar la configuración del sitio. Aquí podremos elegir cosas cómo el nombre que va a tener nuestra página web o el nombre del usuario que queremos que acceda al sitio.

Los datos que podemos rellenar son los siguientes:

* **Nombre del sitio**. Cómo se llamará nuestra página web.
* **Dirección de correo del sitio**. Para recibir notificaciones del sitio.
* **Usuario de acceso**. Aquí indicaremos el nombre del usuario con el que accederemos, así como su *email* y *contraseña*.
* **Opciones regionales**. Para poder configurar el país y zona horaria en el que se encuentra el sitio.

> Una buena recomendación de seguridad es que el nombre del usuario con el que accedas al sitio no sea uno típico como admin, root o tu nombre. Utiliza un nombre de usuario que no sea identificativo.

Este será el último paso y ya estaremos en el Panel de Control de [Drupal][Drupal].



[Drupal]: {% post_url cms/2020-10-04-que-es-drupal %}