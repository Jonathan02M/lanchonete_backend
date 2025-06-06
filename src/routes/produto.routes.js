/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Endpoints para gerenciamento de produtos
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /produtos:
 *   post:
 *     tags: [Produtos]
 *     summary: Criar novo produto
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: "Nome do pedido"
 *                 example: "X-Salada" 
 *               valor:
 *                 type: number
 *                 description: "Valor do pedido."
 *                 example: "10.00"
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *   get:
 *     tags: [Produtos]
 *     summary: Listar todos os produtos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *   delete:
 *     tags: [Produtos]
 *     summary: Excluir todos os produtos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Todos os produtos foram excluídos
 */

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     tags: [Produtos]
 *     summary: Buscar produto por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso
 *   put:
 *     tags: [Produtos]
 *     summary: Atualizar produto
 *     security:
 *       - bearerAuth: []
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
 *               nome:
 *                 type: string
 *                 description: "Nome do pedido"
 *                 example: "X-Salada" 
 *               valor:
 *                 type: number
 *                 description: "Valor do pedido."
 *                 example: "10.00"
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *   delete:
 *     tags: [Produtos]
 *     summary: Excluir produto
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto excluído com sucesso
 */

module.exports = app => {
    const produtoController = require("../controllers/produto.controller");
    const auth = require("../middlewares/auth_jwt_middleware");

    app.post("/produtos", [auth.verifyToken], produtoController.create);
    app.get("/produtos", [auth.verifyToken], produtoController.findAll);
    app.get("/produtos/:id", [auth.verifyToken, auth.isBalcao], produtoController.findById);
    app.put("/produtos/:id", [auth.verifyToken, auth.isAdmin], produtoController.update);
    app.delete("/produtos/:id", [auth.verifyToken, auth.isAdmin], produtoController.delete);
    app.delete("/produtos", [auth.verifyToken, auth.isAdmin], produtoController.deleteAll);
}