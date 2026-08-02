from datetime import datetime
from pathlib import Path

from selenium.webdriver.remote.webdriver import WebDriver


def capture_screenshot(driver: WebDriver, test_name: str) -> Path:
    screenshot_dir = Path.cwd() / "reports" / "screenshots"
    screenshot_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_path = screenshot_dir / f"{test_name}_{timestamp}.png"
    driver.save_screenshot(str(file_path))
    return file_path
