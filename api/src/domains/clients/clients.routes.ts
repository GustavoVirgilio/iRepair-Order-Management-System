import { Router } from "express";
import { clientsController } from "./clients.controller";

const clientsRouter  = Router();

clientsRouter.get("/", (req, res) => {
    return clientsController.getAll(req, res);
});

clientsRouter.post("/", (req, res) => {
    return clientsController.create(req, res);
});

clientsRouter.delete("/:id", (req, res) => {
    return clientsController.delete(req, res);
});

export { clientsRouter };
