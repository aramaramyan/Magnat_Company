export default function nameValidation(input) {
  const regex = /^[a-zA-Z ]{3,20}$/;
  return regex.test(input);
}