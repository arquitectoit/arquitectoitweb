---
layout: post
title: Alternativas a Jenkins 
excerpt: "¿Existen Alternativas a Jenkins? O es la única herramienta con la que podemos realizar nuestros pipelines DevOps. En este artículo revisamos algunas de esas alternativas."
categories: devops
tags: [despliegue continuo,entrega continua,integración continua, jenkins, pipeline as code, pipeline]
image:
  feature: covers/jenkins-head-logo.jpg
comments: true
share: true
author: gustavo_puig
---

Ahora que hemos visto [¿qué es Jenkins?][QueEsJenkins], y como utilizarnos para crear el tan famoso "pipeline as code", nos podemos preguntar ¿hay otras maneras de hacerlo? La respuesta es sí. Veamos las alternativas a [Jenkins][QueEsJenkins].

## Principales Competidores

No creáis que [Jenkins][QueEsJenkins] es la única que sabe hacer este tipo de cosas. Existen en el mercado otras muy decentes, a la par que potentes, que le plantan cara:

### Azure DevOps
![Azure DevOps](/images/devops/azuredevops-logo.png)

***Microsoft*** optó por ofrecer junto a su plataforma **Azure DevOps** toda una suite de herramientas para la Integración Continua y los Despliegues. Aquí el ***Multibranch*** se llamaría ***Build*** el cual genera un artefacto que desplegará la parte de ***Release*** (el equivalente cercano del ***Freestyle***). La principal diferencia es que este está enfocado al ***Drag & Drop*** de un conjunto de cajitas configurables que ofrecen una funcionalidad concreta. Como lo del ***pipeline as code*** se ha puesto muy de moda, los chicos de Micro están permitiendo guardar las configuraciones en formato yml, que aunque no es tan flexible como Jenkins permite que los almacenemos y metamos en un control de versiones. Una cosa que es inresante remarcar es que, si no dispones de infra, Azure te presta la suya para que tires millas a un coste razonable.

### Bamboo
![Bamboo](/images/devops/bamboo-logo.png)

**Bamboo** sigue una técnica similar a la anterior. Puede ser una herramienta factible para aquellos que dispongan de otras de la suite de ***Atlassian***, por las integraciones de caja que que ofrece. No obstante, Atlassian está moviéndose muy rápido a su formato SaaS y todo apunta a que terminará desconinuando esto para seguir mejorando la nueva **Bitbucket Pipelines**. Aunque aún es un poco joven y no dispone de demasiados plugins, todo apunta a que se covertira en una opción que ocupará buena tajada en el mercado.

### Travis CI
![Travis CI](/images/devops/travis-ci-logo.jpg)

**Travis CI** es otra opción más que interesante. Está a la cabeza de las soluciones SaaS y es largamente conocida por su amplia cartera de tecnologías soportadas. Una de las características que la hacen más potente es la ***matriz de test*** que permite ejecutarlos sobre nuestro software con diferentes configuraciones de versiones de sus paquetes, dependencias, etc. Y además soporta [Docker][Docker] por lo que no tendrás problema para ejecutarlos en las mismas condiciones que tus entornos (y tienen MACs, una máquina complicadísima de simular o integrar en casa). Te interesará saber que hay planes gratuitos para proyectos OpenSource!!.

## Conclusiones

En definitiva, **[DevOps][DevOps]** como paradigma, cada vez dispone de más adeptos, y con ellos, la cantidad de herramientas de todos los sabores está creciendo en los últimos años. Si bien, ***[Jenkins][QueEsJenkins]*** está a la cabeza y sigue apretando fuerte gracias a los amigos de **Cloudbees**, desarrolladores principales de su fuente (porque ***[Jenkins][QueEsJenkins]*** es OpenSource). Ellos, además de comercializar una versión con soporte, ofrecen otra suerte de herramientas muy útiles para otros segmentos de ***[DevOps][DevOps]*** un tanto más avanzados que el ya tradicional ***CI & CD***.
Os animáis a hacer algún pipeline? Pues tenemos en el horno un post que mete las manos en harina y os acompaña a tirar uno sencillito pero muy didáctico.

Espero que os haya gustado las alternativas a [Jenkins][QueEsJenkins], ¿cuál es vuestra preferida?

[DevOps]: {{site.url}}/devops/
[Java]:  {{site.url}}/java/
[QueEsJenkins]: {{site.url}}/devops/que-es-jenkins/
[Docker]: {{site.url}}/docker/que-es-docker/