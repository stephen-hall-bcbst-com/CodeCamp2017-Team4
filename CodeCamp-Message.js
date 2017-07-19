'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        
       
        
        Slack.postMessageToChannel(channelName, 'Hello, how are you?');
        var response = "sorry i dont know how to react to that";
        var lc = question.toLowerCase();

        if (lc.includes('Thank')) {
            response = 'your welcome!';
        } else if (lc.includes('Good job')) {
            response = 'your welcome';
            
        }







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
