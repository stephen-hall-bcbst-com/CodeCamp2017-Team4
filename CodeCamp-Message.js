'use strict';

var memory = require('./CodeCamp-Memory.js');
var Helper = require('./Helpers.js');
var birthstoneData = require('./data/birthstones');

module.exports = {
    /**
     * @param {string} msg
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(msg, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        var lc = msg.toLowerCase();
        // check for birthstones first
        if (birthstone(lc, channelName, Slack)) {
            return;
        }

        // response variables
        var response = (response);
        var grat = 'you are welcome';
        var greetings = 'Hi there';
        var thanks = 'Thank you';
        var rap = 'What is rapping? i was born 3 days ago';
       // var stone = 'What is your birth month?';
        
        // variables for birthstone function
        /*
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
        */
        
        
        
        // randomizer for quotes
        var quotes = ['Dont cry because it is over smile because it happened.',
         'Dwell on the beauty of life watch the stars and see yourself running with them.', 
         'Those who wish to sing always find a song.', 
         'Every problem has a gift for you in its hand.', 
         'Everything great was accomplished by fools who dream.'];
       
        
        // Code for activating quotes. Used so no quote is repeated until all have been used once.  
        if (lc.includes('tell me a quote')) {
            Slack.postMessageToChannel(channelName, quotes[memory.lastQuoteTold]);
            memory.lastQuoteTold = memory.lastQuoteTold + 1; 
            if (memory.lastQuoteTold == quotes.length) {
                memory.lastQuoteTold = 0; 
            }
        

       

        // List of jokes. 
        var jokes = ["What do you call a fake noodle? an impasta.", 
                    "How does a penguin build it’s house? Igloos it together.", 
                    "What did the ocean say to the shore? Nothing, it just waved.", 
                    "Why do crabs never give to charity? Because they’re shellfish.", 
                    "What do you call a man with no nose and no body? Nobody nose."];

        // Code for activating jokes. No joke is told more than once until all have been used once         
        } else if (lc.includes('tell me a joke')) {
            Slack.postMessageToChannel(channelName, jokes[memory.lastJokeTold]);
            memory.lastJokeTold = memory.lastJokeTold + 1; 
            if (memory.lastJokeTold == jokes.length) {
                memory.lastJokeTold = 0; 
            }
        





        // The bots responses to things you say
        
        // Used if user says hello with an uppercases 'h'; 
       
        // Used if user says hello with a lowercase 'h'; 
        } else if (lc.includes("hello")) {
            response = greetings;
        // Used if user says good job with an upper case 'g';
        } else if (lc.includes('good job')) {
           response = thanks; 
         // Used if user says thank you with a lower case 't';
        } else if (lc.includes('thank you')) {
            response = grat;
         // Used if user says rap for me with a lowercase 'r'; 
        } else if (lc.includes('rap for me')) {
            response = rap;
        } else {
            response = "Im sorry I can't respond to that. I'm not as smart as you."; 
        }
        
         // The start of the BTM

        Slack.postMessageToChannel(channelName, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};

/**
 * DESCRIBE THE FUNCTION HERE
 * 
 * @param {string} msg
 * @param {string} channelName
 * @param {Slackbots} Slack API
 * @return {boolean} true if birthstone message handled 
 */
function birthstone(msg, channelName, Slack) {
    var stones = birthstoneData.birthstones;
    var response = "";

    // Used if user says tell me my birthstone with an uppercase 'T'
   if (msg.toLowerCase().includes('tell me my birthstone')) {
        response = "What is your birth month?";
        memory.birthstoneConversation = true;
        Slack.postMessageToChannel(channelName, response);
        return true;
    } 

    if (memory.birthstoneConversation) {
        var monthName = Helper.getLastWord(msg);
        
        // clean up the month name
        monthName = monthName.toLowerCase();
        monthName = monthName.trim();
        monthName = monthName.replace(".", "");
        monthName = monthName.replace(",", "");

        if (memory.birthstoneConversation) {
            for (var x = 0; x < stones.length; x++) {
                if (stones[x].month == monthName) {
                    // found a match
                    response = "The birthstone for " + monthName + " is " + stones[x].name + ".  " + stones[x].description;
                    response = response + " Here's a picture for you: " + stones[x].image + ".";
                    memory.birthstoneConversation = false;
                } 
            }

            if (response == "") {
                response = "I don't recognize that month.";
            }
        }

        Slack.postMessageToChannel(channelName, response);
        return true;
    }

    return false;
}

