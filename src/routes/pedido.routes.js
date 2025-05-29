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
 *               usuario_id:
 *                 type: integer
 *               status:
 *                 type: string
 *               valor_total:
 *                 type: number
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
 *                 type: string
 *               valor_total:
 *                 type: number
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
    app.post("/pedidos", pedidoController.create);
    app.get("/pedidos", pedidoController.findAll);
    app.get("/pedidos/:id", pedidoController.findById);
    app.put("/pedidos/:id", pedidoController.update);
    app.delete("/pedidos/:id", pedidoController.delete);
    app.delete("/pedidos", pedidoController.deleteAll);
}