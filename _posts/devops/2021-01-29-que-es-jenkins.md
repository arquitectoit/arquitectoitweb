---
layout: post
title: ¿Qué es Jenkins? 
excerpt: "En este post repasaremos los conceptos básicos que nos ayudarán a entender qué es jenkins, para qué sirve y a desenmarañar textos más complicados que os encontréis a partir de ahora."
categories: devops
tags: [despliegue continuo,entrega continua,integración continua, jenkins, pipeline as code, pipeline]
image:
  path: /images/covers/jenkins-head-logo.jpg
  thumbnail: /images/covers/jenkins-head-logo.jpg
comments: true
share: true
author: gustavo_puig
---

Cualquier aventurero que se adentre en esto del [DevOps][DevOps] se tendrá que enfrentar con **Jenkins** y preguntarse **¿Qué es Jenkins?**. Y es que ***Jenkins*** es la pieza angular de todo pipeline. De hecho, es aquel encargado de orquestar la ejecución de cualquier automatismo que la industria de nuestra empresa requiera.

***Jenkins*** entiende que un pipeline no es otra cosa que una distribución de pasos, de pequeñas tareas, las cuales concatenadas (o paralelizadas) consiguen aquello que se conoce como Integración o Despliegue (los conceptos de "continuo" que suelen acompañar a estos dos conceptos son un apostrofre que habla de una dinámica, de un paradigma de desarrollo que consiste en hacer estas dos cosas mucho y con cada cambio de los fuentes del sofware).

Para echaros un cable a aquellos que quieran atreverse a dar los primeros pasitos en este mundillo, he aquí una introducción en su herramienta más importante. 

**Esperemos que os ayude =)**

## Conceptos básicos
Básicamente, en Jenkins trabajamos con:

### Un Pipeline

***First things firts***. Qué es un pipeline?? Pues bien, tan simple como un flujo de tareas que se ordenan. Cuando planteemos un pipeline siempre debemos pensar en sus extremos:

+ **El final.** La pregunta aquí es qué queremos conseguir y cuál es el elemento de salida que va a generar (un objeto, un cambio en un sistema, un evento...)
+ **El pricipio.** Cuál es el triger que iniciará su ejecución?

Parece una tontería, pero este señor requiere tener la cabeza muy estructurada...

Aunque Jenkins sirve para automatizar cualquier cosa, su propósito original fue dedicarlo para temas de Integración Continua y Despliege. **No es un martillo que sirva para todo pero no cerréis la mente a sus posibilidades**. Con la experiencia sabréis discriminar qué situaciones Jenkins tiene la potencia suficiente como para cubrirlas y en cuáles se nos queda corto.

Mi mejor consejo cuando queráis hacer un pipeline es que apliquéis siempre el patrón de **única responsabilidad**. Más vale concatenar múltiples pipelines para alcanzar un objetivo mayor que construir flujos megalómanos que luego no hay Dios que entienda... ni mantenga...

### Un Conjunto de pasos

Más arriba, en la introducción, ya hablamos de los pasos. Digamos que un paso (o step) es la unidad más pequeña que tiene integridad propia en un pipeline. Esto quiere decir que se trata de cierta tarea, apenas unas pocas líneas de código ;), que tienen como propósito realizar una funcionalidad muy concreta. ***MUY CONCRETA***.

**No os lieis con gigasnipsets**. Recordad el principio de única responsabilidad. En mi opinión, más vale hacer un pipeline de pasos muy granulares que uno que solo disponga de 3 pasos muy extensos y ya. Ahora bien, **cada paso debe añadir valor**, tiene que ofrecer algo que le dé entidad y que no sea una símple operación de sistema operativo (lee o imprime algo). La funcionalidad debe ser acotada pero que represente algo para la semántica del pipeline que estamos construyendo.

Cada vez que hagáis uno, pensad que queréis venderlo.. de hecho, y aunque es un concepto complicado, se pueden agrupar estos pasos en librerías y construir así nuestro propio **framework de pasos**. Esto es un tema un tanto avanzamos que mejor requiere verlo en un post independiente.

### A Groovy

Vale, ahora quiero implementar un paso. Con Jenkins no nos abandona el código. 

**Groovy** es el lenguaje principal de Jenkins. A aquellos que manejen ***[Java][Java]***, no le verán ningún problema. De hecho se trata de un ***[Java][Java]*** "tuneado" y simplificado para hacer scripts de este tipo. 

***Jenkins*** tiene sus complicaciones, pero el lenguaje base no es una de ellas. 

Ahora bien, podéis hacer vuestros pasos en el idioma que queráis. Si instaláis las librerías de vuestro lenguaje favorito en la máquina donde corre ***Jenkins***, podréis ejecutar cualquier tipo de script. De hecho [DevOps][DevOps] pide a gritos ser poliglota dado que no todos los lenguajes están optimizados para lo mismo. Por ejemplo, **Python** dispone potentes librerías para hacer operaciones complejas, y **Perl** viene muy a mano para tratar expresiones regulares. Pero sin ir mas lejos, interactuar con el SO mediante un **shell script** es de lo más habitual que encontrarás.

