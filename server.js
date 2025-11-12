const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

// Funciones para leer los archivos JSON
function getUsuarios() {
  const data = fs.readFileSync("./data/usuarios.json", "utf-8");
  return JSON.parse(data);
}

function getCategorias() {
  const data = fs.readFileSync("./data/categorias.json", "utf-8");
  return JSON.parse(data);
}

function getPedidos() {
  const data = fs.readFileSync("./data/pedidos.json", "utf-8");
  return JSON.parse(data);
}

function getProductos() {
  const data = fs.readFileSync("./data/productos.json", "utf-8");
  return JSON.parse(data);
}

// Rutas
app.get("/api/usuarios", (req, res) => {
  const usuarios = getUsuarios();
  res.json(usuarios);
});

app.get("/api/categorias", (req, res) => {
  const categorias = getCategorias();
  res.status(200).json({ status: 200, message: "success", data: categorias });
});

app.get("/api/pedidos", (req, res) => {
  const pedidos = getPedidos();
  res.json(pedidos);
});

app.get("/api/productos", (req, res) => {
  const productos = getProductos();
  res.json(productos);
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
