#!/bin/bash

python3 ~/cv/modLastUpdate.py
rm -rf ~/cv/backup
mkdir ~/cv/backup
mv ~/cv/docs/KR ~/cv/backup
npm run export
python3 ~/cv/modPath.py
python3 ~/cv/appendGATag.py
cp ~/cv/*.pdf ~/cv/docs
cp ~/cv/_config.yml ~/cv/docs
mv ~/cv/backup/KR ~/cv/docs

git add ~/cv/docs/
git add ~/cv/payload
git commit -m "update index.html"
git push
