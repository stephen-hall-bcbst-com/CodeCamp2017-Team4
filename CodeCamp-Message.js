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
        
       
        // response variables
        var response = "sorry i dont know how to react to that";
        var grat = 'youre welcome';
        var greetings = 'Hi there';

        // what makes the bot respond to hello
        if (message.includes('Hello')) {
            greetings = 'Hi there';
        }

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
