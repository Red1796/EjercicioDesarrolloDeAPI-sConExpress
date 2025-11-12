const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

function getCategorias() {
  const data = fs.readFileSync("./data/categorias.json", "utf-8");
  return JSON.parse(data);
}

app.get("/api/categorias", (req, res) => {
  let categorias = getCategorias();
  res.status(200).json({ status: 200, message: "success", data: categorias });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
function getPedidos() {
  const data = fs.readFileSync('./data/pedidos.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/api/pedidos', (req, res) => {
  const pedidos = getPedidos();
  res.json(pedidos);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
function getProductos() {
  const data = fs.readFileSync('./data/productos.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/api/productos', (req, res) => {
  const productos = getProductos();
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
