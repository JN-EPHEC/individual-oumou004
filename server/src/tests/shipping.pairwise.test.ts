import { calculateShipping } from "../utils/shipping";

describe("Pairwise Combinations", () => {

  const cases: [number, number, "standard" | "express", number][] = [
    // distance, weight, type, expected

    [25, 5, "standard", 10],
    [25, 40, "express", 30],
    [100, 5, "express", 50],
    [100, 20, "standard", 37.5],
    [600, 5, "express", 100],
    [600, 40, "standard", 75],
  ];

  test.each(cases)(
    "Scénario : %i km, %i kg, %s",
    (
      distance: number,
      weight: number,
      type: "standard" | "express",
      expected: number
    ) => {

      const result = calculateShipping(
        distance,
        weight,
        type
      );

      expect(result).toBe(expected);

    }
  );

});