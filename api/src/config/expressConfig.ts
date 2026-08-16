import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { clientsRouter } from "../domains/clients/clients.routes";
import { serviceOrdersRouter } from "../domains/service-orders/serviceOrders.routes";

import { authRoutes } from "../domains/auth/auth.routes";
import { authMiddleware } from "../middlewares/authMiddleware";

export const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);

app.use(express.json());

app.use(cookieParser());

app.use("/auth", authRoutes);

app.use("/clients", authMiddleware, clientsRouter);

app.use("/service-orders", authMiddleware, serviceOrdersRouter);