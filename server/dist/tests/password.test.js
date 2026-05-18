"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_1 = require("../utils/password");
describe("Password Validator - White Box Testing", () => {
    // Branch 1
    it("rejette un mot de passe vide", () => {
        expect((0, password_1.validatePassword)("", 25)).toBe(false);
    });
    // Branch 2
    it("rejette un mot de passe trop court", () => {
        expect((0, password_1.validatePassword)("Ab1!", 25)).toBe(false);
    });
    // Branch 3
    it("rejette un mot de passe trop long", () => {
        expect((0, password_1.validatePassword)("VeryVeryVeryVeryLongPassword1!", 25)).toBe(false);
    });
    // Branch 4 - enfant sans minuscule
    it("enfant sans minuscule -> rejeté", () => {
        expect((0, password_1.validatePassword)("PASSWORD1", 10)).toBe(false);
    });
    // enfant valide
    it("enfant avec minuscule -> accepté", () => {
        expect((0, password_1.validatePassword)("password", 10)).toBe(true);
    });
    // Branch 5 - adulte manque majuscule
    it("adulte sans majuscule -> rejeté", () => {
        expect((0, password_1.validatePassword)("password1!", 30)).toBe(false);
    });
    // Branch 5 - adulte manque minuscule
    it("adulte sans minuscule -> rejeté", () => {
        expect((0, password_1.validatePassword)("PASSWORD1!", 30)).toBe(false);
    });
    // Branch 5 - adulte manque chiffre
    it("adulte sans chiffre -> rejeté", () => {
        expect((0, password_1.validatePassword)("Password!", 30)).toBe(false);
    });
    // Branch 6 - adulte sans caractère spécial
    it("adulte sans caractère spécial -> rejeté", () => {
        expect((0, password_1.validatePassword)("Password1", 30)).toBe(false);
    });
    // adulte valide
    it("adulte mot de passe valide", () => {
        expect((0, password_1.validatePassword)("Password1!", 30)).toBe(true);
    });
    // Branch 7 - senior sans chiffre et majuscule
    it("senior sans chiffre et majuscule -> rejeté", () => {
        expect((0, password_1.validatePassword)("password!", 70)).toBe(false);
    });
    // senior avec majuscule
    it("senior avec majuscule -> accepté", () => {
        expect((0, password_1.validatePassword)("Password!", 70)).toBe(true);
    });
    // senior avec chiffre
    it("senior avec chiffre -> accepté", () => {
        expect((0, password_1.validatePassword)("password1", 70)).toBe(true);
    });
});
//# sourceMappingURL=password.test.js.map