const getRequestValidator = (req, res, next) => {
    try {
        console.log("Hitting the middleware...");
        next();
    } catch (error) {
        res.status(404).json({
            msg : "Something went wrong!"
        })
    }
}

const postRequestValidator = (req, res, next) => {
    try {
        if(!req.body.method){
            throw {err: "Field method not present in Request body"}
        } 
        next();
    } catch (error) {
        console.log(error)
        res.status(404).json({
            msg : error.err
        })
    }
}


module.exports = {
    getRequestValidator,
    postRequestValidator
}