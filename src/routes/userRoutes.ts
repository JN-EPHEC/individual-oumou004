import express from "express";
import * as userController from "../controllers/userController";
import { checkIdParam } from "../middlewares/checkIdParam";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Récupérer tous les utilisateurs
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *       500:
 *         description: Erreur serveur
 */
router.get("/", userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Récupérer un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur trouvé
 *       400:
 *         description: ID invalide
 *       404:
 *         description: Utilisateur non trouvé
 */
router.get("/:id", checkIdParam, userController.getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Ajouter un utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé
 *       400:
 *         description: Données invalides
 */
router.post("/", userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Modifier un utilisateur
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour
 *       400:
 *         description: ID invalide
 *       404:
 *         description: Utilisateur non trouvé
 */
router.put("/:id", checkIdParam, userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID utilisateur
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       400:
 *         description: ID invalide
 *       404:
 *         description: Utilisateur non trouvé
 */
router.delete("/:id", checkIdParam, userController.deleteUser);

export default router;