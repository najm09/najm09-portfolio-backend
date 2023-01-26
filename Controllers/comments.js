const Visitors = require('../Models/Visitors')
require('dotenv').config();

const createComment = async (req, res) => {
  try {
    const Visitor = await new Visitors({
      ...req.body
    })
    await Visitor.save();
    return res.status(200).send({
      message: "comment posted !",
      comment: req.body.comment
    })
  }
  catch (error) {
    return res.status(500).send({ error: error })
  }
}

const getComments = async (req, res) => {
  try {
    const Comments = await Visitors.find();
    res.status(200).send(Comments);
  }
  catch (error) {
    console.log("Something went wrong, ");
    res.status(500).send({ error: error })
  }
}

module.exports = {createComment, getComments}

