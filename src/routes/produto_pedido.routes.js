/**
 * @swagger
 * tags:
 *   name: Produtos em Pedidos
 *   description: Endpoints para gerenciamento de produtos em pedidos
 */

/**
 * @swagger
 * /produtos_pedidos:
 *   post:
 *     tags: [Produtos em Pedidos]
 *     summary: Adicionar produto ao pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtos_idproduto:
 *                 type: integer
 *                 description: "Id do produto - deve estar cadastrado na tabela produtos"
 *                 example: "1" 
 *               pedidos_idpedido:
 *                 type: integer
 *                 description: "Id do pedido - deve estar cadastrado na tabela pedidos"
 *                 example: "1" 
 *               observacao:
 *                 type: string
 *                 description: "Observação no pedido"
 *                 example: "Não colocar maionese." 
 *     responses:
 *       201:
 *         description: Produto adicionado ao pedido com sucesso
 *   get:
 *     tags: [Produtos em Pedidos]
 *     summary: Listar todos os produtos em pedidos
 *     responses:
 *       200:
 *         description: Lista de produtos em pedidos retornada com sucesso
 *   delete:
 *     tags: [Produtos em Pedidos]
 *     summary: Excluir todos os produtos em pedidos
 *     responses:
 *       200:
 *         description: Todos os produtos em pedidos foram excluídos
 */

/**
 * @swagger
 * /produtos_pedidos/{id}:
 *   get:
 *     tags: [Produtos em Pedidos]
 *     summary: Buscar produto em pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto em pedido encontrado com sucesso
 *   put:
 *     tags: [Produtos em Pedidos]
 *     summary: Atualizar produto em pedido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtos_idproduto:
 *                 type: integer
 *                 description: "Id do produto - deve estar cadastrado na tabela produtos"
 *                 example: "1" 
 *               pedidos_idpedido:
 *                 type: integer
 *                 description: "Id do pedido - deve estar cadastrado na tabela pedidos"
 *                 example: "1" 
 *               observacao:
 *                 type: string
 *                 description: "Observação no pedido"
 *                 example: "Não colocar maionese." 
 *     responses:
 *       200:
 *         description: Produto em pedido atualizado com sucesso
 *   delete:
 *     tags: [Produtos em Pedidos]
 *     summary: Excluir produto em pedido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto em pedido excluído com sucesso
 */

module.exports = app => {
    const produto_pedidoController =
        require("../controllers/produto_pedido.controller.js");
    const auth = require("../middlewares/auth_jwt_middleware");

    app.post("/produtos_pedidos", [auth.verifyToken], produto_pedidoController.create);
    app.get("/produtos_pedidos", [auth.verifyToken], produto_pedidoController.findAll);
    app.get("/produtos_pedidos/:id", [auth.verifyToken], produto_pedidoController.findById);
    app.put("/produtos_pedidos/:id", [auth.verifyToken], produto_pedidoController.update);
    app.delete("/produtos_pedidos/:id", [auth.verifyToken], produto_pedidoController.delete);
    app.delete("/produtos_pedidos", [auth.verifyToken], produto_pedidoController.deleteAll);
}
