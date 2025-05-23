import mongoose from 'mongoose'

const CathegorieSchema = new mongoose.Schema({
    nom: {
        type: String,
        require: true,
        trim: true,

    }
}, { timestamps: true })
const Cathegories = mongoose.model('Categorie', CathegorieSchema)

export default Cathegories