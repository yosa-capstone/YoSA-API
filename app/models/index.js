const config = require("../config/database.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    logging: true,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.models.js")(sequelize, Sequelize);
db.level = require("../models/level.models.js")(sequelize, Sequelize);
db.image = require("../models/image.models.js")(sequelize, Sequelize);
db.pose = require("../models/pose.models.js")(sequelize, Sequelize);

db.level.hasMany(db.pose);
db.pose.belongsTo(db.level);

db.pose.hasMany(db.image);
db.image.belongsTo(db.pose);

module.exports = db;
