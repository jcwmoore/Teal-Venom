"use strict"

/**
 * The default controller
 */
function HomeController() {
    
    /**
     * the default action for home
     */
    this.index = function (model, renderCallback) {
        renderCallback(null, { title: "HomeController/index" });
    }
}
exports.Controller = HomeController;