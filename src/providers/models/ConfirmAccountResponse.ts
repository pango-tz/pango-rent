import * as models from './models';

export interface ConfirmAccountResponse {
  // There is no data coming back from a successful confirmation.
  // but we will set a boolean to return from the service in order to be declarative.
  accountConfirmed ?: boolean

  // Errors that may be returned from the API.
  error ?: models.Error
}
