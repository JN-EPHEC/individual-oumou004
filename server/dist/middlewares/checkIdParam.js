"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdParam = void 0;
const checkIdParam = (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: "ID invalide" });
    }
    next();
};
exports.checkIdParam = checkIdParam;
//# sourceMappingURL=checkIdParam.js.map