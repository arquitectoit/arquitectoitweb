---
layout: post
title: Invisible XML
excerpt: 74a3751f-29d3-48b1-a5ed-380ccae8fb40
categories: XML
tags: [xml,ixml,w3c,w3c community]
image:
  feature: 74a3751f-29d3-48b1-a5ed-380ccae8fb40
  credit: 74a3751f-29d3-48b1-a5ed-380ccae8fb40
  creditlink: 74a3751f-29d3-48b1-a5ed-380ccae8fb40
comments: true
share: true
author: victor_cuervo
---

Es curioso las cosas que se encuentra uno cuando va leyendo y saltando de noticia en noticia o cuando está preparando algún artículo para la web. Si me hubiesen preguntando hace unos días habría dicho que [las especificaciones sobre XML](https://www.manualweb.net/historia-del-xml/) estaban paradas y que no había mucha actividad nueva sobre este lenguaje. Y en ese momento me topé con el concepto y especificación en definición **Invisible XML**. Algo que no podía dejar de mirar mi curiosidad.


Dentro de las [comunidades W3C](https://www.w3.org/community/), un modelo algo más abierto que el encorsetado sistema propio de las especificaciones de la W3C existe el [Invisible Markup Community Group.](https://www.w3.org/community/ixml/)


## ¿Qué es Invisible XML?


Por explicarlo de forma resumida, la idea detrás de **Invisible XML** es que los autores puedan escribir los documento en el formato que quieran, que no sientan ataduras o limitaciones para definir en [XML](https://www.manualweb.net/xml/) sus documentos. Pero **Invisible XML** establecería un método por el cual tratar esos documentos como si realmente fuesen [XML](https://www.manualweb.net/xml/) y de esta manera aprovecharnos de las [capacidades de intercambio, manipulación,… que da de facto el lenguaje XML](https://manualweb.net/xml/introduccion-al-xml/#caracteristicas-xml).


Solemos pensar que si no utilizamos un lenguaje como [XML](https://www.manualweb.net/xml/) o JSON no estamos estructurando un documento. Y esto no es del todo cierto, ya que cuando generamos un documento, este **implícitamente suele llevar una estructura**.


Por ejemplo cuando escribimos una carta podemos tener el encabezado, el saludo, el contenido de la carta, el cierre o cómo despides la carta,… es decir implícitamente hay una estructura en el propio documento. 


Otro ejemplo es una lista de la compra o de tareas pendiente. En este caso se puede diferenciar en que tenemos una parte en la que indicamos si la tareas está hecha o en que estado se encuentra, la tarea en sí y la fecha en la que queremos hacer la tarea. Nuevamente la lista de tareas tiene su estructura implícita.


Estas estructuras las entendemos todos cuando miramos ese tipo de documentos. Pero, qué pasa cuando se lo damos a una máquina, cómo podemos decirte la estructura implícita que lleva asociado el documento para que pueda ser tratado de una forma automática. Pues eso es la idea de **Invisible XML**, el poder describir esa estructura para que dado un documento se genere un documento [XML](https://www.manualweb.net/xml/) que pueda ser tratado por la máquina. Lo que estamos haciendo con **Invisible XML es crear una gramática que interprete el documento.**


**Invisible XML** proporciona una **sintaxis específica** para la descripción declarativa, esta descripción declarativa será utilizada por el **procesador Invisible XML** para generar un documento XML del documento inicial.


[Invisible XML está liberado como especificación oficial](https://invisiblexml.org/1.0/) en junio 2022


## Gramática Invisible XML


La definición de la gramática de un fichero **Invisible XML** es sencilla y en ella se van especificando las diferentes reglas que queremos que se apliquen sobre el documento para poder interpretarlo.


Para explicarlo veamos cómo sería para aplicar **Invisible XML** sobre un documento de fechas que tengan un formato de estilo `11 febrero 23023`.


De esta manera definiremos una _**regla principal**_ en la que identifiquemos la fecha


```xml
fecha: dia, " ", mes, " ", annio.
```


Vemos que hemos creado tres _**entidades**_ sobre las cuales iremos indicando nuevas reglas. Así un día podrá ser un número de uno o dos dígitos.


```xml
dia: digito;
     digito, digito.
```


A su vez esas _**entidades**_ podrán ser números del 0 al 9.


```xml
-digito: "0"; "1"; "2"; "3"; "4"; "5"; "6"; "7"; "8"; "9".
```


Y así con cada una del resto de las _**entidades**_ que hemos definido en la regla. Tampoco vamos a ir mucho más allá, pero nuestro fichero ixml quedaría de la siguiente forma:


```xml
fecha: dia, " ", mes, " "?, annio?.
dia: digito;
     digito, digito.
-digito: "0"; "1"; "2"; "3"; "4"; "5"; "6"; "7"; "8"; "9".
mes: "Enero"; "Febrero"; "Marzo"; "Abril"; "Mayo"; "Junio";
     "Julio"; "Agosto"; "Septiembre"; "Octubre"; "Noviembre"; "Diciembre".
annio: digito, digito, digito, digito;
       digito, digito.
```


Luego hay opciones para indicar si queremos que sean elementos o atributos (con @), o serializar elementos (con -) u elementos opcionales (con ?).


Si queréis aprender algo más sobre **Invisible XML** no dejéis de seguir [este tutorial que enseña a crear una gramática paso a paso](https://homepages.cwi.nl/~steven/ixml/tutorial/tutorial.xhtml)


Una vez que pasemos nuestro **fichero iXML** por el procesador veremos que la salida en [XML](https://www.manualweb.net/xml/) quedará de la siguiente forma:


```xml
<fecha>
   <dia>11</dia>
   <mes>Febrero</mes>
   <annio>2023</annio>
</fecha>
```


## Herramientas para Invisible XML


Si quieres empezar a trabajar con **Invisible XML** y hacer probaturas creando gramáticas hay un par de herramientas que te pueden ser de utilidad:

- [WebService para poder probar iXML](https://homepages.cwi.nl/~steven/ixml/tutorial/run.html)
- [Navegador Javascript que interpreta iXML](https://johnlumley.github.io/jwiXML.xhtml)

Habrá que ver cómo evoluciona y las utilidades que se le van dando a esta especificación de **Invisible XML.** De momento, espero que al menos haya llamado tu atención.

