import express from "express";
import * as userService from "../services/user.service";

const router = express.Router();

router.get("/api/users", (req, res) => {
    const users = userService.findAll();
    res.status(200).json(users);
});

router.post("/api/users", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const user = userService.create(name);
    res.status(201).json(user);
});

export default router;
