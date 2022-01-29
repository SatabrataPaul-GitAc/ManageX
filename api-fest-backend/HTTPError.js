const HTTPError = function (statuscode, message) {
    const error = {
        statuscode,
        message
    }
    return error;
}

module.exports = HTTPError;