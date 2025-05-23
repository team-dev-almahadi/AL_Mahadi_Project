import mongoose from 'mongoose'
import Product from './produit.model'
import categories from './categories.model'
// import User from "./user.model"

mongoose.Promise = global.Promise

const db = {
    mongoose,
    Product,
    categories
}

export { db }