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
        
        var qlc = question.toLowerCase('How is the weather?');
        var response = "I don't understand the question...";
       
        // what to answer when asked about weather 
        if (qlc.includes("How is the weather today.")) {
         response = "Today is partly cloudy with a high temperature of 96 degrees and a low of 73";
     
      // what to answer when asked why is the sky blue 
    } else if (qlc.includes("why") && qlc.includes("sky") && qlc.includes("blue")) {
            // handle sky blue question
        }
            // what to answer when asked about birthday 
        if (qlc.includes("What is your birthday"));
        response= "July 18th 2017";
             
              // calls out function
        Slack.postMessageToChannel(channelName, response);

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
