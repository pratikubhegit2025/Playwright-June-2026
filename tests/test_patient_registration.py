import pytest
from datetime import datetime

from utilities.logger import get_logger
from utilities.test_data_reader import read_json

logger = get_logger(__name__)
patient_test_data = read_json("patient_data.json")


@pytest.mark.parametrize("patient", patient_test_data["successful_registration"])
def test_successful_patient_registration(patient_registration_page, patient):
    unique_patient = patient.copy()
    stamp = datetime.now().strftime("%H%M%S")
    unique_patient["firstName"] = f'{patient["firstName"]}{stamp}'
    unique_patient["lastName"] = f'{patient["lastName"]}{stamp}'
    logger.info("Executing patient registration for: %s %s", unique_patient["firstName"], unique_patient["lastName"])

    patient_registration_page.register_patient(unique_patient)
    registered_patient_text = patient_registration_page.get_registered_patient_text()

    assert unique_patient["firstName"] in registered_patient_text
    assert unique_patient["lastName"] in registered_patient_text


@pytest.mark.parametrize("patient", patient_test_data["validation"])
def test_mandatory_name_field_validation(patient_registration_page, patient):
    logger.info("Executing mandatory field validation for patient registration")

    patient_registration_page.submit_without_mandatory_details()
    validation_messages = patient_registration_page.get_validation_messages()

    assert any(patient["expectedValidation"] in message for message in validation_messages)
