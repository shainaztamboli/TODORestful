/**
 * Created by shainazt on 3/30/2015.
 */
var imageCtrl = require('../controllers/image.controller');
module.exports = function(app){

    app.route('/api/image')
        .get(imageCtrl.fetch)
        .post(imageCtrl.save);
};