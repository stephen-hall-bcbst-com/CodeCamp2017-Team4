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
        
        var lc = question.toLowerCase();
        
        var response = "I don't know the answer to that question. I'm not as smart as you.";
               
             // what to answer when asked about weather 
    if (lc.includes("how is the weather today?")) {
        response = "Today is partly cloudy with a high temperature of 96 degrees and a low of 73.";
     
             // what to answer when asked why is the sky blue 
    } if (lc.includes("why") && lc.includes("sky") && lc.includes("blue")) {
            response = "Blue is scattered by air molecules when sunlight reaches Earth. That is why we see a blue sky."; 
           

            // what to answer when asked about birthday 
    } if (lc.includes("when is your birthday?")) {
             response = "My birthday is July 18th, 2017.";
            // Adding a array to add numbers
    } if (lc.includes("+") || lc.includes("plus")) {
        lc = lc.replace('?', '');
        lc = lc.replace('+', ' ');
        lc = lc.replace('plus', ' ');
        var array = lc.split(' ');
        var result = 0;
        for (var x = 0; x < array.length; x++) {
            var num = parseInt(array[x]);
            if (!isNaN(num)) {
                result += num;
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
