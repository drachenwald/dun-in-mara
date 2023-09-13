---
title: Drachenwald Spring Crown
subtitle: Latest news
sidebar: sidebar-crown2024
---

{% assign posts = site.posts | where_exp:"item", "item.categories contains 'crown2024'" %}

<h2 class="mt-4">Latest news</h2>

 {% for post in posts %}

  <div class="mt-3">
    <h3>{{ post.title }}</h3>
    <h6 class="text-muted">{{ post.date | date_to_string }}</h6>
    <p>
      {{ post.excerpt }}
      <a href="{{ post.url }}" class="btn btn-outline-primary">Read more...</a>
    </p>
  </div>

  {% endfor %}


  <div class="row text-center">
    <div class="col">
      <a role="button" class="btn btn-primary" href="/events/2024/crown/">More about Spring Crown 2024...</a>
    </div>
  </div>


