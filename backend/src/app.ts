import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import * as middlewares from './middlewares';
import auth from './api/routes/authRoutes';
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_secret",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }, // Set secure: in production
    })
);

app.get<{}, any>('/', (req, res) => {
  res.json({
    message: 'Welcome to touring',
  });
})

app.use('/auth', auth);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
