const controller = require("../controllers/pose.controllers");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/poses", controller.poseAll);
  app.get("/api/poses/:id", controller.getDetailPose);
};
