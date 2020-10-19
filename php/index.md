---
layout: page
title: PHP
excerpt: "PHP es un lenguaje del lado del servidor que nos permite desarrollar aplicaciones y servicios web."
image:
  feature: covers/elefantes.jpg
  credit: Tobias Adam
  creditlink: https://unsplash.com/@tobiasadam
search_omit: true
---

{% assign categoria = site.data.categories | where:"title","php" %}
{{ categoria[0].description }}

<ul class="post-list">
{% for post in site.categories.php %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{% include date-es.html date=post.date %}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
