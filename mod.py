import json
from datetime import datetime

# modify path

old_string = "/resume-nextjs/_next/static"
new_string = "./_next/static"
file_path = "/workspace/cv/docs/index.html"

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

updated_content = content.replace(old_string, new_string)

with open(file_path, 'w', encoding='utf-8') as file:
    file.write(updated_content)

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