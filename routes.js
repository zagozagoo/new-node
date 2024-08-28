const bodyParser = require('body-parser');
const person = require('./routes/person');
const product = require('./routes/product');

module.exports = (app) => {
    app
        .use(bodyParser.json())
        .use('/api/person', person)
        .use('/api/product', product)
}