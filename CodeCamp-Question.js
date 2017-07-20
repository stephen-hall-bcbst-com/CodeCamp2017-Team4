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
        

        
        var response = "I don't know the answer to that question. I'm not as smart as you.";
               
             // what to answer when asked about weather 
    if (question.includes("How is the weather today?")) {
        response = "Today is partly cloudy with a high temperature of 96 degrees and a low of 73.";
     
             // what to answer when asked why is the sky blue 
    } if (question.includes("why") && question.includes("sky") && question.includes("blue")) {
            response = "Blue is scattered by air molecules when sunlight reaches Earth. That is why we see a blue sky."; 
            
           
            // what to answer when asked about birthday 
    } if (question.includes("When is your birthday?")) {
             response = "My birthday is July 18th, 2017.";
    } if (question.includes("+") || question.includes("plus")) {
        question.replace('?', '');
        question.replace('+', ' ');
        question.replace('plus', ' ');
        var array = question.split(" ");
        var result = 0;
        for (var x = 0; x < array.length; x++) {
            if (!isNaN(array[x])) {
                result += parseInt(array[x]);
            }
        }
        response = result;
     }

              // calls out function
        Slack.postMessageToChannel(channelName, response);

        

        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
