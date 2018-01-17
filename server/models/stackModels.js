const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaQuestion = new Schema({
  question: {
    type: String,
    require: [true, 'question required']
  },
  desc: {
    type: String
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  votes: [{
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  answers: [{
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    answer: {
      type: String,
      require: [true, 'Answer Required']
    },
    votes: [{
      userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    }]
  }]
});

const Question = mongoose.model('Question', schemaQuestion);

module.exports = Question;
