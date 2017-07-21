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
        var response = "I'm sorry I can't respond to that. I'm not as smart as you.";
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
        
        // Used if user says hello with an uppercases 'h'; 
        if (message.includes('Hello')) {
            response = greetings; 
        }
        // Used if user says hello with a lowercase 'h'; 
        if (message.includes("hello")) {
            response = greetings;
        }
        // Used if user says Good job with an upper case 'G';
        if (message.includes('Good job')) {
            response = thanks; 
        }
        // Used if user says good job with an upper case 'g';
        if (message.includes('good job')) {
           response = thanks; 
        }
        // Used if user says thank you with an upper case 'T'; 
        if (message.includes('Thank you')) {
            response = grat;
        }
        // Used if user says thank you with a lower case 't';
        if (message.includes('thank you')) {
            response = grat;
        }
        // Used if user says rap for me with an uppercase 'R'; 
        if (message.includes('Rap for me')) {
            response = rap;
        }
        // Used if user says rap for me with a lowercase 'r'; 
        if (message.includes('rap for me')) {
            response = rap;
        }
         
         // The start of the BTM

        // Used if user says tell me my birthstone with an uppercase 'T'
        if (message.includes('Tell me my birthstone')) {
            response = stone;
        }
        // Used if user says tell me my birthstone with a lowercase 't'
        if (message.includes('tell me my birthstone')) {
            response = stone;
        }

        // birthstone telling machine or BTM
        // birthstone for January;
        if (message.includes('January')) {
            response = jan;
        }
        // birthstone for February
        if (message.includes('February')) {
            response = feb;
        }
        // birthstone for March 
        if (message.includes('March')) {
            response = march;
        }
        // birthstone for April
        if (message.includes('April')) {
            response = april;
        }
        // birthstone for May 
        if (message.includes('May')) {
            response = may;
        }
        // birthstone for June 
        if (message.includes('June')) {
            response = june;
        }

        // birthstone for July 
        if (message.includes('July')) {
            response = july;
        }

        // birthstone for August 
        if (message.includes('August')) {
            response = august;
        }

        // birthstone for September 
        if (message.includes('September')) {
            response = september;
        }

        // birthstone for October 
        if (message.includes('October')) {
            response = october;
        }

        // birthstone for November 
        if (message.includes('November')) {
            response = november;
        }

        // birthstone for December 
        if (message.includes('December')) {
            response = december;
        }
        
        


        

        
        

        







      

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
