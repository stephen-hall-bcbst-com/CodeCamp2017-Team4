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
        var joke = 'What do you call a fake noodle? an impasta.';
        var rap = 'What is rapping? i was born 3 days ago';

        // randomizer for jokes
        
        
        var jokes = ["Random1", "Random2", "Random3"];

        var random = Math.floor((Math.random() * 3));
        if (message.includes('random')) {
        Slack.postMessageToChannel(channelName, jokes[random]);
        }








        // The bots responses to things you say
        if (message.includes('Hello')) {
            Slack.postMessageToChannel(channelName, greetings);
        }

        if (message.includes('hello')) {
            Slack.postMessageToChannel(channelName, greetings);
        }

        if (message.includes('Good job')) {
            Slack.postMessageToChannel(channelName, thanks);
        }

        if (message.includes('good job')) {
            Slack.postMessageToChannel(channelName, thanks);
        }

        if (message.includes('Thank you')) {
            Slack.postMessageToChannel(channelName, grat);
        }

        if (message.includes('thank you')) {
            Slack.postMessageToChannel(channelName, grat);
        }

        if (message.includes('Tell me a joke')) {
            Slack.postMessageToChannel(channelName, joke);
        }

        if (message.includes('tell me a joke')) {
            Slack.postMessageToChannel(channelName, joke);
        }

        if (message.includes('Rap for me')) {
            Slack.postMessageToChannel(channelName, rap);
        }

        if (message.includes('rap for me')) {
            Slack.postMessageToChannel(channelName, rap);
        }

        

        
        

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
