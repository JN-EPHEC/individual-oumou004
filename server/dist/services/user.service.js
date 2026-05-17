"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findAll = void 0;
let users = [];
let idCounter = 1;
const findAll = () => {
    return users;
};
exports.findAll = findAll;
const create = (name) => {
    const newUser = {
        id: idCounter++,
        name
    };
    users.push(newUser);
    return newUser;
};
exports.create = create;
//# sourceMappingURL=user.service.js.map