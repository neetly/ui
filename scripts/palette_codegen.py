import itertools
import os

from .lib.yaml_utils import *

palette = YAML_read("./data/palette.yaml")


def get_id(name: str) -> str:
    return name.replace(" ", "-").replace("/", "--").lower()


def get_group_name(item: dict) -> str:
    return item["name"].split("/")[0]


os.makedirs("./packages/palette/src/generated", exist_ok=True)


with open("./packages/palette/src/generated/index.ts", "w") as file:
    file.write("// This file is auto-generated.\n\n")
    file.write("const palette = {\n")
    for index, (
        group_name,
        items,
    ) in enumerate(itertools.groupby(palette, get_group_name)):
        if index != 0:
            file.write("\n")
        file.write(f"  // {group_name}\n")
        for item in items:
            file.write(f"  \"{get_id(item['name'])}\": \"{item['color']}\",\n")
    file.write("};\n\n")
    file.write("export { palette };\n")


with open("./packages/palette/src/generated/index.css", "w") as file:
    file.write("/* This file is auto-generated. */\n\n")
    file.write(":root {\n")
    for index, (
        group_name,
        items,
    ) in enumerate(itertools.groupby(palette, get_group_name)):
        if index != 0:
            file.write("\n")
        file.write(f"  /* {group_name} */\n")
        for item in items:
            file.write(f"  --palette--{get_id(item['name'])}: {item['color']};\n")
    file.write("}\n")


with open("./packages/palette/src/generated/index.scss", "w") as file:
    file.write("// This file is auto-generated.\n\n")
    for index, (
        group_name,
        items,
    ) in enumerate(itertools.groupby(palette, get_group_name)):
        if index != 0:
            file.write("\n")
        file.write(f"// {group_name}\n")
        for item in items:
            file.write(f"${get_id(item['name'])}: {item['color']};\n")
