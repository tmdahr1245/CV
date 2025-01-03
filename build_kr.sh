#!/bin/bash

python3 /workspace/cv/modLastUpdate.py
mv payload payload_en
mv payload_kr payload
#mv /workspace/cv/docs/index.html /workspace/cv/docs/index_en.html
rm -rf /workspace/cv/backup
mv /workspace/cv/docs /workspace/cv/backup
# index.html 뿐만 아니라 모든 내용 백업
npm run export
python3 /workspace/cv/modPath.py
python3 /workspace/cv/appendGATag.py
cp /workspace/cv/*.pdf /workspace/cv/docs
mv payload payload_kr
mv payload_en payload
# mv /workspace/cv/docs/index.html /workspace/cv/docs/index_kr.html
# mv /workspace/cv/docs/index_en.html /workspace/cv/docs/index.html
mkdir /workspace/cv/docs/KR
mv /workspace/cv/docs/*.html /workspace/cv/docs/KR
mv /workspace/cv/docs/*.pdf /workspace/cv/docs/KR
mv /workspace/cv/docs/_next /workspace/cv/docs/KR
mv /workspace/cv/backup/* /workspace/cv/docs
git add /workspace/cv/docs/KR
git add /workspace/cv/payload_kr
git commit -m "update index.html kr"
git push
