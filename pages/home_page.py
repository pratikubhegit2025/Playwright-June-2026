from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pages.base_page import BasePage


class HomePage(BasePage):
    LOGGED_IN_USER = (By.CSS_SELECTOR, "li.nav-item.identifier")
    REGISTER_PATIENT_TILE = (
        By.ID,
        "referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension",
    )
    PAGE_IDENTIFIER = (By.CSS_SELECTOR, "body")

    def verify_home_page_loaded(self) -> None:
        self.wait.until(EC.url_contains("/referenceapplication/home.page"))
        self._find_clickable(self.REGISTER_PATIENT_TILE)
        self.logger.info("Home page loaded successfully")

    def open_patient_registration(self) -> None:
        self.logger.info("Opening patient registration page")
        self.click(self.REGISTER_PATIENT_TILE)
