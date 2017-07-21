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
          
         var response = "I heard you needed help! I can answer simple questions you have about how I work. You can also ask me questions about math, the weather, and you can learn a little bit about me. I even tell jokes and quotes and can inform you of your birthstone. Just make sure to include a question mark when you ask a question.";
        
        // used when message says "help" and specifies that they need help with how to find out the weather;
        if (message.includes("weather")) { 
            if (memory.askedAboutWeather == false) {
                response = "If you type your question about the weather in the message bar, I can tell you what the weather is today!";
                 memory.askedAboutWeather = true;
        // used when user has asked the same help question more than once  
            } else {   
                response = "You have already recieved help regarding this subject.";
            } 
       
        // used when message says "help" and specifies that they need help with how to ask the bot to tell a joke;
        } else if (message.includes("joke")) {
                response = "If you say to me  'Tell me joke' in the message bar I am sure to make you laugh. Just make sure to use a capital 'T' ";
            
        // used when message says "help" and specifies that they need help with how to ask the bot to add two numbers;  
        } else if (message.includes("adding")) {
            if (memory.askedAboutAdding == false) {
                response = "If you ask me to add two numbers and include the numbers you would like to add with the plus sign, I will add your two values. Just make sure that your question is formatted like this: ' What is 2 + 2 ?' ";
                memory.askedAboutAdding = true;
        // used when user has asked the same help question more than once 
          } else if (memory.askedAboutAdding == true) {
                response = " You have already recieved help regarding this subject."; 
          }
       
        // used when message says "help" and specifies that they need help with how to tell to the bot to tell a quote;
        } else if (message.includes("Quote")) {
            response = "If you say to me  'Tell me a quote' I will respond with a quote. Just make sure to use a capital 'T'";
        }
        
        // used when message says "help" and specifies that they need help with how to tell the bot to tell the user their birthstone;
         if (message.includes("birthstone")) {
            if (memory.askedAboutBirthstone == false) {
                 response = "If you say to me 'Tell me my birthstone' I will respond with 'What is your birth month'. When you tell me your birthmonth I will then tell you your birthstone";
                 memory.askedAboutBirthstone = true;
        // used when user has asked the same help message
         } else if (memory.askedAboutBirthstone == false) {
                response = " You have already recieved help regarding this subject.";
         }
         }  
        
            
        

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
