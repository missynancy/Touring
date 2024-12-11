import express from 'express';

const router = express.Router();

router.post<{}, any>('/', async (req, res) => {
    res.send('Let us register');
});

export default router;