'use strict';
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE! 
        // *********************************************************************
        

        
        var response = "I don't understand the question...";
               
        // what to answer when asked about weather 
    if (question.includes("how is the weather today?")) {
        response = "today is partly cloudy with a high temperature of 96 degrees and a low of 73";
     
      // what to answer when asked why is the sky blue 
    } if (question.includes("why") || question.includes("sky") || question.includes("blue")) {
            response = "why is the sky blue."; 
            // handle sky blue question
           
            // what to answer when asked about birthday 
    } if (question.includes("what is your birthday")) {
             response = "July 18th 2017";
    }
              // calls out function
        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
