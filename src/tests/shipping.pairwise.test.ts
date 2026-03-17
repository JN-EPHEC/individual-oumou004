import { calculateShipping } from "../utils/shipping";

describe("Pairwise Combinations", () => {

  const cases = [
    // distance, weight, type, expected

    [25, 5, "standard", 10],   // D1 W1 T1
    [25, 40, "express", 30],   // D1 W2 T2
    [100, 5, "express", 50],   // D2 W1 T2
    [100, 20, "standard", 37.5], // D2 W2 T1
    [600, 5, "express", 100],  // D3 W1 T2
    [600, 40, "standard", 75], // D3 W2 T1
  ];

  test.each(cases)(
    "Scénario : %i km, %i kg, %s",
    (distance, weight, type, expected) => {

      const result = calculateShipping(
        distance,
        weight,
        type as "standard" | "express"
      );

      expect(result).toBe(expected);

    }
  );

});