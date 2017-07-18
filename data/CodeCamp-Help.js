'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'I heard you needed help\n. With me you have some options!First ask me a question. You can ask me to add or even what the weather is!I can tell you quotes that are inspiring and also make you laugh with some jokes. When you are ready type what you want to tell or ask me in the message bar and I will respond as soon as I have the answer.Enjoy!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
