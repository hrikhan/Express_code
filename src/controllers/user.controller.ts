import { Request, Response } from "express";

type User = { id: number; name: string; };


let users: User[] = [];


export const getUsers = (req: Request, res: Response) => { res.json(users); };

export const createUser = (req: Request, res: Response) => {
    type NewType = User;

    const user: NewType = { id: users.length + 1, name: req.body.name };

    users.push(user); res.json(user);
};