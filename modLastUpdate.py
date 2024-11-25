import json
from datetime import datetime

# modify last update

json_path = "/workspace/cv/package.json"

with open(json_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

today_date = datetime.now().strftime('%Y-%m-%d')

if "lastestUpdatedAt" in data:
    data["lastestUpdatedAt"] = today_date

# 파일 저장
with open(json_path, 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)