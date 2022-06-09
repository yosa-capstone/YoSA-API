module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("images", {
    urlImage: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false
  });

  return Image;
};
