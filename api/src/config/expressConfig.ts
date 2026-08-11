import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { clientsRouter } from "../domains/clients/clients.routes";

export const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);

app.use(express.json());

app.use(cookieParser());

app.use("/clients", clientsRouter);