import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import * as middlewares from './middlewares';
import auth from './api/routes/authRoutes';
import blog from './api/routes/blogRoutes';
import safaris from './api/routes/safarisRoutes';
import category from './api/routes/categoryRoutes';

require('dotenv').config();
import { sessionMiddleware , sessionStoreMiddleware } from './utils/sessions'

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(sessionMiddleware);
app.use(sessionStoreMiddleware);

app.get<{}, any>('/', (req, res) => {
  res.json({
    message: 'Welcome to touring',
  });
})

app.use('/auth', auth);
app.use('/blog',blog);
app.use('/safaris', safaris);
app.use('/category', category);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
