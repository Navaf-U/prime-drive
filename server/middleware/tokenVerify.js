import CustomError from "../utils/CustomError.js";

export const tokenVerify = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return next (new CustomError("You are not authorized", 401)); 
        }
        const authHeader = req.headers.authorization;
        if(authHeader){
            const token = authHeader.split(" ")[1]
            jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
                if(err){
                    console.error("JWT ERROR",err.message)
                    return next (new CustomError("You are not authorized", 401)); 
                }
                req.user = user
                next()
            })
        }else{
            next(new CustomError("You are not authorized", 401));
        }
    } catch (error) {
        next(new CustomError(error || "failed to verify authentication", 401));
    }
}