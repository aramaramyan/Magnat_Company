import numberValidate from "./numberValidate";

describe("Number Validate", () => {
  test("Number input", () => {
    expect(numberValidate(42)).toBe(true);
  });

  test("NaN input", () => {
    expect(numberValidate(NaN)).toBe(false);
  });

  test("String input", () => {
    expect(numberValidate("123")).toBe(false);
  });
});