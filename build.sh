#!/bin/bash

npm run export
python3 /workspace/cv/mod.py
git add .
git commit -m "update index.html"
git push
