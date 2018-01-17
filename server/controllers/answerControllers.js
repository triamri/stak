const Answer = require('../models/stackModels')

/* Create, Delete */

// Create Answer
let createAnswer = (req, res) => {
  Answer.findByIdAndUpdate(req.params.id,{
    $push: {
      'answers': { 
        answer: req.body.answer,
        userID: '5a5b154738f0ad0d074123cc' 
      }
    }
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Answer Sukses',
      data: '5a5b154738f0ad0d074123cc'
    })
  })
  .catch(err => console.log(err))
}

// Delete Answer
let removeAnswer = (req, res) => {
  Answer.findByIdAndUpdate(req.params.id,{
    $pull: {
      'answers': {
        _id: req.params.idanswer
      }
    }
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Remove Answer Sukses',
      data: result
    })
  })
  .catch(err => console.log(err))
}

let voteAnswer = (req, res) => {
  console.log('masuk');
  Answer.findOneAndUpdate({
    _id: req.params.id,
    'answers._id' : req.params.idanswer
  },{
    $push: {
        'answers.0.votes': {
        userID: req.getUser.id 
      }
    }
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Vote Answer Sukses',
      data: result
    })
  })
  .catch(err => console.log(err))
}

module.exports = {
  createAnswer,
  removeAnswer,
  voteAnswer
}
