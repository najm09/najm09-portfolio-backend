
const Projects = require("../Models/Projects");

const getAllProjectDetails = async(req, res) => {
  try{
    const ProjectDetails = await Projects.find();
    res.status(200).return(ProjectDetails)
  }
  catch(error){
    res.status(500).send({message : error})
  }
}

const getProjectDetails = async(req, res) => {
  try{
    const project = await Projects.find({name: req.body.name});
    if(project === undefined) return res.status(404).send({
      message : "Project id Not found"
    })
    res.status(200).send(project)
  }
  catch(error){
    res.status(500).send({message : error});
  }
}

const Like = async (req, res) => {
  try{
    const project = await Projects.find({name: req.body.name});
    if(project === undefined){
      const project =  await new Projects({
        likes : 1,
        name : req.body.name
      })
      project.save();
    }else{
      await project.updateOne({name: req.body.name}, {
        likes : project.likes + 1
      })
    }
    res.status(200).send(project)
  }
  catch(error){
    res.status(500).send({message: error})
  }
}

module.exports = {getAllProjectDetails, getProjectDetails, Like}