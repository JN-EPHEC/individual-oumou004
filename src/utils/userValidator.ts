export function validateUserRegistration(
  age: number,
  role: "admin" | "user" | "stagiaire",
  email: string
): boolean {

  // âge invalide
  if (typeof age !== "number" || isNaN(age)) {
    return false;
  }

  if (age > 120) {
    throw new Error("Âge invalide");
  }

  // rôle invalide
  if (!["admin", "user", "stagiaire"].includes(role)) {
    throw new Error("Rôle invalide");
  }

  // email invalide
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }

  // logique métier
  if (age < 18) {
    if (role === "stagiaire") return true;
    return false;
  }

  return true;
}