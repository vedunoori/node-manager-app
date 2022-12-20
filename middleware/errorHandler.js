const { constants } = require("../constants");



const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "its validation Failed", message: err.message, stackTrace: err.stack })
            break
        case constants.NOT_FOUND:
            res.json({ title: "its not found", message: err.message, stackTrace: err.stack })
            break
        case constants.UNAUTHORIZED:
            res.json({ title: "its not found", message: err.message, stackTrace: err.stack })
            break
            default:
                console.log("No Error, all good !")
    }

};
module.exports = errorHandler