'use strict';

var memory = require('./CodeCamp-Memory.js');

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
        var grat = 'you are welcome';
        var greetings = 'Hi there';
        var thanks = 'Thank you';
        var rap = 'What is rapping? i was born 3 days ago';
        var stone = 'What is your birth month?';
        
        // variables for birthstone function
        var jan = 'garnet';
        var feb = 'amethyst';
        var march = 'aquamarine';
        var april = 'diamond';
        var may = 'emerald';
        var june = 'pearl';
        var july = 'ruby';
        var august = 'peridot';
        var september = 'sapphire';
        var october = 'opal';
        var november = 'topaz';
        var december = 'tanzanite, zircon and turquoise';
        
        
        
        
        // randomizer for quotes
        var quotes = ['Dont cry because it is over smile because it happened.',
         'Dwell on the beauty of life watch the stars and see yourself running with them.', 
         'Those who wish to sing always find a song.', 
         'Every problem has a gift for you in its hand.', 
         'Everything great was accomplished by fools who dream.'];
       
        
        // Code for activating quotes. Used so no quote is repeated until all have been used once.  
        if (message.includes('Tell me a quote')) {
            Slack.postMessageToChannel(channelName, quotes[memory.lastQuoteTold]);
            memory.lastQuoteTold = memory.lastQuoteTold + 1; 
            if (memory.lastQuoteTold == quotes.length) {
                memory.lastQuoteTold = 0; 
            }
        }

       

        // List of jokes. 
        var jokes = ["What do you call a fake noodle? an impasta.", 
                    "How does a penguin build it’s house? Igloos it together.", 
                    "What did the ocean say to the shore? Nothing, it just waved.", 
                    "Why do crabs never give to charity? Because they’re shellfish.", 
                    "What do you call a man with no nose and no body? Nobody nose."];

        // Code for activating jokes. No joke is told more than once until all have been used once         

        if (message.includes('Tell me a joke')) {
            Slack.postMessageToChannel(channelName, jokes[memory.lastJokeTold]);
            memory.lastJokeTold = memory.lastJokeTold + 1; 
            if (memory.lastJokeTold == jokes.length) {
                memory.lastJokeTold = 0; 
            }
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



        // The start of the BTM
        if (message.includes('Tell me my birthstone')) {
            Slack.postMessageToChannel(channelName, stone);
        }
        
        if (message.includes('tell me my birthstone')) {
            Slack.postMessageToChannel(channelName, stone);
        }

        
        // birthstone telling machine or BTM
        if (message.includes('January')) {
            Slack.postMessageToChannel(channelName, jan);
        }

        if (message.includes('February')) {
            Slack.postMessageToChannel(channelName, feb);
        }

        if (message.includes('March')) {
            Slack.postMessageToChannel(channelName, march);
        }

        if (message.includes('April')) {
            Slack.postMessageToChannel(channelName, april);
        }

        if (message.includes('May')) {
            Slack.postMessageToChannel(channelName, may);
        }

        if (message.includes('June')) {
            Slack.postMessageToChannel(channelName, june);
        }

        if (message.includes('July')) {
            Slack.postMessageToChannel(channelName, july);
        }

        if (message.includes('August')) {
            Slack.postMessageToChannel(channelName, august);
        }

        if (message.includes('September')) {
            Slack.postMessageToChannel(channelName, september);
        }

        if (message.includes('October')) {
            Slack.postMessageToChannel(channelName, october);
        }

        if (message.includes('November')) {
            Slack.postMessageToChannel(channelName, november);
        }

        if (message.includes('December')) {
            Slack.postMessageToChannel(channelName, december);
        }
        
        


        

        
        

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
