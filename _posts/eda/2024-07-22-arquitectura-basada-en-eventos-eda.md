---
layout: post
title: Arquitectura Basada en Eventos (EDA)
excerpt: "Una Arquitectura Basada en Eventos (EDA) es un patrón de diseño de software en el cual se diseñan servicios desacoplados que se relacionan mediante la publicación, consumo y enrutado de eventos."
categories: EDA
tags: [eda,evento,message broker,event broker,apache kafka,ibmmq,rabbitmq,tibco,pubsub+,solace,confluent]
image:
	path: /images/covers/eventos.webp
	thumbnail: /images/covers/eventos.webp
	caption: Fotografía de [FreePik](https://www.freepik.es/autor/freepik)
comments: true
share: true
author: victor_cuervo
---

## ¿Qué es una Arquitectura Basada en Eventos (EDA)?


Una **Arquitectura Basada en Eventos (EDA)** o **Event-Driven Architecture** es un **patrón de diseño de software** en el cual se diseñan _servicios desacoplados que se relacionan mediante la publicación, consumo y enrutado de eventos_. También son conocidas como arquitectura orientada a eventos o arquitectura dirigida por eventos.


En una Arquitectura Basada en Eventos (EDA), **un evento se define como un cambio de estado significativo en el sistema** o en el entorno en el que nos encontremos. Será este cambio el que haga que los servicios reaccionen para dar una respuesta sobre dicho cambio.


Un **cambio de estado** puede ser cosas como _“Se ha añadido un producto al carrito de la compra”_, _“Se ha realizado una transferencia bancaria”_, _“El cliente ha cambiado sus datos de contacto”_,… 


## Modelos tradicionales versus Modelos de eventos


Los modelos tradicionales de desarrollo son modelos síncronos, en estos modelos lo que encontramos es un **servicio emisor** que realiza una **petición directa** sobre un **servicio receptor** del cual espera una **respuesta directa**. Independientemente del tiempo que esta respuesta tarde.


![](https://arquitectoit.com/images/eda/modelo-sincrono.png)


Por otro lado, el modelo asíncrono que nos presenta una arquitectura basada en eventos versa en que el **servicio emisor genera un evento** el cual será **atendido de forma desconectada** o asíncrona por un **servicio receptor.** En este modelo el servicio emisor continua su ejecución independientemente de lo que tarde el servicio receptor en procesar la petición.


![](https://arquitectoit.com/images/eda/modelo-asincrono.png)


## Funcionamiento Básico de una Arquitectura Basada en Eventos (EDA)


El funcionamiento básico de una Arquitectura Basada en Eventos (EDA) es que **se produce o lanza un evento** por parte de uno o mas **Emisores (Publisher)**. Esta emisión puede ser producida de forma manual, debido a una interacción de un usuario o bien puede ser emitido de forma automática cuando se produce una condición concreta en un sistema.


**El evento suele ser almacenado en un contenedor que se denomina Cola (Queue) o en Temas (Topics)**. La cola va creciendo a medida que llegan los mensajes. En el caso de que la arquitectura basada en eventos ofrezca capacidades avanzadas como _filtrado, enrutado, agregación o correlación de eventos_, suele aparecer otra pieza que es el **Bus de Mensajes (Message Broker)**, el cual cuenta con las colas para almacenar los mensajes y con las capacidades mencionadas para su manipulación.


Una vez que tenemos un mensaje dentro de una cola o de un bus de mensajes tendremos **los Consumidores (Consumers), que son aquellos servicios que responden o ejecutan acciones atendiendo al evento que se ha generado** y la información que este proporciona.


![](https://arquitectoit.com/images/eda/arquitectura-eda.png)


## Beneficios y desafíos de las Arquitecturas Basadas en Eventos (EDA)


La principal ventaja de las Arquitecturas Basadas en Eventos es su **naturaleza asíncrona**. Es decir, los componentes que la conforman no tienen por qué estar sincronizados en tiempo real y pueden funcionar de forma independiente. Este escenario nos permite una **gran escalabilidad** y **crecimiento flexible** de la arquitectura, **pudiendo añadir más funcionalidades de forma sencilla** o bien aumentando las capacidades de procesamiento de la arquitectura inicial.


Sin embargo, las Arquitecturas Basadas en Eventos (EDA) también presentan desafíos. Y es que **los diseños, dado el modelo asíncrono pueden ser más complejos de implementar y de gestionar**. Además en escenarios de error puede suponer un reto el encontrar los puntos de fallo si no se han tomado las medidas necesarias de control y trazabilidad dentro de la arquitectura.


## Utilidad de la Arquitecturas Basadas en Eventos (EDA)


Con todo y con esto, las Arquitecturas Basadas en Eventos (EDA) son una opción de diseño muy potente que n**os permiten resolver múltiples escenarios** entre los que encontramos entornos de **alta carga y volúmenes dinámicos** gracias a la escalabilidad de estos sistemas


Además, las Arquitecturas Basadas en Eventos (EDA) nos pueden ser muy útiles en situaciones que necesitemos realizar evoluciones de aplicaciones legacy o monolíticas a [entornos más modernos basados en microservicios](https://arquitectoit.com/microservicios/).


Si hablamos de funcionalidades que pueden ser implementados mediante Arquitecturas Basadas en Eventos (EDA) podemos implementar, estos son diferentes, y van desde **gestión de procesos empresariales** como pueden ser los casos de Alta de Clientes o la Adquisición de Productos, **pasando por planos técnicos** para escalar [microservicios](https://arquitectoit.com/microservicios/) o aislar los datos de los dominios, o en áreas como la i**ntegración de datos hacía sistemas externos** como pueden ser las aplicaciones SaaS.


## Tecnologías detrás de las Arquitecturas Basadas en Eventos (EDA)


Si hablamos del software o de las tecnologías que nos ayudan a implementar Arquitecturas Basadas en Eventos (EDA) encontramos algunas soluciones como:

- **Apache Kafka**: Es una plataforma distribuida de transmisión de eventos que permite publicar, almacenar y procesar flujos de registros en tiempo real. Kafka es conocido por su capacidad para manejar grandes cantidades de datos y su alta resiliencia. Podemos encontrar soluciones empresariales de Apache Kafka como **Confluent**, los cuales añaden muchas más capacidades que las básicas ofrecidas por Apache Kafka.
- **RabbitMQ**: Es uno de los brokers de mensajes más antiguos y ampliamente utilizados. RabbitMQ soporta múltiples protocolos de mensajería como AMQP, MQTT y STOMP. El broker RabbitMQ es conocido por su fiabilidad y flexibilidad. Ofrece capacidades de persistencia de mensajes, confirmación de entrega y enrutado de mensajes. Además dispone de un sistema de plugins para poder extender sus capacidades.
- **Amazon SNS/SQS**: Amazon Simple Notification Service (SNS) y Amazon Simple Queue Service (SQS) son servicios gestionados de mensajería en la nube que permiten la comunicación entre sistemas distribuidos. SNS se utiliza para la transmisión de mensajes a múltiples suscriptores, mientras que SQS se enfoca en la gestión de colas de mensajes.
- **IBM MQ:** Conocido como IBM Message Queue es un middleware de mensajería que permite el intercambio de información entre aplicaciones asegurando que los mensajes se entreguen una vez y en el orden correcto.
- **PubSub+:** PubSub+ es una plataforma avanzada de mensajería que permite el intercambio en tiempo real de eventos e información entre aplicaciones, dispositivos y usuarios desarrollada por **Solace.** Ofrece capacidades de filtrado de temas (topics), persistencia de mensajes y enrutado dinámico. PubSub+ ofrece capacidades de integración con diferentes sistemas SaaS.
- **Tibco Messaging:** es una plataforma sofisticada diseñada para facilitar la comunicación fluida entre diversas aplicaciones y sistemas. Proporciona una infraestructura robusta y escalable que soporta una amplia gama de protocolos y patrones de mensajería. Tibco Messaging se integra fácilmente con otros productos de Tibco, mejorando sus capacidades y permitiendo una solución más completa para satisfacer las diversas necesidades.
