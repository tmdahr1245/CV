#!/bin/bash

python3 /workspace/cv/modLastUpdate.py
mv payload payload_en
mv payload_kr payload
mv /workspace/cv/docs/index.html /workspace/cv/docs/index_en.html
npm run export
python3 /workspace/cv/modPath.py
python3 /workspace/cv/appendGATag.py
cp /workspace/cv/*.pdf /workspace/cv/docs
mv payload payload_kr
mv payload_en payload
mv /workspace/cv/docs/index.html /workspace/cv/docs/index_kr.html
mv /workspace/cv/docs/index_en.html /workspace/cv/docs/index.html
git add .
git commit -m "update index_kr.html"
git push
