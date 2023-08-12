---
layout: home
title: Arquitecto IT
entries_layout: grid
posts_limit: 9
excerpt: "Análisis de tecnologías por Arquitectos IT"
search: false
image:
  path: /images/portada.png
---
En Arquitecto IT nos hemos juntado un grupo de Arquitectos IT que tienen ganas de hablar sobre nuevas tecnologías, de cómo estas nos pueden ayudar en el desarrollo de proyectos. Arquitectos IT que quieren compartir sus experiencias y conocimientos.

Buscamos la conversación, la crítica, el aprendizaje, el debate,… pero siempre desde el lado positivo, desde el lado de la colaboración, del compañerismo, del aporte de soluciones por parte de la gente. Buscamos que, de forma ordenada, la gente exprese sus visiones, de a conocer sus puntos de vista sobre las cosas que aquí se escriben.

<hr style="border: 1px solid;">

# Editorial
{% assign editorial = site.categories['editorial'][0] %}

<article class="editorial">
  <header class="editorial-header">
    <a href="{{ site.url }}{{ editorial.url }}">
      <img src="{{ site.url }}{{ editorial.image.path }}" class="img-fluid">        
      <h2>{{ editorial.title }} </h2>
    </a>
  </header>
  <div class="editorial-author"><i>{{ site.data.authors[editorial.author].name }}</i></div>
  <div class="editorial-summary">  
    {{ editorial.content | strip_html | truncatewords: 50 }} <a href="{{ site.url }}{{ editorial.url }}">Seguir leyendo</a>.  
  </div>
</article>

<hr style="border: 1px solid;">

# Últimos Artículos
