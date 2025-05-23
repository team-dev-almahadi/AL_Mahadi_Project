import Product from "../models/produit.model.js";

export const addProduits = async (libele, description, price, categorie,userId, images) => {
    const product = new Product({
        libele,
        description,
        price,
        images: images,
        categorie: categorie,
        userId:userId
    });
    await product.save();
    return product
}

export const updateProduits = async (libele, description, price, categorie, id, images) => {
    if (images.length > 0) {

        const product = await Product.updateOne({ _id: id }, { $set: { libele: libele, description: description, price: price, categorie: categorie, images: images } })
        return product
    } else {
        const product = await Product.updateOne({ _id: id }, { $set: { libele: libele, description: description, categorie: categorie, price: price } })
        return product
    }
}
export const productOne = async (id) => {
    const product = await Product.findById(id).populate("categorie", "nom");
    return product
}
export const productAll = async () => {
    const product = await Product.find().populate("categorie", "nom");
    return product
}
export const deleOneProduct = async (id) => {
    const product = await Product.findOneAndDelete({ _id: id });
    return product
}
export const getProductCategories = async (id) => {
    const product = await Product.findOneAndDelete({ categorie: id });
    return product
}
export const getProductByName = async (libele) => {
    const product = await Product.find({ libele });
    return product
}
export const getProductBySeller = async (userId) => {
    const product = await Product.find({ userId });
    return product
}
export const getProductByPrice = async (minPrice, maxPrice) => {
    const product = await Product.find({
        price: {
            $gte: parseFloat(minPrice),
            $lte: parseFloat(maxPrice)
        }
    });
    return product
}
export const getProductByCategorie = async (categorie) => {
    const product = await Product.find({ categorie });
    return product
}
