---
layout: post
title: Formato AVIF
excerpt: "El nuevo formato AVIF proporciona altos grados de compresión manteniendo la calidad de las imágenes, superando a formatos como JPEG o WebP."
categories: front
tags: [avif,webp,gif,jpeg]
image:
  feature: covers/marcos-foto.jpg
  credit: Jessica Ruscello
  creditlink: https://unsplash.com/@jruscello
comments: true
share: true
author: victor_cuervo
---

La evolución de la web ha ido acompañada con la evolución de los formatos de imágen que se soportaban por las páginas. Ya que por un lado servían para mejorar el aspecto visual de las mismas y por el otro se luchaba para que el peso de la descarga de las páginas no se viese muy afectada por el uso de las imágenes.

Así hemos ido evolucionando de los primeros **formatos GIF** de baja calidad, eso sí con sus animaciones, a formatos más adaptados a la web que nos permitían comprimir las imágenes y conseguir que pesaran menos (todo por ahorrar en los anchos de banda y tiempos de respuesta de las páginas), como era el caso del **formato JPEG**.

Luego pasamos a otros formatos como podía ser el **formato PNG** que nos ofreció imágenes con mayor profundidad de contraste y sobre todo que no estaba sujeto a patentes. U a otros formatos más modernos como es el caso del **formato WebP** ya se utiliza ampliamente en navegadores web, desarrollado por Google y que utilizando el codec de vídeo VP8 es capaz de reducir un 30% el espacio de una imagen JPEG.

La gran cantidad de dispositivos y situaciones en los que se pueden encontrar nuestras aplicaciones web siguen dando pie a la aparición de nuevos formatos de imágenes. Sobre todo enfocados a mejorar la calidad de las imágenes y mantener un ratio de compresión lo más alto posible.

En este escenario es dónde aparece el **formato AVIF**.

## Qué es el formato AVIF

Para entender qué es el **formato AVIF** necesitamos entender primero qué es **AV1**.

**AV1 - AOMedia Video 1**, es un **códec de código abierto** el cual pretende aumentar los niveles de compresión de la imágenes para que estas pesen lo menos posible, pero sin perder calidad. Permite comprimir tanto imágenes como vídeo.

**AVIF - AV1 Image Format**, son los formatos de imagen de AV1.

> La máxima de la web es que la imagen esté comprimida lo máximo posible, es decir, que pese poco, pero que la calidad de la imagen sea suficientemente buena.

**AVIF** está respaldado por la [**Alliance for Open Media**](http://aomedia.org/) que pretende tener un códec de código abierto que permita comprimir una imágen JPEG unas 10 veces más sin perder calidad de imagen. Ofreciendo una profundidad de color de 8 a 12 bits.

La primera versión del **formato AVIF** estuvo disponible en *febrero 2019*.

Además **AV1** está teniendo el respaldo y un uso por parte de empresas como [**Netflix** que lo está utilizando para mostrar las portadas de las películas](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4), **Google** que lo está soportando en su navagedor Chrome, Microsoft en Windows 10,...

## Calidad y peso del formato AVIF
La mejor forma de poder ver la calidad y peso del formato AVIF es en un ejemplo. Para ello podemos ver [las diferencias con una imagen de la galería de Kodak tal y como nos lo cuenta el blog técnico de Netflix](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4).

En el podemos observar la calidad de la **imagen original**.
![Imagen Original]({{site.url}}/images/front/avif/imagen-original.png)

Como sería una imagen **JPEG 444, que pesaría 14Kb.**
![Imagen JPEG]({{site.url}}/images/front/avif/imagen-jpeg.png)

Y la imagen **AVIF 444, que pesaría 4Kb.**
![Imagen AVIF]({{site.url}}/images/front/avif/imagen-avif.png)

Se puede ver perfectamente la calidad superior del formato AVIF, además de tener un mayor ratio de compresión. En este caso se llega a obtener **un factor de compresión de 282x**.

## Alternativas al formato AVIF
Una de las alternativas que existen en la actualidad al formato **AVIF** es el formato **HEIF** o **High Efficiency Image File Format** que está desarrollador por **MPEG**.

En este caso es un formato contenedor dónde va la imagen y metadatos, lo cual permite editarlo sin destruir datos. Además de contar con una profundidad de colo de 16bits.

Su handicap es que es un formato propietario, por lo que requiere el pago de royalties.

Es el formato utilizado por Apple en sus Live Photos.

## Soporte Navegadores
En la actualidad **solo hay soporte de AVIF en Chrome 85** y desde **Firefox 78 si activamos manualmente esta capacidad**.

Podemos estar al tanto de las [compatibilidades del formato AVIF mediante Can I Use](https://caniuse.com/avif).

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>

<p class="ciu_embed" data-feature="avif" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
</p>

## Utilizando en nuestras páginas web
Como el formato AVIF no está extendido y por lo tanto soportado por los diferentes navegadores, deberemos de utilizarlo con cuidado. Para ello ofreceremos alternativas en el caso de que el navegador no pueda cargar la imagen. Es por ello que utilizaremos el elemento `picture`.

~~~html
<picture>
    <source srcset="img/imagen.avif" type="image/avif">
    <source srcset="img/imagen.webp" type="image/webp">
    <img src="imag/imagen.jpg" >
</picture>
~~~

## Herramientas de Edición
También es interesante el uso de la herramienta [Squoosh](https://squoosh.app/
), la cual nos permite el convertir una imagen a formato AVIF, entre otros muchos. Y a validar las diferencias de calidad entre una imagen con diferentes formatos.

## En el futuro
Parece que el **formato AVIF** ha venido para quedarse. Los ratios de compresión versus la calidad ofrecida por **JPEG** y **WebP** es muy alto, a lo que hay que añadirle que sea un formato plénamente de código abierto.

Por lo que solo hay que esperar y tener paciencia a que los navegadores vayan dándo soporte a este formato para que su uso se extienda en la web.