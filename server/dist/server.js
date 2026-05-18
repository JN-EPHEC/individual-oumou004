"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ================================
// Imports
// ================================
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const database_1 = __importDefault(require("./config/database"));
require("./models/User"); // IMPORTANT : pour enregistrer le modèle
const User_1 = __importDefault(require("./models/User"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const logger_1 = require("./middlewares/logger");
const errorHandler_1 = require("./middlewares/errorHandler");
const swagger_1 = require("./config/swagger");
// ================================
// Utilitaires
// ================================
function greet(name) {
    return `Bonjour ${name}, bienvenue en TypeScript`;
}
console.log(greet("Oumou"));
// ================================
// Données fictives
// ================================
const etudiants = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" },
];
// ================================
// Configuration Express
// ================================
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use(logger_1.requestLogger);
// Swagger
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// Routes simples
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon serveur API");
});
app.get("/api/data", (req, res) => {
    res.json(etudiants);
});
app.get("/api/hello/:name", (req, res) => {
    const name = req.params.name;
    res.json({
        message: `Bonjour ${name}`,
        timestamp: new Date().toISOString(),
    });
});
// Routes utilisateurs
app.use("/api/users", userRoutes_1.default);
// Middleware erreurs
app.use(errorHandler_1.errorHandler);
// ================================
// Synchronisation DB et Seed
// ================================
database_1.default
    .authenticate()
    .then(() => {
    console.log("Connexion à la base de données postgres réussie.");
})
    .catch((error) => {
    console.error("Impossible de se connecter à la base :", error);
});
database_1.default
    .sync()
    .then(async () => {
    console.log("✅ Base de données synchronisée.");
    // Vérifie si un user existe déjà
    const existingUser = await User_1.default.findOne();
    // Seed seulement si la table est vide
    if (!existingUser) {
        await User_1.default.create({
            nom: "John",
            prenom: "Doe",
        });
        console.log("✅ Utilisateur de test ajouté !");
    }
    // Affichage users
    const users = await User_1.default.findAll();
    console.log("Users dans la DB :", users.map((u) => u.toJSON()));
    // Démarrage serveur
    app.listen(port, () => {
        console.log(`Serveur lancé sur http://localhost:${port}`);
        console.log(`📘 Swagger : http://localhost:${port}/api-docs`);
    });
})
    .catch((error) => {
    console.error("Erreur lors de la synchronisation :", error);
});
// import cors from "cors";
// import express  from "express";
// import sequelize from "./config/database";
// import "./models/User"; // IMPORTANT : pour enregistrer le modèle
// import User from "./models/User";
// import { requestLogger } from "./middlewares/logger";
// import { errorHandler } from "./middlewares/errorHandler";
// import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "./config/swagger";
// import userRoutes from "./routes/userRoutes";
// const showUsers = async () => {
//     const users = await User.findAll();
//     console.log(users);
// };
// showUsers();
// import User from "./models/User";
// const seedUser = async () => {
//     await User.create({
//         nom: "John",
//         prenom: "Doe"
//     });
//     console.log("Utilisateur ajouté !");
// };
// seedUser();
// function greet(name: string): string {
//     return `Bonjour ${name}, bienvenue en TypeScript`;
// };
// console.log(greet("Oumou"));
// const etudiants = [
// { id: 1, nom: "Dupont", prenom: "Jean" },
// { id: 2, nom: "Martin", prenom: "Sophie" },
// { id: 3, nom: "Doe", prenom: "John" },
// ];
// const app = express();
// const port = 3000;
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use(requestLogger);
// app.get('/', (req, res) => {
//     res.send('Bienvenue sur mon serveur API');
// });
// app.get('/api/data', (req, res) => {
//     res.json(etudiants);
// });   
// app.get("/api/hello/:name", (req, res) =>{
//     const name :string = req.params.name;
//     const reponse = {
//         message : `Bonjour ${name}`,
//         timestamp : new Date().toISOString()
//     };
//     res.json(reponse)
// });
// app.use(cors());
// app.use(express.static("public"));
// app.use("/api/users", userRoutes);
// app.use(errorHandler);
// sequelize.authenticate()
//     .then(() => {
//         console.log("Connexion à la base de données SQLite réussie.");
//     })
//     .catch((error) => {
//         console.error("Impossible de se connecter à la base :", error);
//     });
// // app.listen(port,() => {
// //      console.log(`Serveur lancer sur http:localhost:${port}`);
// // });
// // Synchronisation + démarrage serveur
// sequelize.sync()
//     .then(() => {
//         console.log("Base de données synchronisée.");
//         app.listen(port, () => {
//             console.log(`Serveur lancé sur http://localhost:${port}`);
//         });
//     })
//     .catch((error) => {
//         console.error("Erreur lors de la synchronisation :", error);
//     });
//# sourceMappingURL=server.js.map