#!/bin/bash

curl -o _data/regnum.json https://scripts.drachenwald.sca.org/json/regnum-officers-box.json
bundle install --path vendor
bundle exec jekyll build -d public
