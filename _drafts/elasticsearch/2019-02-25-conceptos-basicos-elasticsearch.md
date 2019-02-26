---
layout: post
title: Conceptos Básicos de Elasticsearch
excerpt: "bal bla bla"
categories: elasticsearch
tags: [motor de búsqueda,lucene]
image:
  feature: covers/search.jpg
  credit: João Silas
  creditlink: https://unsplash.com/photos/UGQoo2nznz8
comments: true
share: true
author: victor_cuervo
---




## Insertar un documento en Elasticsearch

~~~sh
PUT twitter/_doc/1
{
    "user" : "kimchy",
    "post_date" : "2009-11-15T14:12:12",
    "message" : "trying out Elasticsearch"
}
~~~

Lo que estamos haciendo es insertar en el **índice** "twitter", de un **tipo** "doc" y con un **identificador** "1".

¿Qué es un índice, un tipo y un identificador?


### Índice
Un **indice** es una colección de documentos que tienen características similares. Por ejemplo podríamos tener la colección de "clientes" para guardar información de los mismos, otra colección que fuese "productos" para guardar información de los productos que compran los clientes,...

El índice se debe de especificar en minúsculas y es al que haremos referencia cuando realicemos las operaciones de indexación, búsqueda, actualización o borrado.

### Tipo
El **tipo** nos sirve para hacer una partición lógica del índice en diferentes tipos de documentos. Es un concepto que **Elasticsearch** va a retirar en las nuevas versiones.


### Documento
Será la información básica que va a ser indexada. Si hemos creado una colección de "clientes", cada documento será la información relativa a un cliente.

Los documentos se expresan en formato **JSON**









[Java]: http://www.manualweb.net/java/
[NOSQL]: {{site.url}}/nosql/
[API]: {{site.url}}/api-management/
