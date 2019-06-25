export default function validate(values) {
  const errors = {};

  if (!values.email || values.email === "") {
    errors.email = "Email is required";
  }
  if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = "Please enter a valid email address";
  }
  if (!values.password || values.password === "") {
    errors.password = "Password is required";
  }
  if (!values.firstName || values.firstName === "") {
    errors.firstName = "First name is required";
  }
  return errors;
}
