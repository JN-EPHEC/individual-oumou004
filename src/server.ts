import userRoutes from "./routes/userRoutes";

import express  from "express";

function greet(name: string): string {
    return `Bonjour ${name}, bienvenue en TypeScript`;
};
console.log(greet("Oumou"));


const etudiants = [
{ id: 1, nom: "Dupont", prenom: "Jean" },
{ id: 2, nom: "Martin", prenom: "Sophie" },
{ id: 3, nom: "Doe", prenom: "John" },
];

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur API');
});

app.get('/api/data', (req, res) => {
    res.json(etudiants);
});   

app.get("/api/hello/:name", (req, res) =>{
    const name :string = req.params.name;

    const reponse = {
        message : `Bonjour ${name}`,
        timestamp : new Date().toISOString()
    };

    res.json(reponse)
});

app.use("/api/users", userRoutes);

app.listen(port,() => {
     console.log(`Serveur lancer sur http:localhost:${port}`);
});

