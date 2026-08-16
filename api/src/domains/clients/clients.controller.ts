import { Request, Response } from "express";
import { clientsService } from "./clients.service";

class ClientsController {
    async getAll(req: Request, res: Response) {
        try {
            const clients  = await clientsService.getAll();

            return res.status(200).json(clients);
        }   catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar clients",
            });
        }
    }

    async create(req: Request, res: Response) {
        const { name, phone, email } = req.body;

        if (!name || !phone || !email ) {
            return res.status(400).json({
                message: "Nome, telefone e email são obrigatórios e devem ser preenchidos",
            });
        }
        
        try {
            const client = await clientsService.create({
                name, 
                phone,
                email,
            });
            return res.status(201).json(client);
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar criar cliente",
            });
        }
    }

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({
                message: "ID inválido",
            });
        }

        try {
            await clientsService.delete(id);

            return res.status(204).send();
        }  catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar excluir o cliente",
            });
        }
    }
}

export const clientsController = new ClientsController();