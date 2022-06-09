module.exports = (sequelize, Sequelize) => {
  const Pose = sequelize.define("poses", {
    namePose: {
      type: Sequelize.STRING
    },
    descPose: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  });

  return Pose;
};
