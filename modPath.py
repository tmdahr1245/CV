# modify path

# old_string = "/resume-nextjs/_next/static"
# new_string = "./_next/static"
# file_path = "C:\\Users\\tmdahr1245\\Downloads\\CV\\docs\\index.html"
old_string = "/resume-nextjs/_next/static"
new_string = "./_next/static"
file_path = "./docs/index.html"

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

updated_content = content.replace(old_string, new_string)

with open(file_path, 'w', encoding='utf-8') as file:
    file.write(updated_content)