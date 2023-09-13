---
title: Drachenwald Spring Crown
subtitle: 5-7 April 2024
sidebar: sidebar-crown2024
---

The Shire of Dun in Mara is delighted to announce that Drachenwald’s Spring Crown 2024
(AS 58) will take place on 5-7 April at Crawfordsburn, near Belfast, Northern Ireland.

<a class="btn btn-primary" href="https://goo.gl/maps/8uu821gQU5bRg1uf9"><i class="fas fa-map-marker-alt"></i> Find the site on Google Maps</a>

More information to come very soon.

<h2 class="mt-4">Event team</h2>

**Event Stewards:** Sela de la Rosa and Katie of Dun in Mara  
**Head Cook:** Máistir Aodh Ó Siadhail  
**Site Liaison:** Viscountess Caitriona of the Ravens  
**Marshal in Charge:** Aodhan Dha Cheist  
**Hall Steward:** Nadja of Dun in Mara


{% assign posts = site.posts | where_exp:"item", "item.categories contains 'crown2024'" %}

<h2 class="mt-4">Latest news</h2>

 {% for post in posts limit:3 %}

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
      <a role="button" class="btn btn-primary" href="news/">More about Spring Crown 2024...</a>
    </div>
  </div>


