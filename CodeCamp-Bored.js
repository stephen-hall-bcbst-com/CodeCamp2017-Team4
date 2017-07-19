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
        
        Slack.postMessageToChannel(channel, ' Where did you go? I tell jokes and quotes, add numbers, and I can even tell you the weather. You cant get bored with me!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
