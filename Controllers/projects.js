const Projects = require("../Models/Projects");


const getAllLikes = async (req, res) => {
  try{
    const projectLikes = await Projects.find();
    res.status(200).send(projectLikes);
  }
  catch(error){
    res.status(500).send({message:error})
  }
}

const Like = async (req, res) => {
  const likes = req.body.likes;
  const title = req.body.title;
  try{
    if(likes === 0){
      const project = await new Projects({
        title: title,
        likes: 1
      })
      project.save();
    }
    else{
      await Projects.findOneAndUpdate({title: title}, {
        likes : likes + 1
      }, {new: true})
    }
    res.status(200).send({message : `You Liked ${title} !`});
  }
  catch(error){
    res.status(500).send({message: error})
  }
}

module.exports = {Like, getAllLikes}