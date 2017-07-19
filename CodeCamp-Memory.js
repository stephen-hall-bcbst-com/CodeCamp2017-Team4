'use strict';

var botData = require('./data/bot');
var askedAboutWeather = false;
var askedAboutAdding = false;
var lastJokeTold = 0;

module.exports = {
    botData: botData,
    askedAboutWeather: askedAboutWeather,
    askedAboutAdding: askedAboutAdding,
    lastJokeTold: lastJokeTold,
};
