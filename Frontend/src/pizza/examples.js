/**
 * Created by Marjana on 12/11/2016.
 */


var templates = require('../templates');
var cardList = require('../cardList');

var $examples_list = $(".example");

function showExamplesList(list) {
    $examples_list.html("");


    function showOneExample(card) {
        var html_code = templates.examples_OneItem({card: card});

        var $node = $(html_code);

        $examples_list.append($node);
    }

    list.forEach(showOneExample);
}

function filterExamples(filter) {

    var card_shown = [];

    cardList.forEach(function(card){
        // pizza_shown.push(pizza);

    });


    showExamplesList(card_shown);
}

function initialiseMenu() {
    showExamplesList(cardList)
}

exports.filterExamples = filterExamples;
exports.initialiseMenu = initialiseMenu;