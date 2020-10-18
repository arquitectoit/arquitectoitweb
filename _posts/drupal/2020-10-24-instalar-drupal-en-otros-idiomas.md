---
layout: post
title: Instalar Drupal en otros idiomas
excerpt: "Si queremos instalar Drupal en otros idiomas que no sea el inglés deberemos de realizar algunas modificaciones sobre el sistema de ficheros. Veamos cuales son."
categories: drupal
tags: [drupal, idiomas, chmod]
image:
  feature: covers/gota.jpg
  credit: Mayank Dhanawade
  creditlink: https://unsplash.com/@mayank_dhanawade
comments: true
share: true
author: victor_cuervo
---

El proceso de instalación de [Drupal][Drupal] os ofrece la capacidad de instalar [Drupal][Drupal] en otros idiomas. Un proceso que puede parecer sencillo se puede convertir en un quebradero de cabeza. Ya que si queremos realizar instalaciones que no sean en inglés nos llevará a realizar una serie de pasos adicionales.

Lo primero que hacemos en el proceso de instalación es seleccionar el idioma en el cual queremos instalar Drupal. Aquí podremos elegir entre una serie de idiomas para iniciar el proceso: inglés, español, alemán,...

![Idioma en Drupal 8]({{ site.url }}/images/drupal/drupal8-idioma.jpg)

Si por ejemplo realizamos la instalación en español veremos que el proceso de instalación nos va a decir algo así como:

<samp>
"The translations directory does not exist.
The installer requires that you create a translations directory as part of the installation process. Create the directory sites/default/files/translations . More details about installing Drupal are available in INSTALL.txt."
</samp>

Así que deberemos de acudir a dónde estamos instalando [Drupal][Drupal] para poder crear el directorio `/sites/default/translations`. Pero no solo deberemos de crear el directorio, si no que deberemos de asignarle los permisos 555 a dicho directorio. Es decir, estamos dejando leer y ejecutar sobre dicho directorio a todos los usuarios.

Lo que sería ejecutar la siguiente secuencia de comandos en la consola.

~~~
mkdir ./sites/default/files/translations
chmod 555 ./sites/default/files/translations
~~~

Hay que decir que aunque el proceso de instalación habla de permisos 555, en mi caso he tenido que darle permisos 755, es decir, el propietario del directorio puede también escribir en él, para poder realizar el proceso de instalación.

De esta manera ya saber que te tocará modificar manualmente algunos directorios a la hora de instalar [Drupal][Drupal].

[Drupal]: {% link _drafts/cms/2020-10-04-que-es-drupal.md %}
[CMS]: {{ site.url }}/cms/
