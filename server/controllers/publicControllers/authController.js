import CustomError from "../../utils/CustomError.js";
import User from "../../models/userSchema.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res,next) => {
    const { name, email, password } = req.body;
    const useExists = await User.findOne({ email });
    if(useExists){
        return next(new CustomError("User already exists", 400));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password : hashedPassword });
    res.json({message:"User registered successfully!",user});
};


export { registerUser };