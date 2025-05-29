const cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./src/configs/swagger');

const app = express();

//parser para requisições content-type:
//application/x-www-form-urlencoded-json
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    app.use(cors());
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  

//Linhas das rotas
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
