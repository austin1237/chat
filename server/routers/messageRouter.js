const messageController = require("../controllers/messageController.js");

let setUpRoutes = app => {
    app.get("/messages", messageController.getMessage);
}

exports.setUpRoutes = setUpRoutes;