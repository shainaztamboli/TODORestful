/**
 * Created by shainazt on 3/30/2015.
 */
var mongoose = require('mongoose'),
    Image = mongoose.model('Image'),
    fs = require('fs');

exports.fetch = function (req, res, next) {
    Image.findById('5518fce2bee16270222174df', function (err, images) {
        if (err) {
            next(err);
        }
        res.contentType('image/jpg');
        res.send(images.data);
    })
}

exports.save = function (req, res) {
    console.log(req.body.name);
    var image = new Image();
    image.image.data = fs.readFileSync('./public/Tulips.jpg');
    image.image.contentType = 'image/jpg';
    image.name = req.body.name;
    image.save(function (err, image) {
        if (err) {
            console.log(err);
            res.status(400).send(err.err);
        } else {
            res.send(image);
        }
    });
}
