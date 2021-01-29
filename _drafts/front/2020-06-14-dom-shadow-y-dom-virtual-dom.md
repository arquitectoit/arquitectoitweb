---
layout: post
title: DON, Shadow DOM y Virtual DOM
excerpt: "xxx"
categories: front
tags: [dom. shadow dom, virtual dom]
image:
  feature: covers/front.png
comments: true
share: true
author: victor_cuervo
---


* Shadow DOM no es un DOM completo, si no un DOM que está anclado a un DOM principal pero que vive de forma aislada.
* Si no hay DOM no puede existir un Shadow DOM.

* Virtual DOM va más enfocado a resolver temas de rendimiento de manipulación del DOM.
* A diferencia del Shadow DOM el Virtual DOM si que representa un DOM completo, pero representado de forma virtual
* Virtual DOM es utilizado por librerías como ReactJS o VueJS de tal manera que acumulan los cambios sobre el DOM y cuando se han hecho todos se inyectan sobre el DOM general. De esta manera están enfocados al rendimiento.
* El Virtual DOM es conocido como VDOM


https://medium.com/@ger86/y-eso-del-virtual-dom-de-react-qu%C3%A9-es-3feed6366925


## Virtual DOM
