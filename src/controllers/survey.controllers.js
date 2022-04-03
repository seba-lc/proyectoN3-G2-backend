const Survey = require('./../models/Survey');

const surveysCtrl = {};

/*surveyName, questions ([]), answers ([]), category, token */
surveysCtrl.createSurvey = async (req, res) => {
  try {
    const newSurvey = await new Survey(req.body);
    await newSurvey.save();
    res.status(200).json({
      message: 'Encuesta cargada correctamente, a la espera de ser aprobada por el administrador'
    });

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
    const surveys = await Survey.find({state: false}, '-_id');
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

/* token, category */
surveysCtrl.getSurveysByCategory = async (req, res) => {
  try {
    const surveys = await Survey.find({category: req.params.category}, '-_id -createdAt -updatedAt');
    if(surveys.length === 0){
      res.status(200).json({message: 'No hay encuestas de la categoría especificada'});
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

module.exports = surveysCtrl;