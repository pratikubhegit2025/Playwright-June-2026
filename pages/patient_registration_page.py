from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select

from pages.base_page import BasePage


class PatientRegistrationPage(BasePage):
    PAGE_TITLE = (By.CSS_SELECTOR, "h2")
    FIRST_NAME_INPUT = (By.NAME, "givenName")
    MIDDLE_NAME_INPUT = (By.NAME, "middleName")
    LAST_NAME_INPUT = (By.NAME, "familyName")
    GENDER_SELECT = (By.ID, "gender-field")
    BIRTH_DAY_INPUT = (By.NAME, "birthdateDay")
    BIRTH_MONTH_SELECT = (By.NAME, "birthdateMonth")
    BIRTH_YEAR_INPUT = (By.NAME, "birthdateYear")
    AGE_YEARS_INPUT = (By.NAME, "birthdateYears")
    AGE_MONTHS_INPUT = (By.NAME, "birthdateMonths")
    ADDRESS_INPUT = (By.ID, "address1")
    ADDRESS2_INPUT = (By.ID, "address2")
    CITY_INPUT = (By.ID, "cityVillage")
    STATE_INPUT = (By.ID, "stateProvince")
    COUNTRY_INPUT = (By.ID, "country")
    POSTAL_CODE_INPUT = (By.ID, "postalCode")
    PHONE_NUMBER_INPUT = (By.NAME, "phoneNumber")
    NEXT_BUTTON = (By.ID, "next-button")
    SUBMIT_BUTTON = (By.CSS_SELECTOR, "#submit, #registration-submit")
    PATIENT_HEADER = (By.CSS_SELECTOR, "#content")
    FIELD_ERRORS = (By.CSS_SELECTOR, "span.field-error, label.error, div.error")

    def verify_page_loaded(self) -> None:
        self.wait.until(EC.url_contains("/registrationapp/registerPatient.page"))
        self._find_visible(self.FIRST_NAME_INPUT)
        self._find_visible(self.LAST_NAME_INPUT)
        self.logger.info("Patient registration page loaded successfully")

    def enter_first_name(self, first_name: str) -> None:
        self.logger.info("Entering first name: %s", first_name)
        self.enter_text(self.FIRST_NAME_INPUT, first_name)

    def enter_middle_name(self, middle_name: str) -> None:
        self.logger.info("Entering middle name: %s", middle_name)
        self.enter_text(self.MIDDLE_NAME_INPUT, middle_name)

    def enter_last_name(self, last_name: str) -> None:
        self.logger.info("Entering last name: %s", last_name)
        self.enter_text(self.LAST_NAME_INPUT, last_name)

    def select_gender(self, gender: str) -> None:
        self.logger.info("Selecting gender: %s", gender)
        value_map = {"male": "M", "female": "F", "other": "O", "m": "M", "f": "F", "o": "O"}
        Select(self._find_visible(self.GENDER_SELECT)).select_by_value(value_map.get(gender.lower(), gender))

    def select_birth_date(self, day: str, month: str, year: str) -> None:
        self.logger.info("Entering birth date: %s-%s-%s", day, month, year)
        self.enter_text(self.BIRTH_DAY_INPUT, day)
        Select(self._find_visible(self.BIRTH_MONTH_SELECT)).select_by_visible_text(month)
        self.enter_text(self.BIRTH_YEAR_INPUT, year)

    def enter_age(self, years: str, months: str = "0") -> None:
        self.logger.info("Entering estimated age: %s years and %s months", years, months)
        self.enter_text(self.AGE_YEARS_INPUT, years)
        self.enter_text(self.AGE_MONTHS_INPUT, months)

    def enter_address(self, address: str, city: str, state: str, country: str, postal_code: str) -> None:
        self.logger.info("Entering patient address details")
        self.enter_text(self.ADDRESS_INPUT, address)
        self.enter_text(self.CITY_INPUT, city)
        self.enter_text(self.STATE_INPUT, state)
        self.enter_text(self.COUNTRY_INPUT, country)
        self.enter_text(self.POSTAL_CODE_INPUT, postal_code)

    def enter_phone_number(self, phone_number: str) -> None:
        self.logger.info("Entering phone number: %s", phone_number)
        self.enter_text(self.PHONE_NUMBER_INPUT, phone_number)

    def click_next(self) -> None:
        self.click(self.NEXT_BUTTON)

    def click_submit(self) -> None:
        self.logger.info("Submitting patient registration")
        self.click(self.SUBMIT_BUTTON)

    def get_validation_messages(self) -> list[str]:
        self.wait.until(lambda driver: len(driver.find_elements(*self.FIELD_ERRORS)) > 0)
        messages = [element.text.strip() for element in self.driver.find_elements(*self.FIELD_ERRORS) if element.text.strip()]
        self.logger.info("Validation messages displayed: %s", messages)
        return messages

    def register_patient(self, patient_data: dict) -> None:
        self.enter_first_name(patient_data["firstName"])
        if patient_data.get("middleName"):
            self.enter_middle_name(patient_data["middleName"])
        self.enter_last_name(patient_data["lastName"])
        self.click_next()

        self.select_gender(patient_data["gender"])
        self.click_next()

        if patient_data.get("birthDay") and patient_data.get("birthMonth") and patient_data.get("birthYear"):
            self.select_birth_date(patient_data["birthDay"], patient_data["birthMonth"], patient_data["birthYear"])
        else:
            self.enter_age(patient_data.get("estimatedYears", "30"), patient_data.get("estimatedMonths", "0"))
        self.click_next()

        self.enter_address(
            patient_data.get("address", ""),
            patient_data.get("city", ""),
            patient_data.get("state", ""),
            patient_data.get("country", ""),
            patient_data.get("postalCode", ""),
        )
        if patient_data.get("address2"):
            self.enter_text(self.ADDRESS2_INPUT, patient_data["address2"])
        self.click_next()

        if patient_data.get("phone1"):
            self.enter_phone_number(patient_data["phone1"])
        self.click_next()
        self.click_next()
        self.click_submit()

    def submit_without_mandatory_details(self) -> None:
        self.logger.info("Submitting registration form without mandatory name details")
        self.click_next()

    def get_registered_patient_text(self) -> str:
        self.wait.until(EC.url_contains("/coreapps/clinicianfacing/patient.page"))
        text = self.get_text(self.PATIENT_HEADER)
        self.logger.info("Patient dashboard content captured after registration")
        return text
