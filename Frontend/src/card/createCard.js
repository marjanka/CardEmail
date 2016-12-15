    /**
     * Created by Marjana on 12/12/2016.
     */
    var templates = require('../templates');
    var storage = require('./storage');

    var Card = [];
    var $card = $(".right-panel");
    var element = $(".right-panel");
    var getCanvas;
    var myform = $("form#myform");

    function creation(card) {
            Card.push({
                card: card
            });
        initialiseCard();
    }

    function initialiseCard() {
        storage.set('card',Card);
        $card.html("");
        function showChosenCard(card) {
            var html_code = templates.createCard_ByYourself(card);
            var $node = $(html_code);
            $card.append($node);
        }
        Card.forEach(showChosenCard);
    }

    exports.creation = creation;
    exports.initialiseCard = initialiseCard;

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

    //var imageData1;
    $(".download").on('click', function () {
        var imageData = getCanvas.toDataURL("image/png");
        console.log(imageData);
        var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $(".download").attr("download", "greeting_card.png").attr("href", newData);
    });

    $(".send-email").on('click', function () {
        $(".card-preview").hide();
        $(".card-container").hide();
        $("#myform").show();

        var template = $(".right-panel").html();
      var send_card =$("#send_image").html(template);

      //  var imageData = getCanvas.toDataURL("image/png", 0.1);
      //$("input#send_image").val(imageData);

        myform.submit(function(event){
        event.preventDefault();
        var params = myform.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
            console.log(obj);
        }, {});
        var service_id = "default_service";
        var template_id = "cardemail";
        myform.find("button").text("Sending...");
        emailjs.send(service_id,template_id,params)
            .then(function(){
                alert("Email send!");
                window.location.replace('card.html');
            }, function(err) {
                alert("Send email failed!\r\n You write a wrong data.\n Try again ");
                myform.find("button").text("Send");
            });
        return false;
    });
    });

