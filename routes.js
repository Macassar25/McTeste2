const express = require('express');
const routes = express.routes();

routes.get('mensagem', (req, res) => {
    res.json({ texto, "ola do servidor via ajax"})
});