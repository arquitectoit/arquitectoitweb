---
layout: page
title: Elasticsearch
excerpt: "Artículos sobre Elasticsearch, una base de datos NoSQL orientada a documentos JSON y a la búsqueda de textos"
image:
  feature: covers/search.png
  credit: João Silas
  creditlink: https://unsplash.com/photos/UGQoo2nznz8
---

{% assign categoria = site.data.categories | where:"title","elasticsearch" %}
{{ categoria[0].description }}

<ul class="post-list">
{% for post in site.categories.elasticsearch %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{% include date-es.html date=post.date %}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
