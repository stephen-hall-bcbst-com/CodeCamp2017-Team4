'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

         var memory = require('./CodeCamp-Memory.js');

         var response = "I heard you needed help! I can answer simple questions you have about how I work. You can also ask me questions about math, the weather, and I even tell jokes and quotes.Just make sure to include a question mark when you ask a question.";
        
        // used when message says "help" and specifies that they need help with how to find out the weather;
        if (message.includes("weather")) {
            response = "If you type your question about the weather in the message bar, I can tell you what the weather is today!";
        // used when user has asked the same help question more than once  
            if (memory.askedAboutWeather == true) {
                response = "You have already asked this question.";
            }
       
        // used when message says "help" and specifies that they need help with how to ask the bot to tell a joke;
        } else if (message.includes("joke")) {
            response = "If you say to the bot to 'tell me joke' in the message bar it is sure to make you laugh.";
            
        // used when message says "help" and specifies that they need help with how to ask the bot to add two numbers;  
        } else if (message.includes("adding")) {
            response = "If you ask the bot to add two numbers and include the numbers you would like to add with the plus sign inbetween, the bot will add your two values.";
        // used if user asks the same help question more than once    
            if (memory.askedAboutAdding == true) {
                response = "You have already asked this question.";
            }
       
        // used when message says "help" and specifies that they need help with how to tell to the bot to tell a quote
        } else if (message.includes("quote")) {
            response = "If you say to the bot 'tell me a quote' the bot will respond with a quote.";
           }
   
            Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
