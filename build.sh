#!/bin/bash

python3 /workspace/cv/modLastUpdate.py
npm run export
python3 /workspace/cv/modPath.py
python3 /workspace/cv/appendGATag.py
cp /workspace/cv/*.pdf /workspace/cv/docs
cp /workspace/cv/_config.yml /workspace/cv/docs
git add .
git commit -m "update index.html"
git push
