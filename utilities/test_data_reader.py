import json
from pathlib import Path
from typing import Any


def read_json(file_name: str) -> dict[str, Any]:
    file_path = Path.cwd() / "testdata" / file_name
    with file_path.open("r", encoding="utf-8") as json_file:
        return json.load(json_file)
