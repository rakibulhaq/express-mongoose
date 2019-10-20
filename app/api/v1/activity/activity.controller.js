const BaseController = require('../base').BaseController;
const ActivityHandler = require('./activity.handler');
class ActivityController extends BaseController{
    constructor(){
        super();
        this._activityHandler = new ActivityHandler();

    }
    getActivityInfo(req, res, next){
            this._activityHandler.getActivityInfo(req, this._responseManager.getDefaultResponseHandler(res));
    }
    getAll(req, res, next){
        
            this._activityHandler.getAllActivity(req, this._responseManager.getDefaultResponseHandler(res));


 

    }
    create(req, res, next){
            this._activityHandler.createActivityInfo(req, this._responseManager.getDefaultResponseHandler(res));

        
    }
    update(req, res, next){
            this._activityHandler.updateActivity(req, this._responseManager.getDefaultResponseHandler(res));



    }
    remove(req, res, next){
            this._activityHandler.deleteActivity(req, this._responseManager.getDefaultResponseHandler(res));
    }
}

module.exports = ActivityController;