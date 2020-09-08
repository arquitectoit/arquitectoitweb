---
layout: post
title: Módulos Javascript
excerpt: "Desde ES6 Javascript permite el uso de módulos, así que veremos qué son los módulos Javascript, cómo podemos crearlos e importarlos en nuestros programas."
categories: front
tags: [microfrontend, modulos, javascript]
image:
  feature: covers/front.jpg
comments: true
share: true
author: victor_cuervo
---

Los módulos, librerías o paquetes son funcionalidades que casi todos los lenguajes de programación ofrecen y que Javascript se tomo su tiempo en incluir. Así que vamos a ver un poco más en detalle qué son los módulos [Javascript][Javascript].

Al final un módulo es la forma que tenemos de organizar el código fuente de nuestro programa y no tener que tenerlo todo dentro un único fichero. Lo que podemos hacer con los módulos es distribuir la funcionalidad de nuestro aplicativo en varias partes.

Los beneficios del uso de módulos son claros:

* Te permite organizar tu funcionalidad en diferentes partes y ficheros
* Esta funcionalidad puede ser reutilizada por diferentes aplicaciones
* Permite distribuir el trabajo en diferentes desarrolladores para poder trabajar en paralelo.
* Resuelve problemas de nombrado de funciones, ya que la función está asociada al módulo.

Por ejemplo,...


## Historia de los módulos Javascript
En el lenguaje [Javascript][Javascript] los módulos tardaron un poco más de la cuenta en llegar a la especificación del lenguaje, y es que hasta la versión de ECMAScript 6, conocida como ES6 o ES2015 no se inclusó la posibilidad de gestionar dependencias y organizar nuestro código [Javascript][Javascript] en módulos.

Hasta ese momento, si utilizábamos nuestro código [Javascript][Javascript] en páginas web nos veíamos abocados a cargar de forma síncrona y con renderizado los ficheros [Javascript][Javascript] en los que habíamos distribuido nuestro código mediante el elemento [`script`][script]. Modelo que llevaba complejidad cuando unos ficheros hacían referencia a otros y se necesitaba conocer todo lo que se iba a cargar.

Más adelantes aparecieron frameworks como [RequireJS][RequireJS] o [CommonsJS][CommonsJS] para poder dar soporte a nuestros módulos [Javascript][Javascript].

Podemos echar un ojo a la web [Can I Use][CanIUse] para ver el soporte que ya tenemos de los módulos en [Javascript][Javascript] sobre los diferentes navegadores web utilizando un patrón de carga asíncrona AJAX.


<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>

<p class="ciu_embed" data-feature="es6-module" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
</p>

## Definir un Módulo Javascript
Para definir un módulo Javascript simplemente necesitamos crear un fichero .js en el cual creemos las variables y funciones del módulo. Por defecto todas las variables y funciones del módulo son privadas y solo viven dentro del módulo.

Deberemos de utilizar el modificador `export` para poder indicar cuales de estas variables y funciones queremos que sean públicas.

~~~javascript
// mi-modulo.js
export function saludo () {
   console.log('Saludos desde el módulo');
}
~~~~

En el caso de que tengamos varias variables y funciones y solo queramos publicar partes de ellas podemos utilizar el modificador `export` delante de cada una de ellas o utilizarlo de forma general.


~~~javascript
// mi-modulo.js
let nombre_defecto = 'Luis';

export function saludo () {
   console.log('Hola ' + nombre_defecto);
}

function saludo_nombre(nombre) {
  console.log('Hola ' + nombre);
}

export { saludo_nombre};
~~~~






* Cuando cargas vía script se realiza un renderizado http del código, lo que hace que la página parezca lenta
* ES6 (ES2015) introduce el concepto de módulos para poder permitir gestionar dependencias y organizar el código Javascript
* Formas de definir un módulo (Esto era antes de ES6)
 * Asynchronous Module Definition (AMD)
 * Universal Module Definition (UMD)


> Hay que tener cuidado ya que el uso de módulos en local no nos funcionará ya que se tiene que tener soporte CORS: cross-origin resource sharing.

Cómo importar un módulo

~~~javascript
<script type="module">
  import { tag } from './html.js'

  const h1 = tag('h1', '👋 Hello Modules!')
  document.body.appendChild(h1)
</script>
~~~~

Cómo exportarlo 
Esto exporta una función. ¿Cómo se exportarán todos?



Cargarlo como un script

~~~html
<script type="module" src="app.js"></script>
~~~

Para hacer un fallback si no carga el módulo

~~~html
<script type="module" src="module.js"></script>
<script nomodule src="fallback.js"></script>
~~~

Incluso se puede precargar un módulo
Hay que ver cuál es el soporte para esto `modulepreload`.

~~~html
<link rel="modulepreload" href="html.js">
~~~


## ¿Qué es un módulo?


## Cómo importo un módulo Javascript

## Módulos Javascript y Namespaces


## Uso de Módulos Javascript en NodeJS
Los módulos Javascript definidos en ES6 son soportados a partir de NodeJS 9.8 hay soporte para módulos

Uso de `module.exports` para exportar las funciones

~~~javascript
module.exports = { PI, sum, mult };
~~~

Y `requiere` para poder cargar los módulos

~~~javascript
const { sum, mult } = require('./lib.js');
~~~






[Javascript]: https://www.manualweb.net/javascript
[CanIUse]: https://caniuse.com/
[CommonsJS]: https://
[RequireJS]: https://
[script]: https://w3api.com/wiki/HTML:SCRIPT