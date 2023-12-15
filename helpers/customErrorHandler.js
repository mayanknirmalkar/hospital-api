import CustomError from "../helpers/customError.js"

const customErrorHandler = (err,req,res,next) =>{

    if(err.code === 11000){
       err = new CustomError("duplicate field value enter", 404)
    }

    if(err.name === 'SyntaxError'){
        err = new CustomError("Unexpected syntax", 400)
    }

    if(err.name === 'ValidationError'){
        err = new CustomError(err.message , 400)
    }

    if(err.name === 'CastError'){
        err = new CustomError("please provide a valid id", 400)
    }

    if(err.name === 'TokenExpiredError'){
        err = new CustomError("jwt expired", 401)
    }

    if(err.name === 'JsonWebTokenError'){
        err = new CustomError("jwt malformed", 401)
    }


    console.log("Custom Error Handler => ", err.name, err.message, err.statusCode);

    return res.status(err.statusCode || 500).json({
        success:false,
        error:err.message || "server error"
    })

}

export default customErrorHandler;