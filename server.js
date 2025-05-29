require('dotenv').config();
const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/configs/swagger');

const app = express();

// Configure CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'authorization']
}));

// Configure body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routes
require("./src/routes/produto.routes") (app);
require("./src/routes/pedido.routes.js")(app);
require("./src/routes/produto_pedido.routes.js")(app);
require("./src/routes/usuario.routes.js")(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get("/", (req, res) =>{
    res.json({
        message: "Bem vindo à API MVC do SENAC"
    });
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});
