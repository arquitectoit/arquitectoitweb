---
layout: post
title: Max-execution-time
excerpt: "La variable de configuración max-execution-time le permite al servidor web Apache limitar el tiempo que un programa PHP puede tomarse para su ejecución."
categories: apache
tags: [php,php.ini,servidor web]
image:
  feature: covers/spdy.png
comments: true
share: true
author: victor_cuervo
---

## ¿Qué es el Fatal Error: Maximum Execution Time Exceeded?

Cuando trabajamos con [CMS][CMS] que funcionan bajo [PHP][PHP] y el [servidor Apache][Apache] como puede ser [WordPress][WordPress] o [Drupal][Drupal] nos podemos encontrar con un error que nos viene a decir algo así como **"Fatal Error: Maximum Execution Time Exceeded"**. Error que nos puede llevar por la calle de la amargura cuando intentemos solucionarlo.

¿Qué está sucediendo en estos casos? Básicamente es que el [servidor Apache][Apache] está cortando la ejecución de un código [PHP][PHP] que se está excediendo en el tiempo de ejecución y que por lo tanto puede afectar al rendimiento general del [servidor Apache][Apache]. Es decir, se ejecuta como medida de control sobre la ejecución del código y evitar que se produzcan conexiones a la base de datos de larga duración o casos de bucles infinitos que harían que el programa [PHP][PHP] no acabase nunca.

Es por ello que el [servidor Apache][Apache] viene con una configuración en la que a los 30 o 60 segundos procede a cortar la ejecución y genera el famoso **"Fatal Error: Maximum Execution Time Exceeded"**.

Cuando trabajemos con [CMS][CMS] del tipo [WordPress][WordPress] o [Drupal][Drupal] veremos que este error puede producirse en los procesos de instalación o en ciertas ocasiones cuando se conecta a la base de datos en búsqueda de contenido.

## Configurar max-execution-time
Si queremos cambiar este comportamiento deberemos de acudir a la configuración del servidor y en concreto a modificar el valor de la variable `max-execution-time`. Para poder modificar la variable `max-execution-time` tenemos dos alternativas.

La primera es aplicándolo a todo el servidor. Para ello deberemos de buscar la variable en el fichero de configuración del [servidor Apache][Apache], es decir el fichero **php.ini**. En este caso lo que haremos será modificar el valor y asignarle el valor que queramos de **tiempo máximo de ejecución en segundos**.

~~~
max_execution_time = 300
~~~

En este caso le indicamos que el tiempo máximo es de 300 segundos, es decir, de 5 minutos.

Si no pudiésemos acceder a la configuración del servidor apache. Algo que sucede en algunos servicios de hosting, podemos realizar la configuración de `max-execution-time` en el [fichero **.htaccess**][htaccess]. En este caos esta configuración solo aplicará a nuestra aplicación web.

Para ello añadiremos la siguiente sentencia en el [fichero **.htaccess**][htaccess]

~~~
php_value max_execution_time 300
~~~

Nuevamente el valor va en segundo, por lo que serían 5 minutos de límite.

## Ejecuciones infinitas
Hay una opción de indicarle al [servidor Apache][Apache] de que no corte la ejecución del código [PHP][PHP] independientemente de el tiempo que esta tome. En este caso es dándole el valor de 0 a la variale `max_execution_time`.

~~~
max_execution_time = 0
~~~

> Lógicamente esta práctica no es recomendada para entornos productivos ya que podríamos dejar colapsado al [servidor Apache][Apache] teniendo que reiniciarlo para poder recuperar su ejecución.

[CMS]: {{ site.url }}/cms/
[PHP]: http://www.manualweb.net/php/
[Apache]: {{ site.url }}/apache/
[WordPress]: {{ site.url }}/wordpress/
[Drupal]: {{ site.url }}/drupal/
[htaccess]: {{ site.url }}/apache/que-es-htaccess/