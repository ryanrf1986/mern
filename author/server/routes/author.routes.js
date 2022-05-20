const AuthorController = require("../controllers/author.controllers")


module.exports = app => {
    // TEST SCREEN
    app.get("/api/author/test", AuthorController.test);
    // CREATE AUTHOR
    app.post("/api/author/new", AuthorController.createNewAuthor);
    // GET ALL AUTHOR
    app.get("/api/author", AuthorController.findAllAuthors);
    // GET ONE AUTHOR
    app.get("/api/author/:author_id", AuthorController.findOneSingleAuthor);
    // EDIT AUTHOR
    app.put("/api/author/:author_id", AuthorController.updateOne);
    // DELETE AUTHOR
    app.delete("/api/author/:author_id", AuthorController.deleteAuthor)
}