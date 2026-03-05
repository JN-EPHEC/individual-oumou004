import { User } from "../models/users";

let users: User[] = [];
let idCounter = 1;

export const findAll = (): User[] => {
    return users;
};

export const create = (name: string): User => {
    const newUser: User = { id: idCounter++, name };
    users.push(newUser);
    return newUser;
};
