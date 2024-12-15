import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{type:String , required:true},
        model:{type:String,required:true},
        company:{type:String,required:true},
        years_old:{type:Number,required:true},
        previous_owners:{type:Number,required:true},
        rate:{type:Number,required:true},
        description:{type:String,required:true},
        image:{type:String},
        type:{type:String,required:true},
        seats:{type:Number,required:true},
        mileage:{type:String,required:true},
        fuel_type:{type:String,required:true},
        transmission:{type:String,required:true},
        isDeleted:{type:Boolean, default:false }
    },
    {timestamps:true}
)

const productModel = mongoose.models.Product || mongoose.model("Product",productSchema)

export default productModel