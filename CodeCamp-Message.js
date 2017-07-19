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
        var thanks = 'Thank you';
        var joke = 'What do you call a fake noodle, an impasta';



        // The bots responses
        if (message.includes('Hello')) {
             Slack.postMessageToChannel(channelName, greetings);
        }

        if (message.includes('Good job')) {
             Slack.postMessageToChannel(channelName, thanks);
        }

        if (message.includes('Thank you')) {
            Slack.postMessageToChannel(channelName, grat);
        }

        if (message.includes('Tell me a joke')) {
            Slack.postMessageToChannel(channelName, joke);
        }



        
        

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
