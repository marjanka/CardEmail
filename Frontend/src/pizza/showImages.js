/**
 * Created by Marjana on 12/11/2016.
 */

var templates = require('../templates');
var cardList = require('../cardList');
var createCard = require('./createCard');

var $choose_image = $("#choose-image");
var filter= {
    birthday: 0,
    christmas: 1,
    new_year: 2
}
function showImagesList(list) {
    $choose_image.html("");
    function showOneImage(card) {
        var html_image = templates.showImages_OneItem({card: card});
        var $node_image = $(html_image);

        $node_image.find(".chosen_image_for_card").click(function(){
            $(".choose-image").hide();
            createCard.creation(card);
            $(".card-container").show();
        });

        $choose_image.append($node_image);
    }
    list.forEach(showOneImage);
}

function filterImages(filter) {
    var examples_shown = [];
    cardList.forEach(function(card){
        if(filter == 0){
            if(card.title.birthday) {
                examples_shown.push(card);
            }}
        else if(filter == 1){
            if(card.title.christmas) {
                examples_shown.push(card);
            }}
        else if(filter == 2){
            if(card.title.new_year) {
                examples_shown.push(card);
            }}
    });
    showImagesList(examples_shown);
}

function addFilters() {

    $("#filter-birthday").click(function (e) {
        filterImages(filter.birthday);
    });
    $("#filter-christmas").click(function (e) {
        filterImages(filter.christmas);
    });
    $("#filter-new_year").click(function (e) {
        filterImages(filter.new_year);
    });
    $("#filter-all").click(function (e) {
        showImagesList(cardList);
    });
}

function initialise() {
    showImagesList(cardList);
    addFilters();
}

exports.filterImages = filterImages;
exports.initialise = initialise;

