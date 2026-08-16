import { Router } from "express";
import { serviceOrdersController } from "./serviceOrders.controller";

const serviceOrdersRouter = Router();

serviceOrdersRouter.get("/", (req,res) => {
    return serviceOrdersController.getAll(req,res);
});

serviceOrdersRouter.post("/", (req,res) => {
    return serviceOrdersController.create(req,res);
});

serviceOrdersRouter.delete("/:id", (req,res) => {
    return serviceOrdersController.delete(req,res);
});

export { serviceOrdersRouter };