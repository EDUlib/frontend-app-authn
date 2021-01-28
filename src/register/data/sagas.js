import { call, put, takeEvery } from 'redux-saga/effects';

import { logError } from '@edx/frontend-platform/logging';

// Actions
import {
  REGISTER_NEW_USER,
  registerNewUserBegin,
  registerNewUserFailure,
  registerNewUserSuccess,
  REGISTER_FORM_VALIDATIONS,
  fetchRealtimeValidationsBegin,
  fetchRealtimeValidationsSuccess,
  fetchRealtimeValidationsFailure,
  REGISTER_FORM,
  fetchRegistrationFormBegin,
  fetchRegistrationFormSuccess,
  fetchRegistrationFormFailure,
} from './actions';

// Services
import {
  getFieldsValidations,
  getRegistrationForm,
  registerRequest,
} from './service';

export function* handleNewUserRegistration(action) {
  try {
    yield put(registerNewUserBegin());

    const { redirectUrl, success } = yield call(registerRequest, action.payload.registrationInfo);

    yield put(registerNewUserSuccess(
      redirectUrl,
      success,
    ));
  } catch (e) {
    const statusCodes = [400, 409, 403];
    if (e.response && statusCodes.includes(e.response.status)) {
      yield put(registerNewUserFailure(e.response.data));
    }
    logError(e);
  }
}

export function* fetchRegistrationForm() {
  try {
    yield put(fetchRegistrationFormBegin());
    const { registrationForm } = yield call(getRegistrationForm);

    yield put(fetchRegistrationFormSuccess(
      registrationForm,
    ));
  } catch (e) {
    yield put(fetchRegistrationFormFailure());
    logError(e);
  }
}

export function* fetchRealtimeValidations(action) {
  try {
    yield put(fetchRealtimeValidationsBegin());
    const { fieldValidations } = yield call(getFieldsValidations, action.payload.formPayload);

    yield put(fetchRealtimeValidationsSuccess(
      fieldValidations,
    ));
  } catch (e) {
    const statusCodes = [403];
    if (e.response && statusCodes.includes(e.response.status)) {
      yield put(fetchRealtimeValidationsFailure(e.response.data, e.response.status));
    }
    logError(e);
  }
}

export default function* saga() {
  yield takeEvery(REGISTER_NEW_USER.BASE, handleNewUserRegistration);
  yield takeEvery(REGISTER_FORM.BASE, fetchRegistrationForm);
  yield takeEvery(REGISTER_FORM_VALIDATIONS.BASE, fetchRealtimeValidations);
}