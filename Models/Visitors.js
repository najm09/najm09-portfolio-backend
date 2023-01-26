const mongoose = require('mongoose')

const VisitorsSchema = new mongoose.Schema({
  name : String, 
  comment : String  
})

const Visitors = mongoose.model('Visitors', VisitorsSchema)
module.exports = Visitors;