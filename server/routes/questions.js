const express = require('express');
const router = express.Router();
const question = require('../controllers/questionControllers');
const auth = require('../middleware/auth');

router.get('/all', question.allQuestions);
router.get('/detail/:id', question.detailQuestion);
router.get('/alluser', question.allQuestionsUser);
router.get('/detailuser', question.detailQuestionUser);
router.post('/create', question.createQuestion);
router.put('/update/:id', question.updateQuestion);
router.delete('/remove/:id', question.removeQuestion);
router.get('/vote/:id', question.voteAnswer);


module.exports = router;
