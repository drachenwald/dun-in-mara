---
title: Drachenwald Spring Crown
subtitle: 5-7 April 2024
sidebar: sidebar-crown2024
---

The Shire of Dun in Mara is delighted to announce that Drachenwald’s Spring Crown 2024
(AS 58) will take place on 5-7 April at Crawfordsburn, near Belfast, Northern Ireland.

<div class="text-center m-4">
  <a class="btn btn-primary shadow" href="https://goo.gl/maps/8uu821gQU5bRg1uf9"><i class="fas fa-map-marker-alt me-1"></i> Find the site on Google Maps</a>
</div>

<h2 class="mt-4">Pricing</h2>

Tickets will go on sale in early 2024. Pricing includes all meals (Friday night-Sunday morning) and,
for the weekend bunk rate, bedlinen.

**This pricing is for members only.**

|Booking                     |Cost            |
|----------------------------|----------------|
|Adult, weekend, bunk bed    |             €85|
|Adult, camping pod          |             €50|
|Adult, camping in own tent  |             €35|
|Day trip                    |             €30|
|Child (under 18)            |50% discount    |
|Concession (unwaged/student)|20% discount    |
|----------------------------|----------------|

<div class="text-center m-4">
  <a class="btn btn-warning shadow m-2 w-50" href="https://fienta.com/spring-crown-2024"><i class="fas fa-ticket-alt me-1 m"></i> Book here</a><br />
  Use code <b>CONCESSION</b> for unwaged/student discount
</div>

<div class="text-center m-4">
  Contact <a href="mailto:springcrown@duninmara.org">springcrown@duninmara.org</a> with any queries
</div>


**Please note** these differences with previous events:

- There is no family cap, but we have a discounted rate for children
- There is now a concession rate for unwaged/students and others who need it
  (we will not seek proof of this.)
- We ask all attendees to be a member of SCA UK CIC, SCA Inc. or any affiliate

<div class="text-center m-4">
<a href="{% post_url 2023-11-30-crown-pricing %}" class="btn btn-primary text-center m-1 shadow"><i class="fas fa-address-card me-1"></i> Why do I have to be a member?</a>
<a href="{% post_url 2023-11-30-crown-accom %}" class="btn btn-primary text-center m-1 shadow"><i class="fas fa-home me-1"></i> What are the accommodation options?</a>
</div>


<h2 class="mt-4">Event team</h2>

**Event Stewards:** Sela de la Rosa and Katie of Dun in Mara [springcrown@duninmara.org](mailto:springcrown@duninmara.org)  
**Head Cook:** Máistir Aodh Ó Siadhail  
**Site Liaison:** Viscountess Caitriona of the Ravens  
**Marshal in Charge:** Aodhan Dha Cheist  
**Hall Steward:** Nadja of Dun in Mara  
**Herald in Charge:** Kytte of the Lake


{% assign posts = site.posts | where_exp:"item", "item.categories contains 'crown2024'" %}

<h2 class="mt-4">Latest news</h2>

{% for post in posts limit:3 %}

<div class="mt-3">
  <h3>{{ post.title }}</h3>
  <h6 class="text-muted">{{ post.date | date_to_string }}</h6>
  <p>
    {{ post.excerpt }}
    <a href="{{ post.url }}" class="btn btn-outline-primary shadow">Read more...</a>
  </p>
</div>

{% endfor %}