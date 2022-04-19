const Answer = require('./../models/Answer');

const answerCtrl = {};

answerCtrl.postUserAnswer = async (req, res) => {
  try {
    const newAnswer = await new Answer(req.body);
    await newAnswer.save();
    res.status(200).json({
      ok: true,
      message: 'Respuesta almacenada correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al cargar la respuesta'
    })
  }
}

answerCtrl.getAnswerByUser = async (req, res) => {
  try {
    const answer = await Answer.findOne({user: req.body.email, surveyName: req.body.surveyName});
    res.status(200).json(answer);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al cargar la respuesta'
    })
  }
}

module.exports = answerCtrl;