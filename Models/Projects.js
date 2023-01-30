const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  likes: Number,
})

const Projects = mongoose.model('Projects', ProjectSchema)
module.exports  = Projects