    /**
     * Created by Marjana on 12/11/2016.
     */

    $(function(){
        //This code will execute when the page is ready
        var showImages = require('./card/showImages');
        var examples = require('./card/examples');
        var cardList = require('./cardList');
        var createCard = require('./card/createCard');
        examples.initialiseMenu();
        showImages.initialise();
        createCard.initialiseCard();
    });