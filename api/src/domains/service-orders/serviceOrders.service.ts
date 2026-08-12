import { prisma } from "../../config/prismaClient";

interface CreateServiceOrderData {
    clientId: number;
    device:   string;
    issue:    string;
    status?: string;
}

class ServiceOrdersService {
    async getAll() {
        return prisma.serviceOrder.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async create(data: CreateServiceOrderData) {
        return prisma.serviceOrder.create({
            data: {
                clientId: data.clientId,
                device: data.device,
                issue: data.issue,
                status: data.status ?? "open",
            },
        });
    }

    async delete(id: number) {
        return prisma.serviceOrder.delete({
            where: {
                id,
            },
        });
    }
    
}

export const serviceOrdersService = new ServiceOrdersService();