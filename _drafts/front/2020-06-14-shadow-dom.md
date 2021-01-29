---
layout: post
title: Shadow DOM
excerpt: "xxx"
categories: front
tags: [microfrontend, dom, javascript, html]
image:
  feature: covers/front.png
comments: true
share: true
author: victor_cuervo
---


Para entender qué es el Shadow DOM debemos primero entender qué es el DOM de una página web y por qué aparece la necesidad de generar un Shadow DOM y cuales son sus beneficios.

El **DOM** es es *Document Object Model* y su principal objetivo es el de representar un documento en base a un arbol de objetos u elementos. Así tenemos diferentes tipos de **DOM** pero el **DOM** que más te sonará es el que representa a un documento web, es decir, una página web. Así las páginas web que vemos en nuestros navegadores no dejan de ser más que representaciones de un **DOM**

Cada uno de los elementos de la página está representado por un objeto DOM de [HTML][HTML] como puede ser un párrafo de texto, un título o una imagen.

Así, si tenemos esta simple página [HTML][HTML]:

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mi Primera Página Web</title>
  </head>
  <body>
      <section>
        <img src="hola-mundo.png" alt="Imagen de Hola Mundo para saludar a los visitantes de la página">
        <p>Hola Mundo amigos de <a href="https://www.arquitectoit.com/">Arquitecto IT</a></p>
      </section>
  </body>
</html>
~~~

Tendremos el siguiente **DOM**:

~~~
└ DOCTYPE: html
  └ HTML
  │  └ HEAD
  │  └ #text:
  │  └ META charset="utf-8"
  │  └ #text:
  │  └ TITLE
  │  │  └ #text: Mi Primera Página Web
  │  └ #text:
  └ #text:
  └ BODY
     └ #text:
     └ SECTION
     │  └ #text:
     │  └ IMG src="hola-mundo.png" alt="Imagen de Hola Mundo para saludar a los visitantes de la página"
     │  └ #text:
     │  └ P
     │  │  └ #text: Hola Mundo amigos de
     │  │  └ A href="https://www.arquitectoit.com/"
     │  │  └ #text: Arquitecto IT
     │  └ #text:
     └ #text:
~~~

El lenguaje [Javascript][Javascript] es el que nos permite cambiar de forma dinámica el contenido de este documento de objetos y modificarlo. De esa manera, al alterar el contenido, podemos crear efectos dentro de nuestra página web como que cambie una imagen por otra, que aparezca un texto o directamente que se cree un contenido totalmente nuevo.

Así, podemos modificar la imagen de nuestro documento anterior de la siguiente forma:

~~~javascript
let images = document.getElementsByTagName('img');
images[0].src = 'nueva-imagen.png';
~~~

> Se puede apreciar que el elemento que representa al documento dentro de [Javascript][Javascript] se llama `document` haciendo referencia al documento DOM.

## El inconveniente del DOM
El inconveniente del DOM es que cada vez que modificamos el contenido del **DOM** que representa nuestra página web, el navegador renderiza el contenido. Es por ello que si vamos haciendo muchos cambios, por cada uno de ellos se va renderizando el contenido y generando una sensación de lentitud en la visualización de la página.

Para poder intentar mejorar este modelo e ir cargado de forma dinámica nuevos elementos se utilizó el elemento [`iframe`][iframe], el cual nos permitía cargar de forma asíncrona nuevos documentos.


## Qué es ShadowDOM

**Shadow DOM** permite crear un *árbol DOM oculto* dentro de nuestro **DOM**
El primer elemento del **Shadow DOM** es el ***shadow root***. Sobre este elemento podemos añadir cualquier elemento DOM que queramos.

La forma de manipular el **Shadow DOM** es la misma que cuando manipulamos un DOM normal.


![Shadow DOM]({{ site.url }}/images/front/shadow-dom/shadow-dom.png)


Tenemos que trabajar ocn 3 conceptos:

* **Shadow Host**, el nodo del DOM al que atachamos el Shadow DOM.
* **Shadow Tree**, el árbol DOM dentro del Shadow DOM.
* **Shadow Boundary**, el punto en el que el Shadow DOM termina y el DOM normal empieza.
* **Shadow Root**, el nodo raíz del Shado DOM.


Dentro del **Shadow DOM** podemos insertar elementos [HTML][HTML], [CSS][CSS] y [Javascript][Javascript]. Por lo cual podemos generar un documento nuevo con todas las funcionalidades.

Es importante saber que el **Shadow DOM** encapsula todo el contenido que tiene de tal manera que evita colisiones entre el DOM del documento principal con el DOM que está contenido dentro del **Shadow DOM**

## Usando el Shadow DOM

Lo primero que tenemos que saber es que el **Shadow DOM** tiene que estar anclado a uno de los elmentos del DOM actual. Para ello utilizamos el método `attachShadow()`.


~~~javascript


~~~

Al utilizar **Shadow Dom** aislamos los elementos, código [Javascript][Javascript] y [estilos CSS][CSS] y evita que se produzcan conflictos de nombres entre los elementos del DOM principal y los elementos del **Shadow DOM**

Evitamos así conflictos con los ids de los elementos, con los nombres de las clases [CSS][CSS],...



## Qué papel juega en los WebComponents

Shadow DOM es uno de los cuatro estándares de los WebComponents: Plantillas HTML, Shadow DOM, Custom Element e Importaciones HTML.

La encapsulación beneficia la creación de WebComponents


## Capacidades que nos ofrece Shadow DOM

* ***DOM Aislado***, el DOM es autocontenido, podemos evitar que los elementos del Shadow DOM sean vistos desde el DOM general.
* ***CSS con ámbito***, podemos acotar la definición de los estilos [CSS][CSS] al DOM definido dentro del **Shadow DOM**.
* ***Simplifica Selectores CSS***, al tener menos elementos en el DOM los selectores de las hojas de estilo [CSS][CSS] son más sencillos.
* ***Composición***, permite crear un DOM como un conjunto de DOM.




[Javascript]: https://www.manualweb.net/javascript/
[HTML]: https://www.manualweb.net/html/
[CSS]: https://www.manualweb.net/css/
[iframe]:
