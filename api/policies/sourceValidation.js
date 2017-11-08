module.exports = function(req, res, next) {

    /**
     * If Request Body contains source as mobile then
     * policy will go to the respective controller
     * otherwise it will directly return bad request response
     */
    if(req.param("source") && req.param("source") === "sailsit") {
        next();
    } else {
        res.status(400);
        res.send({
            success: false,
            message: "policy validation failed"
        });
    }

};