import itertools

import numpy as np
from ruamel.yaml.scalarstring import DoubleQuotedScalarString

from .lib.hct import *
from .lib.yaml_utils import *

schema = YAML_read("./data/palette/schema.yaml")


palette = []
for items in itertools.product(*schema):
    names = []
    hue, chroma, tone = 0.0, 0.0, 0.0

    for item in items:
        if "name" in item:
            names.append(str(item["name"]))
        if "seed" in item:
            hue, chroma, tone = HEX_to_HCT(item["seed"])
        if "hue" in item:
            hue = float(item["hue"])
        if "chroma" in item:
            chroma = float(item["chroma"])
        if "tone" in item:
            tone = float(item["tone"])

    name = "/".join(names)
    HEX = HCT_to_HEX(np.array([hue, chroma, tone]))

    palette.append({"name": name, "color": DoubleQuotedScalarString(HEX)})


YAML_write("./data/palette/palette.yaml", palette)
