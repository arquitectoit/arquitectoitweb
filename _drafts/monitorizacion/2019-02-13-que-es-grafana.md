---
layout: post
title: Listado Herramientas Monitorización
excerpt: "bla bla"
categories: monitorizacion
tags: [sentry]
image:
  feature: covers/api.png
comments: true
share: true
author: victor_cuervo
---


$ helm install \
    --namespace=monitoring \
    --name=grafana \
    --version=1.12.0 \
    --set=adminUser=admin \
    --set=adminPassword=admin \
    --set=service.type=NodePort \
    stable/grafana
