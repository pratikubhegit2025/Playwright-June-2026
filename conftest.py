from __future__ import annotations

import pytest

from pages.home_page import HomePage
from pages.login_page import LoginPage
from pages.patient_registration_page import PatientRegistrationPage
from utilities.config_reader import config
from utilities.driver_factory import get_driver
from utilities.logger import get_logger
from utilities.screenshot import capture_screenshot

logger = get_logger(__name__)


@pytest.fixture()
def driver(request):
    browser = get_driver()
    browser.maximize_window()
    request.node.driver = browser
    yield browser
    logger.info("Closing browser")
    browser.quit()


@pytest.fixture()
def login_page(driver):
    page = LoginPage(driver)
    page.load()
    return page


@pytest.fixture()
def logged_in_home_page(login_page):
    login_page.login_as(config.username, config.password, "Registration Desk")
    home_page = HomePage(login_page.driver)
    home_page.verify_home_page_loaded()
    return home_page


@pytest.fixture()
def patient_registration_page(logged_in_home_page):
    logged_in_home_page.open_patient_registration()
    registration_page = PatientRegistrationPage(logged_in_home_page.driver)
    registration_page.verify_page_loaded()
    return registration_page


@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item, call):
    outcome = yield
    report = outcome.get_result()
    if report.when != "call" or report.passed:
        return

    driver = getattr(item, "driver", None)
    if driver is None:
        return

    screenshot_path = capture_screenshot(driver, item.name)
    logger.error("Failure screenshot captured: %s", screenshot_path)
