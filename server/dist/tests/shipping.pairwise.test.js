"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shipping_1 = require("../utils/shipping");
describe("Pairwise Combinations", () => {
    const cases = [
        // distance, weight, type, expected
        [25, 5, "standard", 10],
        [25, 40, "express", 30],
        [100, 5, "express", 50],
        [100, 20, "standard", 37.5],
        [600, 5, "express", 100],
        [600, 40, "standard", 75],
    ];
    test.each(cases)("Scénario : %i km, %i kg, %s", (distance, weight, type, expected) => {
        const result = (0, shipping_1.calculateShipping)(distance, weight, type);
        expect(result).toBe(expected);
    });
});
//# sourceMappingURL=shipping.pairwise.test.js.map