export default function numberValidate(number) {
  return typeof number === "number" && !isNaN(number);
}