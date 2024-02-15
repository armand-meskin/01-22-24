// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. z

const logger = {
    logMsg: function() {
        console.log(`Error Message: ${this.errMsg}`);
    }
}

const err = {
    errMsg:"This is an error!"
}

logger.logMsg.call(err);

