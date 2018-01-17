const express = require('express');
const router = express.Router();
const answer = require('../controllers/answerControllers');
const auth = require('../middleware/auth');

router.post('/create/:id', answer.createAnswer);
router.delete('/remove/:id/:idanswer', auth.isLogin, answer.removeAnswer);
router.get('/vote/:id/:idanswer', auth.isLogin, answer.voteAnswer);

module.exports = router;
