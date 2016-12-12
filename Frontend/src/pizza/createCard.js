/**
 * Created by Marjana on 12/11/2016.
 */

var templates = require('../templates');
var cardList = require('../cardList');

var $choose_image = $("#choose-image");
var filter= {
    birthday: 0,
    christmas: 1,
    new_year: 2
}
function showImagesList(list) {
    $choose_image.html("");
    function showOneImage(card) {
        var html_image = templates.createCard_OneItem({card: card});
        var $node_image = $(html_image);
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

function initialise() {
    showImagesList(cardList);
    addFilters();
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

exports.filterImages = filterImages;
exports.initialise = initialise;



var element = $(".right-panel"); // global variable
var getCanvas; // global variable

$('.left-panel input,textarea').each(function(){

    $(this).bind('blur keypress', function() {

        if($(this).attr('id') == 'img') $('#new_img').attr('src',$(this).val());
        else $('#new_' + $(this).attr('id')).text($(this).val());

    });
});


$(".preview").on('click', function () {
    var can;
    $(".previewImage").empty(can);
    html2canvas(element, {
        onrendered: function (canvas) {
            can = canvas;
            $(".previewImage").append(can);
            getCanvas = canvas;
        }
    });
    // $(".card-container").hide();
});


$(".download").on('click', function () {
    var imageData = getCanvas.toDataURL("image/jpg");
    // Now browser starts downloading it instead of just showing it
    var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
    $(".download").attr("download", "greeting_card.jpg").attr("href", newData);
});

