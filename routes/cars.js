const express = require('express');
const router = express.Router();

const cars = [];

router.post('/api/car', (req, res) => {
    const { model, plate, year } = req.body;

    if (!model || !plate || !year) {
        return res.status(400).send({ message: "Dados inválidos" });
    }

    const car = {
        id: cars.length,
        model,
        plate,
        year
    };

    cars.push(car);

    return res.status(201).send({ message: "Carro cadastrado com sucesso" });
});

router.get('/api/car', (req, res) => {
    return res.status(200).send(cars);
});


router.get('/api/car/:id', (req, res) => {
    const { id } = req.params;
    const car = cars.find(car => car.id == id);

    if (!car) {
        return res.status(404).send({ message: "Carro não encontrado" });
    }

    return res.status(200).send(car);
});

router.delete('/api/car/:id', (req, res) => {
    const { id } = req.params;
    const index = cars.findIndex(car => car.id == id);

    if (index === -1) {
        return res.status(404).send({ message: "Carro não encontrado" });
    }

    cars.splice(index, 1);

    return res.status(200).send({ message: "Carro excluído com sucesso" });
});

router.put('/api/car/:id', (req, res) => {
    const { id } = req.params;
    const { model, plate, year } = req.body;

    if (!model || !plate || !year) {
        return res.status(400).send({ message: "Dados inválidos" });
    }

    const car = cars.find(car => car.id == id);

    if (!car) {
        return res.status(404).send({ message: "Carro não encontrado" });
    }

    car.model = model;
    car.plate = plate;
    car.year = year;

    return res.status(200).send({ message: "Carro atualizado com sucesso" });
});

module.exports = router;
