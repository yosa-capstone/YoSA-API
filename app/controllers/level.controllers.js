const db = require("../models");
const config = require("../config/auth.config");

const Level = db.level;
const Image = db.image;
const Pose = db.pose;

const Op = db.Sequelize.Op;

exports.levelAll = (req, res) => {
	Level.findAll({
	    attributes: [
		    'id',
		    'nameLevel'
  		],
	})
	.then(levels => {
    	return res.status(200).json({levels});
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDetailLevel = (req, res) => {
	Level.findOne({
	where: {
      	id: req.params.id
    },
	  include: [
	    { 
	    	model: Pose, 
	    	attributes: ['id', 'namePose', 'descPose'],
		    include: [{ 
	    		model: Level, 
	    		attributes: ['id', 'nameLevel'],
	    	},
	    	{
			    model: Image,
			    attributes:['id', 'urlImage']
	    	}]
	    }
	   ], attributes: [],
	})
	.then(results => {
    	return res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}