const express = require('express');
const router = express.Router();
const {getComments, createComment} = require('../Controllers/comments');
const { getProjectDetails, Like} = require('../Controllers/projects');


router.get("/", (req, res) => {
  res.status(200).json({
    message : "Hey there"
  })
})

router.get("/comments",  getComments);

router.post("/post_comment", createComment);
router.post("/project", getProjectDetails);
router.post('/like', Like);

module.exports = router;