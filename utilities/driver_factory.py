from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.edge.options import Options as EdgeOptions
from selenium.webdriver.edge.service import Service as EdgeService
from selenium.webdriver.remote.webdriver import WebDriver

from utilities.config_reader import config
from utilities.logger import get_logger

logger = get_logger(__name__)


def get_driver() -> WebDriver:
    logger.info("Launching %s browser. Headless=%s", config.browser, config.headless)

    if config.browser == "edge":
        options = EdgeOptions()
        if config.headless:
            options.add_argument("--headless=new")
        options.add_argument("--start-maximized")
        options.add_argument("--disable-notifications")
        driver = webdriver.Edge(service=EdgeService(), options=options)
    else:
        options = ChromeOptions()
        if config.headless:
            options.add_argument("--headless=new")
        options.add_argument("--start-maximized")
        options.add_argument("--disable-notifications")
        driver = webdriver.Chrome(service=ChromeService(), options=options)

    driver.set_page_load_timeout(config.default_timeout_ms / 1000)
    if config.headless:
        driver.set_window_size(1920, 1080)

    logger.info("Browser launched successfully")
    return driver
