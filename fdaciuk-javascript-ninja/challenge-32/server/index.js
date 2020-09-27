// -> Requer o express para iniciar
const express = require("express");
// -> Inicia uma instancia do express
const server = express();
// -> Habilita o Uso do Json
server.use(express.json());


// -> "armazenamento"
const cars = [];

// -> Rotas
server.post("/cars", (req, res) => {
  // traz os campos do corpo da request
  const { brandModel, year, plate, color } = req.body;
  // monta o objeto
  const car = {
    brandModel, 
    year, 
    plate, 
    color
  };
  // insere no vetor
  cars.push(car);
  //traz a o objeto montado como resposta
  return res.json(car);
});

//listagem do vetor interiro
server.get("/cars", (req, res) => {
  return res.json(cars);
});

// -> Sobe o servidor na porta.
server.listen(3000);