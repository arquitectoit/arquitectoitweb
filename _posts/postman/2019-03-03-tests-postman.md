---
layout: post
title: Tests en Postman
excerpt: "Cómo utilizar la herramienta Postman para poder definir y compartir los tests unitarios sobre un API o Servicio."
categories: postman
tags: [tests,node.js]
image:
  path: /images/covers/postman.png
  thumbnail: /images/covers/postman.png
  caption: Fotografía de [Marius Christensen](https://unsplash.com/photos/UXfi8LyqGDk)  
comments: true
share: true
author: victor_cuervo
---

Cuando construyamos APIs una de la cosas que tenemos que entender es que **cada API o servicio que codifiquemos es un activo más de software que hay que gestionar**. Es por ello que como buen software, cuando construyamos el API habrá que asociarle tests de usuario. En este caso vamos a ver cómo nos podemos apoyar en [Postman][Postman] para construir nuestros tests de los APIs.

[Postman][Postman] cuenta con un **entorno de ejecución Node.js** que nos permite ejecutar comportamientos dinámicos en las colecciones y peticiones. Será este **entorno de ejecución Node.js** el que utilizaremos para crear **tests en [Postman][Postman]**.

[Postman][Postman] nos ofrece dos puntos en los cuales podemos preparar nuestros tests sobre las APIs. En primer lugar nos posibilita hacer **pre-test scripting**, es decir código que nos sirva para poder preparar la invocación al API, y una vez ejecutado el API podemos hacer ya los **tests con [Postman][Postman]**.

![Esquema de Tests en Postman]({{site.url}}/images/postman/test-script-esquema.png)

Para poder codificar nuestros tests simplemente tendremos que ir a las pestañas *pre-request script* y *tests*.

![Test y PreRequest en Postman]({{site.url}}/images/postman/test-script.png)

En este caso nos vamos a centrar en cómo crear los **tests con [Postman][Postman]**. Un test con [Postman][Postman] tiene tres partes:

* **Descripción del Test**, un texto que describe la finalida del test.
* **Código asociado al Test**, código que utiliza el api de [Postman][Postman] `pm` para poder codificar los tests unitarios.
* **Resultado de la ejecución del Test**, información sobre los tests que se han ejecutado correctamente, incorrectamente o que se han obviado.

![TestPostman]({{site.url}}/images/postman/postman-tests.png)

## API de Tests en Postman
Para codificar los **tests con [Postman][Postman]** deberemos de conocer un poco el API que nos ofrecen para poder construir los tests.

Cada uno de los tests los ejecutamos con el objeto `pm` y en concreto con el método `.test()`. Así tendremos la siguiente estructura por cada uno de los test:

~~~javascript
pm.test("Descrición Funcionalidad a Probar", function(){
  // Código que valida la prueba del test
});
~~~

Para poder acceder al contenido de la respuesta de las invocaciones tenemos el objeto `pm.response` y su método `.json()` que nos permitirá acceder a los elementos de la respuesta en **JSON**.

~~~javascript
pm.response.json();
~~~

Si nuestra estructura es:

~~~javascript
{
  "nombre": "Víctor",
  "telefono": 913456762
}
~~~

Podremos acceder al nombre escribiendo:

~~~javascript
nombre = pm.response.json().nombre;
~~~

El último método que tenemos que controlar es el que nos permite realizar una comprobación de contenido, este es `pm.expect`

~~~javascript
pm.expect(valor).to.equal(valor);
~~~

Así, siguiendo el ejemplo anterior podríamos comprobar que la respuesta viene con un nombre que es "Víctor" de la siguiente manera:

~~~javascript
pm.expect(nombre).to.equal("Víctor");
~~~

El test completo podría quedar de la siguiente forma:

~~~javascript
pm.test("Nombre es Víctor", function(){
  nombre = pm.response.json().nombre;
  pm.expect(nombre).to.equal("Víctor");
});
~~~

Seguro que ya puedes empezar a realizar tus primeros tests con [Postman][Postman]. Te dejo el [ejemplo de tests explicado en el artículo][EjemploTestPostman] para que te valga como base.

[Postman]: {{site.url}}/postman/que-es-postman/
[EjemploTestPostman]: {{site.url}}/resources/postman/random_user.postman_collection.json
