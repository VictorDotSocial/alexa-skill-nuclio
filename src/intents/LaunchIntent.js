const LaunchRequest = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      const speechText = 'Hola, bienvenido a Sandía Roja.';
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
  
    },
  };
  
  module.exports = { LaunchRequest }