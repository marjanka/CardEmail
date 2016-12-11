/**
 * Created by Marjana on 12/11/2016.
 */

var templates = require('../templates');
var examples = require('./examples');
var cardList = require('../cardList');

//HTML едемент куди будуть додаватися піци
var $card_list = $(".example");

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

function showCardList(list) {
    //Очищаємо старі піци в кошику
    $card_list.html("");

    //Онволення однієї піци
    function showOneCard(card) {
        var html_code = templates.examples_OneItem({card: card});

        var $node = $(html_code);

        $card_list.append($node);
    }

    list.forEach(showOneCard);
}

function filterCard(filter) {
    //Масив куди потраплять піци які треба показати
    var card_shown = [];

    cardList.forEach(function(card){
        //Якщо піка відповідає фільтру
        // pizza_shown.push(pizza);

        //TODO: зробити фільтри
    });

    //Показати відфільтровані піци
    showCardList(card_shown);
}

function initialiseMenu() {
    //Показуємо усі піци
    showCardList(cardList)
}

exports.filterCard = filterCard;
exports.initialiseMenu = initialiseMenu;