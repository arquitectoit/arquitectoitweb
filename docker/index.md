---
layout: page
title: Docker
excerpt: "Los contenedores son paquetes ligeros, autónomos y ejecutables que incluyen lo necesario para ser ejecutados independientemente"
image:
  feature: covers/container.png
  credit: Guillaume Bolduc
  creditlink: https://unsplash.com/photos/uBe2mknURG4
search_omit: true
---

{% assign categoria = site.data.categories | where:"title","docker" %}
{{ categoria[0].description }}

<ul class="post-list">
{% for post in site.categories.docker %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{% include date-es.html date=post.date %}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
