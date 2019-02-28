---
layout: post
title: Qué son los Beats
excerpt: "aaa"
categories: elasticsearch
tags: [motor de búsqueda,lucene]
image:
  feature: covers/write.jpg
  credit: Wim Mulder
  creditlink: https://www.flickr.com/photos/wimmulder/
comments: true
share: true
author: victor_cuervo
---


Lo primero que haremos cuando estemos trabajando con [Elasticsearch][Elasticsearch]







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


[Elasticsearch]: {{site.url}}/elasticsearch/que-es-elasticsearch/
