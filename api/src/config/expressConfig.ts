import "dotenv/config";
import  Express from "express";

const app = Express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});