export const handleHTTPErrors = (HTTPError) => {
  const errorInString = HTTPError.toLowerCase().split("_");
  const errorToCompare = errorInString.join("-");

 const errors = [
   {
     id: "claims-too-large",
     message: "The error message will be written soon :)",
   },
   {
     id: "email-already-exists",
     message:
       "That e-mail already exist in base. Please type different e-mail.",
   },
   {
     id: "id-token-expired",
     message: "The error message will be written soon :)",
   },
   { id: "id-token-revoked", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "insufficient-permission",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "internal-error", message: "Będzie napisany rodzaj błędu ;)" },
   { id: "invalid-argument", message: "Będzie napisany rodzaj błędu ;)" },
   { id: "invalid-claims", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-continue-uri",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-creation-time",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-credential", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-disabled-field",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-display-name",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-dynamic-link-domain",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-email",
     message:
       "The provided value for the email user property is invalid. It must be a string email address.",
   },
   {
     id: "invalid-email-verified",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-hash-algorithm",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-hash-block-size",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-hash-derived-key-length",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-hash-key", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-hash-memory-cost",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-hash-parallelization",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-hash-rounds", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-hash-salt-separator",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-id-token", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-last-sign-in-time",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-page-token", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-password",
     message: "You enter wrong password.",
   },
   {
     id: "invalid-password-hash",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-password-salt",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-phone-number",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-photo-url", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-provider-data",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-provider-id", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "invalid-oauth-responsetype",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "invalid-session-cookie-duration",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "invalid-uid", message: "Będzie napisany rodzaj błędu ;)" },
   { id: "invalid-user-import", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "maximum-user-count-exceeded",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "missing-android-pkg-name",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "missing-continue-uri",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "missing-hash-algorithm",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "missing-ios-bundle-id",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "missing-uid", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "missing-oauth-client-secret",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "operation-not-allowed",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "phone-number-already-exists",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "project-not-found", message: "Będzie napisany rodzaj błędu ;)" },
   { id: "reserved-claims", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "session-cookie-expired",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   {
     id: "session-cookie-revoked",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "uid-already-exists", message: "Będzie napisany rodzaj błędu ;)" },
   {
     id: "unauthorized-continue-uri",
     message: "Będzie napisany rodzaj błędu ;)",
   },
   { id: "user-not-found", message: "Będzie napisany rodzaj błędu ;)" },
   { id: "email-not-found", message: "Login not found." },
 ];

  const comparedError = errors.find((error) => error.id === errorToCompare);

  return comparedError.message;
};
