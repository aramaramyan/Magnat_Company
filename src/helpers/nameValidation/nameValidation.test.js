import nameValidation from "./nameValidation";

describe("Name Validation", () => {
  test("Valid name", () => {
    expect(nameValidation("Aram")).toBe(true);
  });

  test("Less than 3 letters", () => {
    expect(nameValidation("Su")).toBe(false);
  });

  test("More than 20 letters", () => {
    expect(nameValidation("abcdefghijklmnopqrstuvwxyz")).toBe(false);
  });

  test("Number input", () => {
    expect(nameValidation(11)).toBe(false);
  });

  test("Name contain number", () => {
    expect(nameValidation("John777")).toBe(false);
  });

  test("Name contain symbols", () => {
    expect(nameValidation("Dollar$")).toBe(false);
  });
});