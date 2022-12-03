export const EMAIL_VALIDATION_ERROR = "Please type valid E-mail.";
export const PASSWORD_VALIDATION_ERROR = [
  { message: "Password should be:", toValid: false },
  { message: "at least 8 chars,", toValid: true },
  { message: "min. 1 uppercase char,", toValid: true },
  { message: "min. 1 number,", toValid: true },
  { message: "min. 1 symbol.", toValid: true },
];
export const WRONG_PASSWORD_ERROR = "Invalid password.";
export const RECOVER_PASSWORD_VALIDATION_ERROR = "Passwords must be the same.";
export const CREATE_ACCOUNT_SUCCESS_INFO = "User account created.";
export const RECOVER_PASSWORD_SUCCESS_INFO = "Check Your inbox.";
