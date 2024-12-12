import { Request, Response } from "express";
import { hashPassword, verifyPassword } from "../../utils/hash";
import { addUser, findUserByUsername } from "../models/Users";
import { compare } from "bcrypt";

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Missing fields" });

    const hashedPass = await hashPassword(password);
    const user = await addUser(username, hashedPass);

    if (user) return res.status(201).json({ message: "User registered successfully" });
    return res.status(400).json({ error: "User already exists" });
};

// Login a user
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: "Missing fields" });

    const user = await findUserByUsername(username);
    if (!user || !(await verifyPassword(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.user = { id: user.id, username: user.username };
    res.json({ message: "Login successful" });
};

// Logout a user
export const logoutUser = (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ error: "Could not log out" });
        res.clearCookie("connect.sid");
        res.json({ message: "Logout successful" });
    });
};

