from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pages.base_page import BasePage
from utilities.config_reader import config


class LoginPage(BasePage):
    USERNAME_INPUT = (By.NAME, "username")
    PASSWORD_INPUT = (By.NAME, "password")
    LOGIN_BUTTON = (By.ID, "loginButton")
    ERROR_MESSAGE = (By.ID, "error-message")
    LOCATION_OPTION = (By.CSS_SELECTOR, "#sessionLocation li")

    def load(self) -> None:
        self.logger.info("Opening OpenMRS login page")
        self.driver.get(config.openmrs_base_url)
        self.verify_login_page_loaded()

    def verify_login_page_loaded(self) -> None:
        self._find_visible(self.USERNAME_INPUT)
        self._find_visible(self.PASSWORD_INPUT)
        self._find_clickable(self.LOGIN_BUTTON)
        self.logger.info("Login page loaded successfully")

    def enter_username(self, username: str) -> None:
        self.logger.info("Entering username")
        self.enter_text(self.USERNAME_INPUT, username)

    def enter_password(self, password: str) -> None:
        self.logger.info("Entering password")
        self.enter_text(self.PASSWORD_INPUT, password)

    def select_location(self, location: str) -> None:
        self.logger.info("Selecting location: %s", location)
        locator = (By.CSS_SELECTOR, f"#sessionLocation [id='{location}']")
        self.click(locator)

    def click_login(self) -> None:
        self.logger.info("Clicking login button")
        self.click(self.LOGIN_BUTTON)

    def login_as(self, username: str, password: str, location: str) -> None:
        self.enter_username(username)
        self.enter_password(password)
        self.select_location(location)
        self.click_login()

    def get_error_message(self) -> str:
        self.wait.until(EC.visibility_of_element_located(self.ERROR_MESSAGE))
        message = self.get_text(self.ERROR_MESSAGE)
        self.logger.info("Login error displayed: %s", message)
        return message
