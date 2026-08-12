import { Request, Response } from "express";
import { serviceOrdersService } from "./serviceOrders.service";

class ServiceOrdersController {
    async getAll(req: Request, res: Response) {
        try {
            const serviceOrders = await serviceOrdersService.getAll();

            return res.status(200).json(serviceOrders);
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao buscar ordens de serviço",
            });
        }
    }


    async create(req: Request, res: Response) {
        const { clientId, device, issue, status } = req.body;

        if (!clientId || !device || !issue) {
            return res.status(400).json({
                message: "Cliente, dispositivo e problema não podem estar vazios",
            });
        }

       try {
        const serviceOrder = await serviceOrdersService.create({
            clientId: Number(clientId),
            device,
            issue,
            status,
        });

        return res.status(201).json(serviceOrder);
       } catch (error) {
        return res.status(500).json({
            message: "Erro ao criar ordem de serviço",
        });
       }
    }

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({
                message: "ID inválido ou não existente",
            });
        }


        try {
            await serviceOrdersService.delete(id);

            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao tentar excluir ordem de serviço"
            })
        }
    }
}

export const serviceOrdersController = new ServiceOrdersController();