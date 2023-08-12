---
layout: post
title: ¿Qué es OPcache?
excerpt: "Si queremos instalar Drupal en otros idiomas que no sea el inglés deberemos de realizar algunas modificaciones sobre el sistema de ficheros. Veamos cuales son."
categories: php
tags: [opcache, modulos php]
image:
  path: /images/covers/almacen.jpg
  thumbnail: /images/covers/almacen.jpg
  caption: Fotografía de [Nana Smirnova](https://unsplash.com/@nananadolgo)
comments: true
share: true
author: victor_cuervo
---

## ¿Qué es OPcache?
OPcache es una **extensión de [PHP][PHP]** que nos permite mejorar el rendimiento de la ejecución del código [PHP][PHP].
Para ello OPcache **almacena los scripts PHP precompilados en memoria** para que puedan ejecutarse lo más rápido posible, evitando que se tengan que cargar y analizar cada vez que se piden.

OPcache está disponible de la versión PHP 5.5.0 en adelante.

## Instalar OPcache
Lo más normal es que tu configuración de [PHP][PHP] ya traiga configurado el módulo de OPcache, en el caso de que no sea así deberás de añadir en el fichero **php.ini** la extensión

Para servidores en Linux y Mac:

~~~
zend_extension=/libreria/opcache.so
~~~

Para servidores en Windows:

~~~
zend_extension=C:\libreria\php_opcache.dll
~~~

Siendo la ruta `librería` el directorio dónde tengamos el módulo.

## Configurar OPCache
Para configurar OPcache tenemos múltiples propiedades. Entre ellas encontramos algunas como:

* **opcache.enable**, habilita la caché de opcode. El valor que espera es un booleano, siendo 1 para activarlo.
* **opcache.enable_cli**, habilita la caché de opcode para la versión CLI de [PHP][PHP]. El valor que espera es un booleano, siendo 1 para activarlo.
* **opcache.memory_consumption**, es el tamaño en megabytes de la caché.
* **opcache.interned_strings_buffer**, es la cantidad, en megabytes, para almacenar cadenas.
* **opcache.max_accelerated_files**, el número máximo de ficheros [PHP][PHP] que se almacenarán en la caché. Curisoamente se utilizará el primer número primo superior al número que le indiquemos, siendo 200 lo mínimo que podemos configurar.
* **opcache.revalidate_freq**, marca la frecuencia en la que revalidaremos los scripts para actualizarlos. Se indica en segundos.
* **opcache.fast_shutdown**, es un valor booleano que activado permite una liberación rápida de la memoria en la secuencia de apagado.

Para estas propiedades la configuración recomendada por [PHP][PHP] de introducir en el fichero **php.ini** es la siguiente:

~~~
opcache.memory_consumption=128
opcache.interned_strings_buffer=8
opcache.max_accelerated_files=4000
opcache.revalidate_freq=60
opcache.fast_shutdown=1
opcache.enable_cli=1
~~~

> Puedes encontrar mucha más información sobre lo que es OPCache [en la documentación general de PHP][OPcachePHP]. 

## OPcache y Drupal
El [proceso de instalación de Drupal][InstalarDrupal] va a chequear que está activado el módulo OpCache [para poder realizar la instalación][InstalarDrupal]. Ya que necesita el tener activado esta mejora de rendimiento para su ejecución.

En el caso de que no lo tengamos activado en nuestro fichero **php.ini** nos mostrará un error del estilo

<samp>
Opcache warning (PHP OPcode caching not enabled)
PHP OPcode caching can improve your site's performance considerably. It is highly recommended to have OPcache installed on your server.
</samp>

Así que es bueno que configures Opcache en su instalación de [PHP][PHP] antes realizar la instalación de [Drupal][Drupal].

[Drupal]: {% link _posts/drupal/2020-10-20-que-es-drupal.md %}
[InstalarDrupal]: {{ site.url }}/drupal/instalar-drupal/
[OPcachePHP]: https://www.php.net/manual/es/book.opcache.php
[PHP]: http://www.manualweb.net/php
