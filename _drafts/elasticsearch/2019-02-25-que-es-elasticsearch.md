---
layout: post
title: ¿Qué es Elasticsearch?
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

ELK: Elasticsearch, Logstash, Kibana

**Elasticsearch** es un **motor de búsqueda** que se basa en **Lucene** el cual nos permite realizar búsquedas por una gran cantidad de datos de un texto específico.

Está escrito en [Java][Java] y tiene una licencia **Apache**


Las bases de datos relacionales no estaban pensadas para realizar búsquedas de texto sobre el contenido que almacenaban. Siempre se pensaron para atacar índices y buscar campos y datos específicos. No en vano sufren cuando intentamos atacar índices con información parcial.

Algunas de las bases de datos relacionales incluyeron utilidades para lo que se llama **"full search text"** para cuando almacenan muchas cantidades de datos de texto, de cara a permitir buscar una cadena en concreto. Pero los resultados quizás no eran los esperados cuando al final queremos ofrecer al usuario una búsqueda libre de texto.






## Características Elasticsearch

### Orientado a Documentos

* Es una [base de datos NoSql][NOSQL] **orientada a documentos JSON**, al estilo de **MongoDB**. Por lo cual no necesita que se definan esquemas a la hora de insertar los datos.

* Nos permite indexar grandes volúmenes de datos, para poder consultarlos posteriormente.
**Elasticsearch** se basa en los documentos JSON para poder realizar esta indexación. El documento JSON son un conjunto de pares clave/valor. Las claves son cadenas de texto y los valores pueden ser cadenas, números, fechas o listas.

* **Elasticsearch** se basa en modelos NoSQL almacenando la información desnormalizada. Es por ello que no se permite hacer joins o subqueries.

### Índices
¿Cuándo metes un documento se mete directamente en un índice?

El proceso de añadir información a **Elasticsearch** se llama "indexación". Ya que cuando insertamos datos en **Elasticsearch** lo que se está haciendo es insertando en los índices de **Apache Lucene**.

### Escalable

* Es una base de datos distribuida que escala de manera dinámica de forma horizontal, por lo que a mayor demanda podemos ir creciendo en servidores. Llegando a poder almacenar petabytes de información.

* **Elasticsearch** se organiza mediante nodos, los cuales aloja dentro de un **cluster**.

* Gestiona conceptos de **Sharding** y **Replicas**

* Los documentos son particionados mediante técnicas de **sharding**, por lo cual los va distribuyendo a diferentes nodos. Esta distribución permite que las cargas de búsqueda se distribuyan por los diferentes nodos, mejorando los tiempos de respuesta.

* Pero a parte de distribuir los documentos mediante **sharding** aplica técnicas de **replica**. Estas técnicas hace que los documentos estén replicados en varios nodos. Esto permite que el sistema disponga de alta disponibilidad y tolerancia a fallos.

* **Elasticsearch** enruta las peticiones al nodo específico del cluster el cual contenga la información necesaria que se está buscando.

* Permite añadir nuevos nodos al cluster para poder acometer nuevas cargas.

* **Elasticsearch** puede detectar si hay algún nodo que está fallando para poder reorganizar la información y conseguir que los datos estén siempre accesibles.

* Permite acceder a los datos en tiempo real.


## Acceso por API

* Permite el acceso a todas sus capacidades mediante un [API][API] Restful.

* Se pueden realizar búsquedas estructuradas o no estructuradas.

* Búsquedas de texto, autocompletar, soporte de geolocalización,... gracias al motor **Lucene** sobre el que está implementado

* Elasticsearch es ofrecido en un modelo "as a Service" en algunas plataformas cloud, como es el caso de [Elasticsearch en Amazon WebServices](https://aws.amazon.com/elasticsearch-service/)




* Permite realizar consultas con un bajo tiempo de respuesta.

* Tiene librerías integradas para diferentes lenguajes de programación: Java, C#, Python, Javascript, PHP, Ruby,...



* **Elasticsearch** tiene su propio Query DSL (Query Domain Specific Language) que permite realizar consultas mediante JSON.
Para buscar sobre campos, aplicar filtros,... y así poder construir consultas complejas. Se basa sobre las operaciones que define **Lucene**.


## Dónde se aplica: casos de uso


* Buscador de texto
Uno de los principios por los que se crea es para facilitar las búsquedas. Es por ello que mediante **Elasticsearch** podemos dar respuesta a las consultas de búsqueda de información a nuestras aplicaciones. Sobre todo cuando estas búsquedas sean libres y no estén identificadas en campos estructurados.



* Análisis de Seguridad
Te permite tener mucha profundidad de información, por lo cual permite hacer "postmortem" a más largo plazo.
Tienes información en tiempo real por lo cual puedes actuar de forma ágil
Identificar desde dónde se están haciendo las autentificaciones al sistema.
La idea es que se puede conectar un **SIEM** sobre el **Elasticsearch**
Permite análisis del tráfico DNS

* Gestor de Logs
Podemos utilizar a **Elasticsearch** como gestor de los logs que generen los diferentes sistemas: bases de datos, sistemas operativos, balanceadores,... y aplicaciones de nuestra compañía. Conjuntamente con la suite **ELK** nos pemitirá realizar la recuperación de estos datos y la monitorización mediante **Kibana**.

Hay que pensar que los sistemas y aplicaciones generan millones y millones de logs.


* Análisis de Métricas

Unifica un único sitio dónde guardarlos, analizarlos y monitorizarlos.
Dependiendo del sistema tendremos el uso de la CPU o memoria, los tiempos de respuesta,...

* Geo búsquedas
Búsquedas relacionadas a la geoposición de un elemento mediante longitud y latitud.



## Ecosistema ELK

**Elasticsearch** conjuntamente al recolector de datos **Logstash** y la herramienta de visualización de datos **Kibana** conforman lo que se conoce como la suite **ELK**.




## Insertar mi primer documento en Elasticsearch
(Y consultar)

A escribir:

* Elasticsearch as a Service (en AWS)


[Java]: http://www.manualweb.net/java/
[NOSQL]: {{site.url}}/nosql/
[API]: {{site.url}}/api-management/
