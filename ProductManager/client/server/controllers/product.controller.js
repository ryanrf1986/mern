const Product = require("../models/product.model");

module.exports.test = (req, res) => {
  res.json("HELLO WORLD");
};

module.exports.findAllProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err })
    );
  };

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err })
    );
};

module.exports.findOneSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.product_id })
    .then((oneProduct) => res.json(oneProduct))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err })
    );
};


module.exports.updateOne = (req, res) => {
  console.log(req.body)
  Product.findOneAndUpdate({ _id: req.params.product_id }, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err })
    );
};

module.exports.deleteAnExistingProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.product_id })
    .then(result => res.json({result}))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err })
    );
};
