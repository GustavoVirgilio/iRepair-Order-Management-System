import "dotenv/config";

import { app } from "./config/expressConfig";

const PORTA  = process.env.PORTA || 3030;

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
})