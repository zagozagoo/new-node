const Product = require('../models/Product')

class ProductController {
    static async create(req, res) {
        const { name, description, price } = req.body;

        if (!name || !description || !price)
            return res.status(400).send({ message: "Invalid data" })

        const product = {
            name: name,
            description: description,
            price: price
        }

        try {
            const p = await Product.create(product);
            return res.status(201).send({ message: "Product registered successfully", body: p });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }
    
    static async getAllProduct(req, res) {
        try {
            const product = await Product.find();
            return res.status(200).send({ data: product });
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const product = await Product.findById(id);
            return res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: error })
        }
    }

    static async updateById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" })

        const product = req.body;

        try {
            const newProduct = await Product.findByIdAndUpdate(
                id,
                { price: product.price }
            );
            return res.status(200).send(newProduct);
        } catch (error) {
            return res.status(500).send({ error: error });
        }
    };

    static async deleteById(req, res) {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "No id provider" });
        
        try {
            await Product.findByIdAndRemove(id);
            return res.status(200).send({ message: "Product deleted successfully" })
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Something failled" })
        }
    }
}

module.exports = ProductController