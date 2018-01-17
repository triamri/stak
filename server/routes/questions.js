const express = require('express');
const router = express.Router();
const question = require('../controllers/questionControllers');
const auth = require('../middleware/auth');

router.get('/all', question.allQuestions);
router.get('/detail/:id', question.detailQuestion);
router.get('/alluser', auth.isLogin, question.allQuestionsUser);
router.get('/detailuser', auth.isLogin, question.detailQuestionUser);
router.post('/create', auth.isLogin, question.createQuestion);
router.put('/update/:id', auth.isLogin, question.updateQuestion);
router.delete('/remove/:id', auth.isLogin, question.removeQuestion);
router.get('/vote/:id', auth.isLogin, question.voteAnswer);


module.exports = router;
