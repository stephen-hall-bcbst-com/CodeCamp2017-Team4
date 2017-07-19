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

       // used when message JUST says "help" or "help me"; 
        Slack.postMessageToChannel(channelName, "I heard you needed help! I can answer simple questions you have about how I work. You can also ask me questions about math, the weather, and I even tell jokes and quotes.Just make sure to include a question mark when asking a question!");
       
       // used when message says "help" and specifies that they need help with how to find out the weather;
        if (message.includes("weather")) {
            Slack.postMessageToChannel(channelName, "If you type your question about the weather in the message bar, I can tell you what the weather is today!");
       
       // used when message says "help" and specifies that they need help with how to ask the bot to tell a joke;
     } else if (message.includes("joke")) {
            Slack.postMessageToChannel(channelName, "If you ask the bot to tell you a joke in the message bar it is sure to make you laugh.");
      
       // used when message says "help" and specifies with how to ask the bot to add two numbers;  
     } else if (message.includes("adding")) {
         Slack.postMessageToChannel(channelName, "If you ask the bot to add two numbers and include the numbers you would like to add with the plus sign inbetween, the bot will add your two values.");

    /* used when message says "help" and specifies with how to ask the bot to tell you a quote;
     } else if (message.includes("quote")) {
            Slack.postMessageToChannel(channelName, "If you ask the bot to tell you a quote in the message bar it will respond with a quote.");
        }
        */

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
