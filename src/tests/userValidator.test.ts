import { validateUserRegistration } from "../utils/userValidator";

describe("User Validator", () => {

  // cas valide
  it("utilisateur valide", () => {
    expect(validateUserRegistration(25, "user", "test@mail.com")).toBe(true);
  });

  // mineur refusé
  it("mineur user refusé", () => {
    expect(validateUserRegistration(17, "user", "test@mail.com")).toBe(false);
  });

  // mineur stagiaire accepté
  it("mineur stagiaire accepté", () => {
    expect(validateUserRegistration(17, "stagiaire", "test@mail.com")).toBe(true);
  });

  // âge > 120
  it("age invalide (>120)", () => {
    expect(() =>
      validateUserRegistration(130, "user", "test@mail.com")
    ).toThrow("Âge invalide");
  });

  // rôle invalide
  it("role invalide", () => {
    expect(() =>
      validateUserRegistration(25, "invalid" as any, "test@mail.com")
    ).toThrow("Rôle invalide");
  });

  // email invalide
  it("email sans @", () => {
    expect(validateUserRegistration(25, "user", "testmail.com")).toBe(false);
  });

  it("email sans point", () => {
    expect(validateUserRegistration(25, "user", "test@mailcom")).toBe(false);
  });

  // age NaN
  it("age NaN", () => {
    expect(validateUserRegistration(NaN, "user", "test@mail.com")).toBe(false);
  });

});