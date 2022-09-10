// Manejar todos los INTENTS

const Alexa = require('ask-sdk-core');

const { SessionEndedRequest, HelpIntent, CancelAndStopIntentHandler, UnhandledIntent } = require('./intents/AmazonIntents');
const { LaunchRequest } = require('./intents/LaunchIntent');
const { HelloWorldIntentHandler } = require('./intents/HelloWorldIntent');

const createSkill = () => {
  const skillBuilder = Alexa.SkillBuilders.custom();
  return skillBuilder.addRequestHandlers(
    LaunchRequest,
    HelloWorldIntentHandler,
    SessionEndedRequest,
    HelpIntent,
    CancelAndStopIntentHandler,
    UnhandledIntent
  )
    .withApiClient(new Alexa.DefaultApiClient())
    .withCustomUserAgent('prueba/v1')
    .create()
}

module.exports = { createSkill };