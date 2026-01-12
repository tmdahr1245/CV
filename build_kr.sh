#!/bin/bash

python3 ~/cv/modLastUpdate.py
mv payload payload_en
mv payload_kr payload

rm -rf ~/cv/backup
mkdir ~/cv/backup
mv ~/cv/docs/* ~/cv/backup

npm run export
python3 ~/cv/modPath_kr.py
python3 ~/cv/appendGATag.py
cp ~/cv/*.pdf ~/cv/docs
mv payload payload_kr
mv payload_en payload

mkdir ~/cv/docs/KR
mv ~/cv/docs/*.html ~/cv/docs/KR
mv ~/cv/docs/*.pdf ~/cv/docs/KR
mv ~/cv/docs/_next ~/cv/docs/KR
mv ~/cv/backup/* ~/cv/docs
git add ~/cv/docs/KR
git add ~/cv/payload_kr
git commit -m "update index.html kr"
git push
