const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

function getCategorias() {
  const data = fs.readFileSync("./categorias.json", "utf-8");
  return JSON.parse(data);
}

app.get("/api/categorias", (req, res) => {
  let categorias = getCategorias();
  res.status(200).json({ status: 200, message: "success", data: categorias });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
