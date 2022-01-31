from typing import Any

from ruamel import yaml

_YAML = yaml.YAML()
_YAML.default_flow_style = False


def YAML_read(path: str) -> Any:
    with open(path, "r") as file:
        return _YAML.load(file)


def YAML_write(path: str, data: Any) -> None:
    with open(path, "w") as file:
        _YAML.dump(data, file)
