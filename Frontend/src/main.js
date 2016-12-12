/**
 * Created by Marjana on 12/11/2016.
 */

$(function(){
    //This code will execute when the page is ready
    var createCard = require('./pizza/createCard');
    var examples = require('./pizza/examples');
    var cardList = require('./cardList');

    examples.initialiseMenu();
    createCard.initialise();


});