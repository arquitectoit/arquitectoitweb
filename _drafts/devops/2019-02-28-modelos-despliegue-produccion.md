---
layout: post
title: Modelos Despliegue en Producción
excerpt: "aaa"
categories: devops
tags: [motor de búsqueda,lucene]
image:
  feature: covers/write.png
  credit: Wim Mulder
  creditlink: https://www.flickr.com/photos/wimmulder/
comments: true
share: true
author: victor_cuervo
---

El proceso de despliegue de una nueva versión en producción siempre ha sido una experiencia cual menos compleja, posiblemente haya quién nos diga que traumática, y ni mucho menos sencilla.

Este arduo proceso que es la puesta en producción de una aplicación...




* Recrear
* Incremental (Ramp Up)
* Blue/Green
* Canary
* Test A/B
* Shadow

## Recrear
Se termina la versión A y se despliegue la versión B

## Incremental (Ramp Up)
También conocida como "ramp up", "rolling-update",...
Se va desplegando la versión B poco a poco mientras convive con la versión A.

## Blue/Green
Se lanza la versión B a producción a la vez que está la aplicación B. En un determinado momento de tiempo se cambia el tráfico de la aplicación A a la aplicación B.

## Canary
Se despliega la aplicación B a un subconjunto pequeño de usuarios (early adopters) y cuando está lo suficientemente probada se despliega para el resto.

## Test A/B
Ante una determinada condición se despliega a la aplicación B a un subconjunto de usuarios. La nueva versión B desplegada suele tener una pequeña funcionalidad a probar.

## Shadow
