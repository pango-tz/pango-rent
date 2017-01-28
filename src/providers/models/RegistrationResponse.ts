export interface RegistrationResponse {
  title?: string;
  status?: number;
  detail?: string;
  timeStamp?: number;
  developerMessage?: string;
  errors?: Array<string>;
}
