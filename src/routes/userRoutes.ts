import {Router, Response} from "express";
import * as userController from "../controllers/userController";

 const router = Router();


const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];

// router.get("/", (req, res: Response) =>{
//     res.json(users)
// });

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     tags: [Users]

 *     responses:
 *       200:
 *         description: Succès
 */
router.get("/", userController.getAllUsers);

export default router;
