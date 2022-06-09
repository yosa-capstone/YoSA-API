module.exports = (sequelize, Sequelize) => {
  const Level = sequelize.define("levels", {
    nameLevel: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });

  return Level;
};
