/**
 * Created by Marjana on 12/11/2016.
 */

$(function(){
    //This code will execute when the page is ready
    var showImages = require('./pizza/showImages');
    var examples = require('./pizza/examples');
    var cardList = require('./cardList');
    var createCard = require('./pizza/createCard');
    examples.initialiseMenu();
    showImages.initialise();


});