import pytest

from pages.home_page import HomePage
from utilities.config_reader import config
from utilities.logger import get_logger
from utilities.test_data_reader import read_json

logger = get_logger(__name__)
login_test_data = read_json("login_data.json")


def test_valid_login(login_page):
    valid_user = login_test_data["valid_login"]
    logger.info("Executing valid login test")

    login_page.login_as(valid_user["username"], valid_user["password"], valid_user["location"])

    home_page = HomePage(login_page.driver)
    home_page.verify_home_page_loaded()
    assert "/referenceapplication/home.page" in login_page.driver.current_url


@pytest.mark.parametrize("test_case", login_test_data["invalid_login"])
def test_invalid_login(login_page, test_case):
    logger.info("Executing invalid login test: %s", test_case["testCase"])

    login_page.enter_username(test_case["username"])
    login_page.enter_password(test_case["password"])
    login_page.select_location(test_case["location"])
    login_page.click_login()

    assert login_page.get_error_message() == test_case["expectedError"]


@pytest.mark.parametrize("test_case", login_test_data["validation"])
def test_login_mandatory_field_validation(login_page, test_case):
    logger.info("Executing mandatory validation test: %s", test_case["testCase"])

    login_page.enter_username(test_case["username"])
    login_page.enter_password(test_case["password"])
    login_page.select_location(test_case["location"])
    login_page.click_login()

    assert login_page.get_error_message() == test_case["expectedError"]
