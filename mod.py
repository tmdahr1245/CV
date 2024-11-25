old_string = "/resume-nextjs/_next/static"
new_string = "./_next/static"
file_path = "/workspace/cv/docs/index.html"

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

updated_content = content.replace(old_string, new_string)

with open(file_path, 'w', encoding='utf-8') as file:
    file.write(updated_content)
