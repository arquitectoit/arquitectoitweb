---
layout: post
title: Crear un índice en Elasticsearch
excerpt: "Pasos que tenemos que dar para poder crear un índice en Elasticsearch y así insertar nuestro primer documento JSON."
categories: elasticsearch
tags: [indice,json,sharding]
image:
  feature: covers/search.png
  credit: João Silas
  creditlink: https://unsplash.com/photos/UGQoo2nznz8
comments: true
share: true
author: victor_cuervo
---

Cómo bien hemos visto en [los conceptos básicos de Elasticsearch][ConceptosElasticSearch] los documentos **JSON** que maneja [Elasticsearch][Elasticsearch] se guardan en un **índice**. Es por ello que lo primero que haremos será **crear un índice en [Elasticsearch][Elasticsearch]**.

Lo primero que tenemos que *saber es la URL en la que se encuentra desplegado nuestro servidor de [Elasticsearch][Elasticsearch]*. En el caso de que el servidor esté en local la URL será:

~~~shell
http://localhost:9200/
~~~

Si queremos probar si el servidor está en esta URL, simplemente deberemos de invocarlo con un **método GET** y veremos en pantalla algo parecido a lo siguiente:

~~~json
{
    "name": "6y3R3tV",
    "cluster_name": "docker-cluster",
    "cluster_uuid": "k3JFLfrqQbCcXjmeKkQm7Q",
    "version": {
        "number": "6.6.1",
        "build_flavor": "default",
        "build_type": "tar",
        "build_hash": "1fd8f69",
        "build_date": "2019-02-13T17:10:04.160291Z",
        "build_snapshot": false,
        "lucene_version": "7.6.0",
        "minimum_wire_compatibility_version": "5.6.0",
        "minimum_index_compatibility_version": "5.0.0"
    },
    "tagline": "You Know, for Search"
}
~~~

Para crear un índice en [Elasticsearch][Elasticsearch] simplemente tendremos que invocar al servidor de [Elasticsearch][Elasticsearch] mediante una **petición PUT** sobre el **índice** que queremos crear.

A la hora de crear el [Elasticsearch][Elasticsearch] hay que recordar que los **índices** se dividen en **tipos**, por lo cual la petición **PUT** deberá de indicar el **índice** y **tipo** sobre el que queremos insertar el documento.

Por ejemplo, si queremos crear un cliente, podemos tener el **índice** "cliente" y el **tipo** "docs". En este caso haremos la invocación **PUT** de la siguiente forma:

~~~shell
PUT clientes/docs/
{
	"nombre":"Juan Carlos Martin Perez",
	"edad": 32,
	"foto": {
		"small":"jcmp-pic-small.png",
		"normal":"jcmp-pic.png"
	}
}
~~~

Una vez lanzada la petición sobre el servidor de [Elasticsearch][Elasticsearch] veremos que la respuesta que nos da el servidor es la siguiente:

~~~json
{
    "_index": "clientes",
    "_type": "docs",
    "_id": "0WEeRWkBff804_ExwE8Y",
    "_version": 1,
    "result": "created",
    "_shards": {
        "total": 2,
        "successful": 1,
        "failed": 0
    },
    "_seq_no": 1,
    "_primary_term": 1
}
~~~

En ella podemos ver el **índice** y **tipo** en el que se ha insertado. Pero de igual manera podremos ver otras cosas como:

* El identificador del documento en el campo `_id`
* La versión del documento en el campo `_version`. La versión cambiará cada vez que actualicemos el documento.
* El número de divisiones o **shards** que se han creado, en el campo `_shards`.

Es importante saber que a la hora de crear el documento se puede indicar el *identificador* que queremos asociar al documento, para ello simplemente se añadirá en la URL de petición, tras el **tipo**.

~~~shell
PUT clientes/docs/123456
{
	"nombre":"Juan Carlos Martin Perez",
	"edad": 32,
	"foto": {
		"small":"jcmp-pic-small.png",
		"normal":"jcmp-pic.png"
	}
}
~~~

En este caso el valor del `_id` en la respuesta será "123456".

Con esto ya hemos visto lo sencillo que es **crear un índice en [Elasticsearch][Elasticsearch]** para insertar nuestro primer documento.

[Elasticsearch]: {{site.url}}/elasticsearch/que-es-elasticsearch/
[ConceptosElasticSearch]: {{site.url}}/elasticsearch/conceptos-basicos-elasticsearch/
