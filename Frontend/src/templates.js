    /**
     * Created by Marjana on 12/11/2016.
     */
    var fs = require('fs');
    var ejs = require('ejs');

    exports.examples_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/examples_OneItem.ejs', "utf8"));
    exports.createCard_ByYourself = ejs.compile(fs.readFileSync('./Frontend/templates/createCard_ByYourself.ejs', "utf8"));
    exports.showImages_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/showImages_OneItem.ejs', "utf8"));
