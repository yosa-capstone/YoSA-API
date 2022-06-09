const db = require("../models");
const config = require("../config/auth.config");

const Level = db.level;
const Image = db.image;
const Pose = db.pose;

const Op = db.Sequelize.Op;

exports.poseAll = (req, res) => {
	Pose.findAll({
	    include: [
	    	{ 
	    		model: Level, 
	    		attributes: ['id', 'nameLevel'],
	    	},
	    	{
		    	model: Image,
		      	attributes:['id', 'urlImage']
    		}
	    ], attributes: [
		    'id',
		    'namePose',
		    'descPose',
  		],
	})
	.then(poses => {
    	return res.status(200).json({poses});
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDetailPose = (req, res) => {
	Pose.findOne({
		where: {
      id: req.params.id
    },
	  include: [
	    { 
	    	model: Level, 
	    	attributes: ['id', 'nameLevel'],
	    },
	    {
		    model: Image,
		    attributes:['id', 'urlImage']
    	}
	   ], attributes: [
		   'id',
		   'namePose',
		   'descPose',
  	],
	})
	.then(results => {
    	return res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};