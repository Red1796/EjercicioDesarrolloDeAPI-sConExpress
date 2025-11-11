const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

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