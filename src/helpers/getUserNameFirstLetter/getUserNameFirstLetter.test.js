import getUserNameFirstLetter from "./getUserNameFirstLetter";

describe("Get User Name First Letter", () => {
  test("String input", () => {
    expect(getUserNameFirstLetter("john Doe")).toBe("J");
  });

  test("String input", () => {
    expect(getUserNameFirstLetter("bob smith")).toBe("B");
  });
})