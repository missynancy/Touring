import express from 'express';
import prisma from '../prismaClient'
const router = express.Router();

router.post<{}, any>('/login', async (req, res) => {
    
    res.send('Let us register');
    
});

router.post<{}, any>('/register', async (req, res) => {
    
    res.send('Let us login');
    
});

export default router;