import * as models from './models';

export interface RegistrationResponse {
  user?: models.UserResource
  error?: models.Error
}
