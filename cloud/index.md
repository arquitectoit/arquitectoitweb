---
layout: page
title: Cloud Computing
excerpt: "Temas sobre Cloud Computing"
image:
  feature: covers/cloudcomputing.png
search_omit: true
---

{% assign categoria = site.data.categories | where:"title","cloud" %}
{{ categoria[0].description }}

<ul class="post-list">
{% for post in site.categories.cloud %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{% include date-es.html date=post.date %}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
