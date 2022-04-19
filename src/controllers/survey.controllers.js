const Survey = require('./../models/Survey');

const surveysCtrl = {};

/*surveyName, questions ([idQuestion1, idQuestion2, etc.]), category, token */
surveysCtrl.createSurvey = async (req, res) => {
  try {
    const newSurvey = await new Survey(req.body);
    await newSurvey.save();
    res.status(200).json(newSurvey);

  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al crear la encuesta, intentelo nuevamente más tarde'
    })
  }
}

/*adminToken */
surveysCtrl.getPendingSurveys = async (req, res) => {
  try {
    console.log('hola');
    const surveys = await Survey.find({state: false}).populate('questions', '-_id');
    if(surveys.length === 0){
      res.status(200).json({message: 'No hay encuestas pendientes de aprobación'});
      return
    }
    res.status(200).json(surveys);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener las encuestas'
    })
  }
}

surveysCtrl.getPublishedSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find({state: true}).populate('questions', '-_id');
    if(surveys.length === 0){
      res.status(200).json([]);
      return
    }
    res.status(200).json(surveys);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener las encuestas'
    })
  }
}

/* token, category */
surveysCtrl.getSurveysByCategory = async (req, res) => {
  try {
    const surveys = await Survey.find({category: req.params.category, state:true}, '-updatedAt').populate('questions', '-_id');
    if(surveys.length === 0){
      res.status(200).json([]);
      return
    }
    res.status(200).json(surveys);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener las encuestas'
    })
  }
}

surveysCtrl.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id).populate('questions','-_id');
    res.status(200).json(survey);
    console.log(survey);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener la encuesta'
    })
  }
}

surveysCtrl.updateSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, {state: true});
    res.status(200).json({
      message: 'Encuesta actualizada'
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al actualizar la encuesta'
    })
  }
}

module.exports = surveysCtrl;