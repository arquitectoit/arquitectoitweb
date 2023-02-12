---
layout: page
title: XML
excerpt: "XML o eXtended Markup Language es un lenguaje de etiquetado o marcado de información de propósito general. Es decir, mediante sus elementos, atributos y relaciones podemos definir y etiquetar cualquier tipo de información."
image:
  feature: covers/etiquetas.png
  credit: Louie Martinez
  creditlink: https://unsplash.com/es/@thetalkinglens
search_omit: true
---

{% assign categoria = site.data.categories | where:"title","xml" %}
{{ categoria[0].description }}

<ul class="post-list">
{% for post in site.categories.xml %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{% include date-es.html date=post.date %}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
