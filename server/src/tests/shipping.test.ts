import { calculateShipping } from "../utils/shipping";

describe("Shipping Calculator - Tests Fonctionnels", () => {

  const distanceCases = [
    // [distance, weight, type, expected, description]

    [0, 5, "standard", 10, "Distance 0 km -> Prix 10€ (standard)"],
    [50, 5, "standard", 10, "Distance 50 km -> Prix 10€ (standard)"],
    [51, 5, "standard", 25, "Distance 51 km -> Prix 25€ (standard)"],
    [500, 5, "standard", 25, "Distance 500 km -> Prix 25€ (standard)"],
    [501, 5, "standard", 50, "Distance 501 km -> Prix 50€ (standard)"],

    [10, 20, "standard", 15, "Poids 20kg -> Majoration 50% sur base 10€"],
    [100, 20, "standard", 37.5, "Poids 20kg -> Majoration 50% sur base 25€"],

    [10, 5, "express", 20, "Express double le prix (10€ -> 20€)"],
    [100, 20, "express", 75, "Express double le prix avec majoration"],

  ];

  test.each(distanceCases)(
    "%s km / %s kg / %s -> %s (€) : %s",
    (distance, weight, type, expected) => {
      expect(calculateShipping(distance as number, weight as number, type as "standard" | "express")).toBe(expected);
    }
  );

});

it("devrait lever une erreur si la distance est négative", () => {
  expect(() => calculateShipping(-10, 5, "standard"))
    .toThrow("Distance invalide");
});

it("devrait lever une erreur si le poids est <= 0", () => {
  expect(() => calculateShipping(10, 0, "standard"))
    .toThrow("Poids invalide");
});

it("devrait lever une erreur si le poids est > 50", () => {
  expect(() => calculateShipping(10, 60, "standard"))
    .toThrow("Poids invalide");
});
