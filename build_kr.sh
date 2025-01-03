#!/bin/bash

python3 /workspace/cv/modLastUpdate.py
mv payload payload_en
mv payload_kr payload

rm -rf /workspace/cv/backup
mkdir /workspace/cv/backup
mv /workspace/cv/docs/* /workspace/cv/backup

npm run export
python3 /workspace/cv/modPath.py
python3 /workspace/cv/appendGATag.py
cp /workspace/cv/*.pdf /workspace/cv/docs
mv payload payload_kr
mv payload_en payload

mkdir /workspace/cv/docs/KR
mv /workspace/cv/docs/*.html /workspace/cv/docs/KR
mv /workspace/cv/docs/*.pdf /workspace/cv/docs/KR
mv /workspace/cv/docs/_next /workspace/cv/docs/KR
mv /workspace/cv/backup/* /workspace/cv/docs
git add /workspace/cv/docs/KR
git add /workspace/cv/payload_kr
git commit -m "update index.html kr"
git push
