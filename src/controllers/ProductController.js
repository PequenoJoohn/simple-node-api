const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    //Show All
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page , limit: 10 });
        console.log("Search Executed >")
        return res.json(products);
    },
    //Show One
    async show(req, res) {
        const product = await Product.findById(req.params.id);
        console.log("Show Executed >")

        if (product === null) {
            console.log("Este produto não existe.")
        }
        return res.json(product);
    },
    //Create
    async store(req, res) {
        const product = await Product.create(req.body);
        console.log("Created Executed >")
        return res.json(product);
    },
    //Update
    async update(req, res) {
        console.log("Updated Executed >")
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        console.log(product);
        return res.json(product);
    },
    //Destroy
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        console.log("Destroy Executed > " + req.params.id);
        return res.send();
    }
};
