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
 $('#new_' + $(this).attr('id')).text($(this).val());
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
var imageData1;
$(".download").on('click', function () {
    var imageData = getCanvas.toDataURL("image/png");
    console.log(imageData);

    // Now browser starts downloading it instead of just showing it
    var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $(".download").attr("download", "greeting_card.png").attr("href", newData);
});


$(".send-email").on('click', function () {
  //  alert("bla");
    var imageData = getCanvas.toDataURL("image/png");
    console.log(imageData);

 // $(".send_image").value = imageData;
   // document.getElementById("send_image").innerHTML = imageData;
   // if (!getElementById("send_image")){
   //     alert("loh");
  //  }
   // getElementById("send_image").value = imageData;
   // var bla = getElementById("send_image").value;
  //  alert("bla");


//var element1 = $(".send_image").val();
//console.log(element1 );
alert("bla");
var myform = $("form#myform");
var $myform = $(myform);
    $myform.find("#send_image").text(imageData);
   // alert($myform.find("input#send_image").text(imageData));
    myform.submit(function(event){
    event.preventDefault();

    var params = myform.serializeArray().reduce(function(obj, item) {
        obj[item.name] = item.value;
        return obj;
        console.log(obj);
    }, {});

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";

    var template_id = "cardemail";
    myform.find("button").text("Sending...");
    emailjs.send(service_id,template_id,params)
        .then(function(){
            alert("Email send!");
            window.location.replace('card.html');
        }, function(err) {
            alert("Send email failed!\r\n You write a wrong name or email address.\n Try again ");
            myform.find("button").text("Send");
        });
    return false;
});

});