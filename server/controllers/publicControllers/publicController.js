import Product from "../../models/productSchema.js";

const getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    if(!products) {
        return next(new CustomError("Products not found", 404));
    }
    res.status(200).json(products);
};

const addProduct = async (req, res) => {
    const { name, model, company, years_old, previous_owners, rate, description, image, type, seats, mileage, fuel_type, transmission } = req.body;
    const product = await Product.create({ name, model, company, years_old, previous_owners, rate, description, image, type, seats, mileage, fuel_type, transmission });
    res.json({message:"product added",product});
};

export {addProduct,getAllProducts};