const Author = require("../models/author.models");

module.exports.test = (req, res) => {
    res.json("HELLO WORLD");
};

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then((authors) => res.json(authors))
    .catch((err) =>
        res.status(400).json(err)
    );
};

module.exports.createNewAuthor = (req, res) => {
        Author.create(req.body)
    .then((newAuthor) => res.json(newAuthor))
    .catch((err) =>
            res.status(400).json(err)
    );
};

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findOne({ _id: req.params.author_id })
    .then((oneAuthor) => res.json(oneAuthor))
    .catch((err) =>
        res.status(400).json(err )
    );
};

module.exports.updateOne = (req, res) => {
    console.log(req.body);
    Author.findOneAndUpdate({ _id: req.params.author_id }, req.body, {
    new: true,
    })
    .then((updatedAuthor) => res.json(updatedAuthor))
    .catch((err) =>
        res.status(400).json(err)
    );
};

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.author_id })
    .then((result) => res.json({ result }))
    .catch((err) =>
        res.status(400).json(err )
    );
};
