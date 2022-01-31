import itertools
from sys import stdout

from .lib.ansi_utils import *
from .lib.color_utils import *
from .lib.yaml_utils import *

palette = YAML_read("./data/palette.yaml")


def get_group_name(item: dict) -> str:
    return item["name"].split("/")[0]


for group_name, items in itertools.groupby(palette, get_group_name):
    stdout.write("\n")
    stdout.write("  " + ANSI_bold + f"{group_name:>8}" + ANSI_reset + "  ")
    for item in items:
        sRGB = HEX_to_sRGB(item["color"])
        R, G, B = [int(value * 255.0) for value in sRGB]

        stdout.write(ANSI_background(R, G, B) + "    " + ANSI_reset)
    stdout.write("\n")
