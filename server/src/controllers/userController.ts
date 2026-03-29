import { Request, Response } from "express";
import User from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  res.json({ message: "update user" });
};

export const deleteUser = async (req: Request, res: Response) => {
  res.json({ message: "delete user" });
};