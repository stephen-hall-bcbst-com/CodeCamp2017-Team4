'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 30,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
        
        var bored = ["Where did you go? I tell jokes, quotes and I can even tell you the weather. You cant get bored with me!",
        "Give me attention",
        "Are you as bored as i am?",
        "Being bored is an insult to ones self"];

        Slack.postMessageToChannel(channelName, bored[memory.lastBoreTold]);
            memory.lastBoreTold = memory.lastBoreTold + 1; 
            if (memory.lastBoreTold == bored.length) {
                memory.lastBoreTold = 0; 
            }
         }


        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
