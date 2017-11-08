/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    policiesValidation: function (req, res) {
        res.send({
            success: true,
            message: "policy validation passed"
        });
    }
	
};

