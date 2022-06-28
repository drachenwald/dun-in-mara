---
title: Contacts
---

{% for role in site.data.officetitles %}

  {% assign officers = site.data.regnum | where:"group", "Insulae Draconis-Dun in Mara" | where:"office", role.slug | sort: 'responsibility' %}

  {% assign numofficers = officers|size %}

  {% if numofficers > 0 %}
    
  <img src="{{ role.emblem }}" width="96" height="96" align="right">

  <h3>{{ role.title }}</h3>

  {% for officer in officers %}

  {% unless officer.responsibility == " " %}
  <h6>{{officer.responsibility}}</h6>
  {% endunless %}
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

  {% endfor %}

  {% if role.report %}<p><a href="{{ role.report }}">How to report</a></p>{% endif %}
  
  {% if role.desc %}
  <p>
  {{ role.desc }}
  </p>
  {% endif %}

  <hr />

  {% endif %}

{% endfor %}

