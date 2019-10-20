const BaseController = require('../base').BaseController;
const ImageHandler = require('./image.handler');

class ImageController extends BaseController {
    constructor() {
        super();
        this._ImageHandler = new ImageHandler();
    }
    
    upload(req, res, next) {
        this._ImageHandler.uploadImage(req, this._responseManager.getDefaultResponseHandler(res));

    }
    remove(req, res, next) {
        this._ImageHandler.deleteImage(req, this._responseManager.getDefaultResponseHandler(res));

    }
}

module.exports = ImageController;
