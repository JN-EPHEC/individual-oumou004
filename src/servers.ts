export interface User {
    id: number;
    name: string;
}
import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(userRoutes);

app.listen(3000, () => {
    console.log("Serveur lancer sur http://localhost:3000");
});
