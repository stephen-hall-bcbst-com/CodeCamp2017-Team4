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
        var rap = 'What is rapping? i was born 3 days ago';
        


        // randomizer for quotes
        var quotes = ['Dont cry because it is over smile because it happened.', 'Dwell on the beauty of life watch the stars and see yourself running with them.', 'Those who wish to sing always find a song.', 'Every problem has a gift for you in its hand', 'Everything great was accomplished by fools who dream'];
        var RQ = Math.floor((Math.random() * 5));
        if (message.includes('Tell me a quote')) {
            Slack.postMessageToChannel(channelName, quotes[RQ]);
        }


        // randomizer for jokes
        var jokes = ["What do you call a fake noodle? an impasta.", "How does a penguin build it’s house? Igloos it together.", "What did the ocean say to the shore? Nothing, it just waved.", "Why do crabs never give to charity? Because they’re shellfish.", "What do you call a man with no nose and no body? Nobody nose."];
        var random = Math.floor((Math.random() * 5));
       // code for activating randomizer
        if (message.includes('Tell me a joke')) {
        Slack.postMessageToChannel(channelName, jokes[random]);
        }

        if (message.includes('tell me a joke')) {
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

        if (message.includes('Rap for me')) {
            Slack.postMessageToChannel(channelName, rap);
        }

        if (message.includes('rap for me')) {
            Slack.postMessageToChannel(channelName, rap);
        }

        if (message.includes('Tell me a quote')) {
            Slack.postMessageToChannel(channelName, quote)
        }



        

        
        

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
