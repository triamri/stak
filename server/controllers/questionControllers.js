const Question = require('../models/stackModels');

/*Create, Update, Delete*/

//create
let createQuestion = (req, res) => {
  let newQuestion = new Question({
    question: req.body.question,
    desc: req.body.desc,
    userID: req.getUser.id,
    answers: [],
    votes: []
  })
  newQuestion.save()
  .then((result) => {
    res.status(200).json({
      msg: 'Create Sukses',
      data: result 
    })
  })
  .catch(err => console.log(err))
}

//update
let updateQuestion = (req, res) => {
  console.log('masuk')
  let questionUpdate = {
    question: req.body.question,
    desc: req.body.desc
  }
  Question.update({
    _id: req.params.id,
    userID: req.getUser.id
  }, questionUpdate)
  .then((result) => {
    res.status(200).json({
      msg: 'Update Sukses',
      data: result 
    })
  })
  .catch(err => console.log(err))
}

//delete
let removeQuestion = (req, res) => {
  Question.remove({
    _id: req.params.id,
    userID: req.getUser.id
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Remove Sukses',
      data: result 
    })
  })
  .catch(err => console.log(err))
}

/*panggil data question*/

//allquestion
let allQuestions = (req, res) => {
  Question.find()
  .populate('userID')
  .then((results) => {
    res.status(200).json({
      msg: 'All Sukses',
      data: results 
    })
  })
  .catch(err => console.log(err))
}

//all question detail
let detailQuestion = (req, res) => {
  Question.findById(req.params.id)
  .populate('userID')
  .populate('answers.userID')
  .then((result) => {
    res.status(200).json({
      msg: 'Detail Sukses',
      data: result 
    })
  })
  .catch(err => console.log(err))
}

//all question user
let allQuestionsUser = (req, res) => {
  Question.find({
    userID: req.getUser.id
  })
  .populate('userID')
  .then((results) => {
    res.status(200).json({
      msg: 'All User Sukses',
      data: results 
    })
  })
  .catch(err => console.log(err))
}

//question detail user
let detailQuestionUser = (req, res) => {
  Question.find({
    _id: req.params.id,
    userID: req.getUser.id
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Detail User Sukses',
      data: result 
    })
  })
  .catch(err => console.log(err))
}

let voteAnswer = (req, res) => {
  Question.findByIdAndUpdate(req.params.id,{
    $push: {
      'votes': {
        userID: req.getUser.id 
      }
    }
  })
  .then((result) => {
    res.status(200).json({
      msg: 'Vote Question Sukses',
      data: result
    })
  })
  .catch(err => console.log(err))
}

module.exports = {
  createQuestion,
  updateQuestion,
  removeQuestion,
  allQuestions,
  detailQuestion,
  allQuestionsUser,
  detailQuestionUser,
  voteAnswer
}