const bodyParser = require('body-parser');
const person = require('./routes/person');
const cars = require('./routes/cars');
const product = require('./routes/product');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person,
        cars,
        product
    )
}