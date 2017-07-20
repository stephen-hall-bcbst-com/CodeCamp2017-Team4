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
        "Give me attention.",
        "Are you as bored as i am?",
        "Being bored is an insult to ones self."];

        var random = Math.floor((Math.random() * 3));
        Slack.postMessageToChannel(channel, bored[random]);


        
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
