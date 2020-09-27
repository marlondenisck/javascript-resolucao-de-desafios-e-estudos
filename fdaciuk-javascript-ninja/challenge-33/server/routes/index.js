'use strict';

var express = require('express');
var router = express.Router();
var data = [];

router.get('/', function(req, res) {
  res.json(data);
});

router.post('/', function(req, res) {
  data.push({
    image: req.body.image,
    brandModel: req.body.brandModel,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color
  });
  res.json({ message: 'success' });
});

router.delete('/', function(req, res) {
  var carIndex = data.filter(function(car) {
    return car.plate == req.body.plate;
  });
  // fazemos o recorte do array de objetos usando o id encontrado
  data.splice(carIndex, 1);
  res.json({ message: 'success' });
});

module.exports = router;
