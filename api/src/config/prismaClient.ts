import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

class PrismaConnection {
    private static instance: PrismaClient;

    private constructor() {}

    public static getInstance(): PrismaClient {
        if (!PrismaConnection.instance) {
            const databaseUrl = process.env.DATABASE_URL;

            if(!databaseUrl) {
                throw new Error("DATABASE_URL não definida no .env");
            }

            const url = new URL(databaseUrl);

            const adapter = new PrismaMariaDb({
                host: url.hostname,
                port: Number(url.port || 3306),
                user: decodeURIComponent(url.username),
                password: decodeURIComponent(url.password),
                database: url.pathname.slice(1),
            });

            PrismaConnection.instance = new PrismaClient({
                adapter,
            });
        }

        return PrismaConnection.instance;
    }
}

export const prisma = PrismaConnection.getInstance();