import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", // fichier créé automatiquement
    logging: false, // désactive les logs SQL (optionnel)
});

export default sequelize;
