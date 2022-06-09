const { verifyregister } = require("../middleware");
const controller = require("../controllers/auth.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/register",
    [
      verifyregister.checkDuplicateUsernameOrEmail,
    ],
    controller.register
  );

  app.post("/api/auth/login", controller.login);
};
