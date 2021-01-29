---
layout: post
title: WebComponents
excerpt: "aaa"
categories: front
tags: [WebComponents]
image:
  feature: covers/front.png
comments: true
share: true
author: victor_cuervo
---


https://developers.google.com/web/fundamentals/web-components/customelements
https://www.webcomponents.org/

Los WebComponents son los bloques de construcción para las **aplicaciones web modernas**.

## Custom Elements
Los **Custom Elements** dan la capacidad a los desarrolladores de extender el [lenguaje HTML][HTML] y crear sus propios componentes. Esta construcción basada en componentes es un código más modular que puede ser reutilizado en diferentes contextos.

## Shadow DOM
El **Shadow DOM** es un estándar web que ofrece encapsulado de estilo y markup dentro de los componentes. Es una pieza crítica en los Web Components ya que asegura que el componente funcionará en cualquier entorno incluso si hay otras [CSS][CSS] o [Javascript][Javascript] funcionando en la página.



## Custom Elements
Los desarrolladores pueden crear sus propios elementos [HTML][HTML], reforzar los que existen o ampliar los elementos [HTML][HTML] creados por otros desarrolladores.

La idea de los WebComponents es crear componentes reutilizando estándares existentes como Javascript/HTML/CSS.


El estándar [HTML][HTML] no permite asociar automáticamente el comportamiento del Javascript con los elementos de marcado. Los **Custom Elements** permiten extender y evolucionar el [HTML][HTML] **agrupando estructura y comportamiento**.

## Definir un Custom Element


-----


Permitir crear elementos HTML nuevos y que además contengan código de cliente.
Siempre llevan un guión en el nombre. Ejemplo google-maps
No afectan al comportamiento de la página
Se pueden extender componentes existentes mediante el atributo is.

* Como importar un webcomponent en una página

## Frameworks que implementan webcomponents

* Polymer, de Google
* X-Tag, de Mozilla
* Bosonic


# Tecnologías en las que se basan

* Custom Elements
* HTML Imports
* Templates
* Shadow DOM


Dudas? Puedo interactuar con ellos?



## Revisar
* HTML Templates - https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
* Módulos - https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system
* Polymer - https://www.polymer-project.org/
* PWA - https://web.dev/progressive-web-apps/

[CSS]: http://www.manualweb.net/css/
[Javascript]: http://www.manualweb.net/javascript
[HTML]: http://www.manualweb.net/html
