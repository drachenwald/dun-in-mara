---
title: Contacts
---

{% for role in site.data.officetitles %}

  {% assign officer = site.data.regnum | where:"group", "Insulae Draconis-Dun in Mara" | where:"responsibility", role.slug | last %}

  {% if officer %}

  <img src="{{ role.emblem }}" width="96" height="96" align="right">

  <h3>{{ role.title }}</h3>

  <p><strong>{{ officer.scaname }}</strong>
  {% unless officer.mundanename == "" %}
   ({{ officer.mundanename }})
  {% endunless %}
  {% unless officer.pronouns == "" %}
   <span class="text-muted">{{ officer.pronouns }}</span>
  {% endunless %}<br>
  {% unless officer.email == "" %}
    <strong>Contact:</strong> {{ officer.email }}
  {% endunless %}
  </p>
  
  {% if role.report %}<p><a href="{{ role.report }}">How to report</a></p>{% endif %}
  
  {% if role.desc %}
  <p>
  {{ role.desc }}
  </p>
  {% endif %}

  <hr>

  {% endif %}

{% endfor %}

