import { validatePassword } from "../utils/password";

describe("Password Validator - White Box Testing", () => {

  // Branch 1
  it("rejette un mot de passe vide", () => {
    expect(validatePassword("", 25)).toBe(false);
  });

  // Branch 2
  it("rejette un mot de passe trop court", () => {
    expect(validatePassword("Ab1!", 25)).toBe(false);
  });

  // Branch 3
  it("rejette un mot de passe trop long", () => {
    expect(validatePassword("VeryVeryVeryVeryLongPassword1!", 25)).toBe(false);
  });

  // Branch 4 - enfant sans minuscule
  it("enfant sans minuscule -> rejeté", () => {
    expect(validatePassword("PASSWORD1", 10)).toBe(false);
  });

  // enfant valide
  it("enfant avec minuscule -> accepté", () => {
    expect(validatePassword("password", 10)).toBe(true);
  });

  // Branch 5 - adulte manque majuscule
  it("adulte sans majuscule -> rejeté", () => {
    expect(validatePassword("password1!", 30)).toBe(false);
  });

  // Branch 5 - adulte manque minuscule
  it("adulte sans minuscule -> rejeté", () => {
    expect(validatePassword("PASSWORD1!", 30)).toBe(false);
  });

  // Branch 5 - adulte manque chiffre
  it("adulte sans chiffre -> rejeté", () => {
    expect(validatePassword("Password!", 30)).toBe(false);
  });

  // Branch 6 - adulte sans caractère spécial
  it("adulte sans caractère spécial -> rejeté", () => {
    expect(validatePassword("Password1", 30)).toBe(false);
  });

  // adulte valide
  it("adulte mot de passe valide", () => {
    expect(validatePassword("Password1!", 30)).toBe(true);
  });

  // Branch 7 - senior sans chiffre et majuscule
  it("senior sans chiffre et majuscule -> rejeté", () => {
    expect(validatePassword("password!", 70)).toBe(false);
  });

  // senior avec majuscule
  it("senior avec majuscule -> accepté", () => {
    expect(validatePassword("Password!", 70)).toBe(true);
  });

  // senior avec chiffre
  it("senior avec chiffre -> accepté", () => {
    expect(validatePassword("password1", 70)).toBe(true);
  });

});