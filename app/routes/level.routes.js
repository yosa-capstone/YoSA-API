const controller = require("../controllers/level.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/levels", controller.levelAll);
  app.get("/api/levels/:id", controller.getDetailLevel);
};
