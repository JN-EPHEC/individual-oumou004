"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getAllUsers = async (req, res) => {
    try {
        const users = await User_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération" });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const user = await User_1.default.findByPk(Number(req.params.id));
    res.json(user);
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    const user = await User_1.default.create(req.body);
    res.status(201).json(user);
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    res.json({ message: "update user" });
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    res.json({ message: "delete user" });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map