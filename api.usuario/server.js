const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json());

function getUsuarios() {
  const data = fs.readFileSync("./api.usuario/data/usuarios.json", "utf-8");
  return JSON.parse(data);
}

app.get("/api/usuarios", (req, res) => {
  const usuarios = getUsuarios();
  res.json(usuarios);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
