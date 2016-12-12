/**
 * Created by Marjana on 12/12/2016.
 */
var templates = require('../templates');
var storage = require('./storage');

var Card = [];
var savedCart = storage.get('card');

//HTML едемент куди будуть додаватися піци
var $card = $(".right-panel");

function creation(card) {

        Card.push({
            card: card
        });
    updateCart();
}

function initialiseCard() {
    updateCart();
}
function updateCart() {
     storage.set('card',Card);
    $card.html("");
    function showOnePizzaInCart(cart_item) {
        var html_code = templates.createCard_ByYourself(cart_item);
        var $node = $(html_code);
        $card.append($node);
    }
    Card.forEach(showOnePizzaInCart);
}
exports.creation = creation;
exports.initialiseCard = initialiseCard;

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
    $(".card-preview").show();

});


$(".download").on('click', function () {
    var imageData = getCanvas.toDataURL("image/jpg");
    // Now browser starts downloading it instead of just showing it
    var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
    $(".download").attr("download", "greeting_card.jpg").attr("href", newData);
});