### Dos maneras de describirlo

Para describir la secuencia de pasos, es decir, para ordenar los steps que compondrán nuestro pipeline, existen dos maneras. Ambas igual de potentes:

+ **La freaky**. Consiste en describir con Groovy "a pelo" todos los pasos, abriendo y cerrando llaves de Ifs que nos permitirán evaluar "si sucedió esto antes", ahora "ejecuta este step".
+ **La moderna**. Se trata de definir en un json llamadas a una serie de funciones (que son cada step) una detras de otra.

Aquí otro consejo, que no os engañen, la primera manera es más molona, más compleja y menos "práctica". En una empresa buscamos sobre todo legibilidad, mantenibilidad y sobre todo funcionalidad. ***La forma moderna*** es mucho mejor en las dos primeras e igual de potente en la tercera.

Hace tiempo ya los ingenieros de Jenkins se dieron cuenta de esto e inventaron un DSL (Domain-Specific Language), es decir, una manera compacta de especificar lo mismo pero dando técncias que orienten el lenguaje al propósito (o dominio) que debe describir.

### Maestros y esclavos

En todas las operaciones hay alquien que manda y otro (o algunos) que ejecutan.

Para ***Jenkins***, el Maestro es el centro de operaciones, un punto logístico que se encarga de disparar los pipelines y centralizar la información del resultado de todos ellos. No solo eso, si no que es el punto con el que interactuaremos para configurar todas las capacidades que queramos habilitar en ***Jenkins***. 

Sin embargo, los esclavos son individuos que despiertan cuando el Maestro tiene una tarea que delegar. El Maestro recibe el evento de que debe ejecutarse un nuevo pipeline y ordena a los esclavos que ejecuten sus pasos.

Es interesante tener en la cabeza que un pipeline puede ejecutarse enteramente con único esclavo, pero los ingenieros solemos utilizar varios durante un mismo pipeline. Esto es porque creemos muy fuerte en el que "quien mucho abarca, poco aprieta" y un solo individuo es imposible que sea bueno en hacer de todo. Por esto preparamos disintas tipologías de esclavos que trabajan juntos para resolver un pipeline. De hecho tenemos esclavos para trabajar con ***[Java][Java]***, otros con ***.Net***, con ***Python***... ahora, gracias a los contenedores Docker esto se ha hecho tan fácil... 

### Dos tipos distintos de pipelines

Bueno, no sólo hay dos.. hay unos cuantos, pero los más famosos son:
+ Multibranch pipeline
+ Freestyle pipeline

El primero, ***el Multibranch***, tiene un propósito muy concreto. supervisará un repositorio de git y explorará todas las ramas buscando cambios. Este tipo se usa casi exclusivamente para la ***Integración Continua***. Al final, lo que pretendemos con esto es ejecutar un pipeline (que mezcle con otras ramas, que compile, pase test, empaquete, versione, etc.) cada vez que se descubra un nuevo cambio en una de nuestras rámas del código.

Sin embargo, el segundo está pensado para ejecutarse o bien de forma manual, un ***despliegue*** a pulso de click o de forma reactiva a otro tipo de evento (otro pipeline a terminado). Por ejemplo, nosotros lo usamos para disparar un ***despliegue*** cuando termina una ***Integración Continua*** satisfactoriamente y alcanzar así el ***Despliegue Continuo***.

### Un sin fin de plugins

Por suerte, no todos las tareas hay que "picárselas". Jenkins dispone de un amplio catálogo de plugins que incorporan funcionalidad específica a nuestros pipelines. Y es esta **una de las grandes ventajas de la herramienta**. 

Como buenos ***techies*** muchas veces nos dejamos llevar por la arrogancia de querer implementarlo todo nosotros, como si fuéramos infalibles. Pues bien, es **un error**. Nuestra potencia como ingeniero [DevOps][DevOps] está en perjiñar un pipeline, de conceptualizarlo, y desarrollarlo rápido y de forma robusta. Es nuestra industria la que está en juego!! Recordad que los mantras de [DevOps][DevOps] pretenden **hacer llegar el software mucho** al usuario final **y hacerlo ágilmente**. Cuando ***Jenkins*** falla demasiado se convierte en un incordio más que una ayuda, y nació para esto último. Nuestra foco debe estar en descubrir cada vez más escenarios que necesitan ayuda y podemos optimizar. 

La comunidad es muy buena en liberar nuevas capacidades, **y un código probado mucho es mejor que uno molón**.

Espero que os haya gustado y ahora sepáis un poco más sobre **¿qué es Jenkins?**.

[DevOps]: {{site.url}}/devops/
[Java]:  {{site.url}}/java/