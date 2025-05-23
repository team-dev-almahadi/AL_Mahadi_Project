import mongoose from 'mongoose'

const ProduitSchema = new mongoose.Schema({
    libele: { type: String, required: true },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    price: {
        type: Number,
        require: true,
        trim: true,
    },
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client', 
    required: true
  },
    categorie: { type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Categorie' },
    images: [String]
}, { timestamps: true })
const Product = mongoose.model('Product', ProduitSchema)

export default Product