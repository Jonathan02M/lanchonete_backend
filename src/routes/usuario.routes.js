/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints para gerenciamento de usuários
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     tags: [Usuarios]
 *     summary: Criar novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: "Nome do usuário"
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 description: "Email do usuário"
 *                 example: "joao@gmail.com" 
 *               senha:
 *                 type: string
 *                 description: "Senha do usuário"
 *                 example: "QWEasd123456"
 *               tipo:
 *                 type: string
 *                 description: "Tipo do usuário. Administrador: 1. Balcão: 2. Cozinha: 3"
 *                 example: "1"
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

/**
 * @swagger
 * /signin:
 *   post:
 *     tags: [Usuarios]
 *     summary: Login de usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: "Email do usuário"
 *                 example: "joao@gmail.com" 
 *               senha:
 *                 type: string
 *                 description: "Senha do usuário"
 *                 example: "QWEasd123456"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     tags: [Usuarios]
 *     summary: Listar todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     tags: [Usuarios]
 *     summary: Buscar usuário por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado com sucesso
 *   put:
 *     tags: [Usuarios]
 *     summary: Atualizar usuário
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
 *                 description: "Nome do usuário"
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 description: "Email do usuário"
 *                 example: "joao@gmail.com" 
 *               senha:
 *                 type: string
 *                 description: "Senha do usuário"
 *                 example: "QWEasd123456"
 *               tipo:
 *                 type: string
 *                 description: "Tipo do usuário. Administrador: 1. Balcão: 2. Cozinha: 3"
 *                 example: "1"
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *   delete:
 *     tags: [Usuarios]
 *     summary: Excluir usuário
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário excluído com sucesso
 */

module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller");
    const auth = require("../middlewares/auth_jwt_middleware");

    app.post("/signup", usuarioController.signUp);
    app.post("/signin", usuarioController.signIn);
    app.get("/usuarios", [auth.verifyToken], usuarioController.findAll);
    app.get("/usuarios/:id", [auth.verifyToken], usuarioController.findById);
    app.put("/usuarios/:id", [auth.verifyToken], usuarioController.update);
    app.delete("/usuarios/:id", [auth.verifyToken], usuarioController.delete);
}