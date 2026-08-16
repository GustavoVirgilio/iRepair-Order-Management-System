import { prisma } from "../../config/prismaClient";

interface CreateClientData {
    name:   string;
    phone:  string;
    email:  string;
}

class ClientService {
    async getAll() {
        return prisma.client.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async create(data: CreateClientData) {
        return prisma.client.create({
            data,
        });
    }

    async delete(id: number) {
        return prisma.client.delete({
            where: {
                id,
            },
        });
    }
}

export const clientsService = new ClientService();