import os
from dataclasses import dataclass
from pathlib import Path


def _load_dotenv_file() -> None:
    env_path = Path.cwd() / ".env"
    if not env_path.exists():
        return

    for raw_line in env_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue

        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        os.environ.setdefault(key, value)


def _to_bool(value: str | None, default: bool) -> bool:
    if value is None:
        return default
    return value.strip().lower() == "true"


def _to_int(value: str | None, default: int) -> int:
    try:
        return int(value) if value is not None else default
    except (TypeError, ValueError):
        return default


_load_dotenv_file()


@dataclass(frozen=True)
class AppConfig:
    openmrs_base_url: str = os.getenv(
        "OPENMRS_BASE_URL",
        "https://o2.openmrs.org/openmrs/login.htm",
    )
    app_base_url: str = os.getenv(
        "APP_BASE_URL",
        "https://o2.openmrs.org/openmrs/registrationapp/registerPatient.page?appId=referenceapplication.registrationapp.registerPatient",
    )
    username: str = os.getenv("OPENMRS_USERNAME", "admin")
    password: str = os.getenv("OPENMRS_PASSWORD", "Admin123")
    browser: str = os.getenv("BROWSER", "chrome").lower()
    headless: bool = _to_bool(os.getenv("HEADLESS"), True)
    default_timeout_ms: int = _to_int(os.getenv("DEFAULT_TIMEOUT_MS"), 30000)


config = AppConfig()
