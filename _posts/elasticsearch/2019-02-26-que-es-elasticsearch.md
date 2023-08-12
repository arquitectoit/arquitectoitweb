---
layout: post
title: ¿Qué es Elasticsearch?
excerpt: "Análisis sobre esta base de datos NoSQL orientada a documentos y a la búsqueda de textos"
categories: elasticsearch
tags: [motor de búsqueda,lucene,java,rest,logs,métricas,seguridad]
image:
  path: /images/covers/search.png
  thumbnail: /images/covers/search.png
  caption: Fotografía de [João Silas](https://unsplash.com/photos/UGQoo2nznz8)
comments: true
share: true
author: victor_cuervo
---

Las bases de datos entidad-relación *no estaban pensadas para realizar búsquedas de texto* sobre el contenido que almacenaban. Siempre se pensaron para atacar índices y buscar campos y datos específicos. No en vano sufrían y sufren (algo menos ahora) cuando intentamos atacar índices con información parcial.

Algunas de estas bases de datos entidad-relación incluyeron utilidades para lo que se denomina **"full search text"** para cuando almacenan muchas cantidades de datos de texto, de cara a permitir buscar una cadena en concreto. Pero los resultados quizás no eran los esperados cuando al final queremos ofrecer al usuario una búsqueda libre de texto.

Esta carencia en la búsqueda de textos sobre grandes cantidades de datos vino a ser cubierta con soluciones como **Elasticsearch**.

**Elasticsearch** es un **motor de búsqueda** que se basa en **Lucene** el cual nos permite realizar búsquedas por una gran cantidad de datos de un texto específico. Está escrito en [Java][Java] y se basa sobre una licencia **Apache**.

Gracias al motor **Lucene** sobre el que está implementado, **Elasticsearch** nos ofrece capacidades de *búsquedas de texto*, *autocompletado*, *soporte de geolocalización*,...

En si mismo podríamos definir a **Elasticsearch** como un base de datos [NoSQL][NOSQL] orientada a documentos **JSON**, los cuales pueden ser consultados, creados, actualizados o borrados mediante un un sencillo [API][API] Rest.

## Características Elasticsearch

Si tuviésemos que definir cuales son las principales características de **Elasticsearch** podríamos definir las siguientes:

### Orientación a Documentos

* Es una [base de datos NoSQL][NOSQL] **orientada a documentos JSON**, al estilo de **MongoDB**. Por lo cual no necesita que se definan esquemas a la hora de insertar los datos.

* Nos permite indexar grandes volúmenes de datos, para poder consultarlos posteriormente.
**Elasticsearch** se basa en los documentos **JSON** para poder realizar esta indexación. El documento **JSON** son un conjunto de pares clave/valor. Las claves son cadenas de texto y los valores pueden ser cadenas, números, fechas o listas.

* **Elasticsearch**, al basarse en modelos [NoSQL][NOSQL], almacena la información de forma desnormalizada. Es por ello que no se permiten hacer *joins* o *subqueries*.

### Indexación

* El proceso de añadir información a **Elasticsearch** se llama "indexación". Ya que cuando insertamos datos en **Elasticsearch** lo que se está haciendo es insertando en los índices de **Apache Lucene**.

### Escalabilidad

* **Elasticsearch** es una base de datos distribuida que *escala de manera dinámica de forma horizontal*, por lo que a mayor demanda podemos ir creciendo en nodos. *Llegando a poder almacenar **petabytes** de información*.

* **Elasticsearch** se organiza mediante nodos, los cuales son alojados dentro de un **cluster**. Permite añadir nuevos nodos al cluster para poder acometer nuevas cargas.

* Los documentos son particionados mediante técnicas de **sharding**, por lo cual los va distribuyendo a diferentes nodos. Esta distribución permite que las cargas de búsqueda se distribuyan por los diferentes nodos, mejorando los tiempos de respuesta.

* Pero a parte de distribuir los documentos mediante **sharding** aplica técnicas de **replica**. Estas técnicas hace que los documentos estén replicados en varios nodos. Esto permite que el sistema disponga de *alta disponibilidad* y *tolerancia a fallos*.

* **Elasticsearch** enruta las peticiones al nodo específico del cluster el cual contenga la información necesaria que se está buscando.

* En el caso de que haya algún problema, **Elasticsearch** puede detectar si hay algún nodo que está fallando. De esta manera es capaz de reorganizar la información y conseguir que los datos estén siempre accesibles.

### Acceso por API

* **Elasticsearch** permite acceder a los datos en tiempo real. Para ello dispone el acceso a todas sus capacidades mediante un [API][API] RESTful.

* Aunque el API que nos ofrece es muy completo, **Elasticsearch** también cuenta con librerías integradas para diferentes lenguajes de programación: *Java*, *C#*, *Python*, *Javascript*, *PHP*, *Ruby*,...

* **Elasticsearch** tiene su propio *Query Domain Specific Language (DSL)* mediante el cual permite realizar consultas mediante JSON. De esta forma podremos buscar sobre campos, aplicar filtros,... y así poder construir consultas complejas. Se basa sobre las operaciones que define **Lucene**.

## Casos de Uso de Elasticsearch

Si listamos algunos de los campos en los cuales **Elasticsearch** puede ser una solución podríamos enumerar los siguientes:

### Buscador de texto
Uno de los principios por los que se crea **Elasticsearch** es para facilitar las búsquedas de texto. Es por ello que mediante **Elasticsearch** podemos dar respuesta a las consultas de búsqueda de información a nuestras aplicaciones. Sobre todo cuando estas búsquedas sean libres y no estén identificadas en campos estructurados.

### Gestor de Logs
Podemos utilizar a **Elasticsearch** como gestor de los logs que generen los diferentes sistemas de nuestra compañía: *bases de datos*, *sistemas operativos*, *servidores*,... así como las *aplicaciones de nuestra compañía*. Conjuntamente con la suite **ELK** nos pemitirá realizar la recuperación de estos datos y la monitorización mediante **Kibana**.

Esta gestión de logs nos puede dar una **visión top-down desde las aplicaciones hasta el último sistema afectado**. Siendo un marco útil tanto para *desarrolladores de aplicaciones* como para *operadores de sistemas*. Por ende, una semilla para articular nuestra estrategia de [DevOps][DevOps].

### Análisis de Seguridad
Basándose en la capacidad de funcionar como *gestor de logs* y el permitir tener mucha profundidad de información lo hace ideal para entornos de **seguridad**.

Así podremos:

* Realizar análisis de seguridad "post mortem" a más largo plazo.
* Disponer de información en tiempo real sobre brechas de seguridad y por lo tanto poder actuar de forma ágil.
* Identificar desde dónde se están haciendo las autentificaciones al sistema.
* Realizar análisis del tráfico DNS
* ...

La idea es que se puede conectar un **SIEM** sobre el **Elasticsearch** para utilizarlo como base de información.

### Análisis de Métricas
Al igual que hacemos con la parte de seguridad, se puede utilizar **Elasticsearch** para  unificar un único sitio dónde guardar, analizar y monitorizar toda la información de nuestros sistemas y aplicaciones.

Dependiendo del sistema tendremos una u otra información: el uso de la CPU o memoria, los tiempos de respuesta,...

Esta información nos permitirá realizar acciones preventivas, gestionar alertas y poder monitorizar nuestros sistemas de forma proactiva.


[Java]: http://www.manualweb.net/java/
[NOSQL]: {{site.url}}/nosql/
[API]: {{site.url}}/api-management/
[DevOps]: {{site.url}}/devops/
