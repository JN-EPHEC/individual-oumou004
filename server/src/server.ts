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



// ================================
// Imports
// ================================
import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import sequelize from "./config/database";
import "./models/User"; // IMPORTANT : pour enregistrer le modèle
import User from "./models/User";

import userRoutes from "./routes/userRoutes";
import { requestLogger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import { swaggerSpec } from "./config/swagger";

// ================================
// Utilitaires
// ================================
function greet(name: string): string {
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
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));
app.use(requestLogger);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes simples
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon serveur API");
});

app.get("/api/data", (req, res) => {
  res.json(etudiants);
});

app.get("/api/hello/:name", (req, res) => {
  const name: string = req.params.name;
  res.json({
    message: `Bonjour ${name}`,
    timestamp: new Date().toISOString(),
  });
});

// Routes utilisateurs
app.use("/api/users", userRoutes);

// Middleware erreurs
app.use(errorHandler);

// ================================
// Synchronisation DB et Seed
// ================================
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base de données SQLite réussie.");
  })
  .catch((error) => {
    console.error("Impossible de se connecter à la base :", error);
  });

sequelize
  .sync({ force: true }) // force: true recrée les tables à chaque démarrage
  .then(async () => {
    console.log("Base de données synchronisée.");

    // Seed utilisateur
    await User.create({ nom: "John", prenom: "Doe" });
    console.log("Utilisateur ajouté !");

    // Affiche tous les users pour vérifier
    const users = await User.findAll();
    console.log(
      "Users dans la DB :",
      users.map((u) => u.toJSON())
    );

    // Démarrage serveur
    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation :", error);
  });