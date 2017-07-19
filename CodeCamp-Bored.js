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
        
        Slack.postMessageToChannel(channel, ' Where did you go? I tell jokes, add numbers, tell you the weather, and even give you advice, you cant get bored with me!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
