from selenium.common.exceptions import TimeoutException
from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

from utilities.config_reader import config
from utilities.logger import get_logger


class BasePage:
    def __init__(self, driver: WebDriver) -> None:
        self.driver = driver
        self.wait = WebDriverWait(driver, config.default_timeout_ms / 1000)
        self.logger = get_logger(self.__class__.__name__)

    def _find_visible(self, locator: tuple[str, str]):
        try:
            return self.wait.until(EC.visibility_of_element_located(locator))
        except TimeoutException as exc:
            self.logger.exception("Element not visible for locator: %s", locator)
            raise exc

    def _find_clickable(self, locator: tuple[str, str]):
        try:
            return self.wait.until(EC.element_to_be_clickable(locator))
        except TimeoutException as exc:
            self.logger.exception("Element not clickable for locator: %s", locator)
            raise exc

    def enter_text(self, locator: tuple[str, str], value: str) -> None:
        element = self._find_visible(locator)
        element.clear()
        element.send_keys(value)

    def click(self, locator: tuple[str, str]) -> None:
        self._find_clickable(locator).click()

    def get_text(self, locator: tuple[str, str]) -> str:
        return self._find_visible(locator).text.strip()

    def is_visible(self, locator: tuple[str, str]) -> bool:
        try:
            return self._find_visible(locator).is_displayed()
        except TimeoutException:
            return False
