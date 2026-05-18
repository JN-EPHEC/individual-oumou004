"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateShipping = calculateShipping;
function calculateShipping(distance, weight, type) {
    if (distance < 0) {
        throw new Error("Invalid distance");
    }
    if (weight <= 0 || weight > 50) {
        throw new Error("Invalid weight");
    }
    let baseCost = 0;
    // coût selon distance
    if (distance <= 50) {
        baseCost = 10;
    }
    else if (distance <= 500) {
        baseCost = 25;
    }
    else {
        baseCost = 50;
    }
    // majoration poids
    if (weight >= 10 && weight <= 50) {
        baseCost = baseCost * 1.5;
    }
    // express
    if (type === "express") {
        baseCost = baseCost * 2;
    }
    return baseCost;
}
//# sourceMappingURL=shipping.js.map