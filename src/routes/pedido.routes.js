/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Endpoints para gerenciamento de pedidos
 */

/**
 * @swagger
 * /pedidos:
 *   post:
 *     tags: [Pedidos]
 *     summary: Criar novo pedido
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 description: "Status do Pedido - Codigos: 1 - Aberto | 2 - Preparando | 3 - Pronto"
 *                 example: "1"
 *               hora:
 *                 type: date-time
 *                 description: "Data e hora de criação do pedido"
 *                 example: "2025-05-29 14:30:00"
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *   get:
 *     tags: [Pedidos]
 *     summary: Listar todos os pedidos
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *   delete:
 *     tags: [Pedidos]
 *     summary: Excluir todos os pedidos
 *     responses:
 *       200:
 *         description: Todos os pedidos foram excluídos
 */

/**
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     tags: [Pedidos]
 *     summary: Buscar pedido por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado com sucesso
 *   put:
 *     tags: [Pedidos]
 *     summary: Atualizar pedido
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
 *               status:
 *                 type: integer
 *                 description: "Status do Pedido - Codigos: 1 - Aberto | 2 - Preparando | 3 - Pronto"
 *                 example: "1"
 *               hora:
 *                 type: date-time
 *                 description: "Data e hora de criação do pedido"
 *                 example: "2025-05-29 14:30:00"
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *   delete:
 *     tags: [Pedidos]
 *     summary: Excluir pedido
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido excluído com sucesso
 */

module.exports = app => {
    const pedidoController =
        require("../controllers/pedido.controller.js");
    const auth = require("../middlewares/auth_jwt_middleware");

    app.post("/pedidos", [auth.verifyToken], pedidoController.create);
    app.get("/pedidos", [auth.verifyToken], pedidoController.findAll);
    app.get("/pedidos/:id", [auth.verifyToken], pedidoController.findById);
    app.put("/pedidos/:id", [auth.verifyToken], pedidoController.update);
    app.delete("/pedidos/:id", [auth.verifyToken], pedidoController.delete);
    app.delete("/pedidos", [auth.verifyToken], pedidoController.deleteAll);
}