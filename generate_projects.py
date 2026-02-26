import os

base_path = "public"
dirs = [
    ("Bedroom ", "Luxury Apartments"),
    ("Dining Table", "Private Villas"),
    ("Entrance", "Private Villas"), # Mixed but Villas fits grand foyers
    ("Kitchen", "Chef's Kitchens"),
    ("Living Room", "Luxury Apartments"),
    ("Mandir", "Traditional Spaces"),
    ("Study table", "Luxury Apartments")
]

projects = []
id_counter = 101

for dir_name, category in dirs:
    dir_path = os.path.join(base_path, dir_name)
    if not os.path.exists(dir_path):
        continue
    
    files = [f for f in os.listdir(dir_path) if f.endswith(('.jpeg', '.jpg', '.png'))]
    for filename in files:
        # Determine aspect ratio based on category or random for variety
        # Generally living/bedroom are portrait, kitchen/mandir are square
        aspect = "portrait" if dir_name in ["Living Room", "Bedroom ", "Entrance", "Study table"] else "square"
        
        # Simple title generation
        title = filename.split('.')[0].replace('WhatsApp Image 2026-02-17 at 10.05.', 'Residentia ').replace('(', '').replace(')', '').strip()
        if len(title) > 20: title = f"{category} Detail"
        
        src = f"/{dir_name}/{filename}"
        projects.append({
            "id": id_counter,
            "type": "image",
            "src": src,
            "title": title,
            "category": category,
            "location": "Mumbai/Thane",
            "area": "Bespoke",
            "aspectRatio": aspect
        })
        id_counter += 1

import json
print(json.dumps(projects, indent=4))
