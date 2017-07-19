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
        
        if (qlc.includes("how") && qlc.includes("weather")) {
            // handle weather question
      } else if (qlc.includes("why") && qlc.includes("sky") && qlc.includes("blue")) {
            // handle sky blue question
        }
        var qlc = ('');
        var response = ('');
        
       
        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
