import os

base_path = "public"
folder_to_category = {
    "Bedroom ": "Luxury Apartments",
    "Dining Table": "Private Villas",
    "Entrance": "Private Villas",
    "Kitchen": "Chef's Kitchens",
    "Living Room": "Luxury Apartments",
    "Mandir": "Traditional Spaces",
    "Study table": "Luxury Apartments"
}

projects = []
id_counter = 1000

# Function to determine aspectRatio
def get_aspect_ratio(folder):
    if folder in ["Bedroom ", "Living Room", "Entrance", "Study table"]:
        return "portrait"
    return "square"

for folder in os.listdir(base_path):
    folder_path = os.path.join(base_path, folder)
    if os.path.isdir(folder_path) and folder in folder_to_category:
        category = folder_to_category[folder]
        aspect = get_aspect_ratio(folder)
        for file in os.listdir(folder_path):
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                src = f"/{folder}/{file}"
                projects.append({
                    "id": id_counter,
                    "src": src,
                    "category": category,
                    "aspectRatio": aspect
                })
                id_counter += 1

import json
print(json.dumps(projects, indent=2))
