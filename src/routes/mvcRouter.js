"use strict"
    
/**
 * MvcRouter invokes an action on a controller and waits for a response
 * @param  {object} req - http request
 * @param  {object} res - http response
 * @param  {function} next - function to call with errors
 * @param  {string} view - path to the view to render
 * @param  {object} controller - controller object to use for this route
 */
function MvcRouter(req, res, next, view, controller) {
    
    var self = this;
    self.req = req;
    self.res = res;
    self.next = next;
    self.view = view;
    self.controller = controller;

    /**
     * invokes an action on the controller
     * @param  {string} actionName - action to invoke
     */
    self.beginAction = function (actionName){
        if(self.controller[actionName]) {
            //var promise = new Promise();
            self.controller[actionName](self.req.body, self.endAction);
        } else {
            throw new Error('Invalid Operation');
        }
    }
    
    /**
     * callback for when the controller is complete building the response model
     * @param  {object} err - error object, if this is present the view will not be rendered
     * @param  {object} model - model to forward to the view
     */
    self.endAction = function (err, model){
        if(err){
            self.next(err);
        } else if(model) {
            self.res.render(self.view, model);
        } else {
            throw new Error('Invalid Callback');
        }
    }
}

exports.Router = MvcRouter;