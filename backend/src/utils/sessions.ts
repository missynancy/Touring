// src/session.ts

import session from 'express-session';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response, NextFunction } from 'express'; 

const prisma = new PrismaClient();

declare module 'express-session' {
    interface SessionData {
        userId: number;
    }
}

const sessionMiddleware = session({
    genid: (req) => {
        return uuidv4(); // Use UUIDs for session IDs
    },
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
});

const sessionStoreMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.session) {
        const sessionData = {
            sid: req.session.id,
            sess: JSON.stringify(req.session), // Convert session to JSON string
            expire: new Date(Date.now() + 3600000) // 1 hour expiration
        };

        // Save or update session in the database
        await prisma.session.upsert({
            where: { sid: req.session.id },
            update: sessionData,
            create: sessionData,
        });
    }
    next();
};

export { sessionMiddleware, sessionStoreMiddleware };
