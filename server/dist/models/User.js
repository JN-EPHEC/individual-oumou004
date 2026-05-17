"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class User extends sequelize_1.Model {
}
User.init({
    nom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_1.default, // connexion DB
    modelName: "User",
    tableName: "users",
});
exports.default = User;
//# sourceMappingURL=User.js.map