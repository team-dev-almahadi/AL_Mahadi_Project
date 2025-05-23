import mongoose from 'mongoose'

const CommandeSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true, default:"" },
    produits: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
            quantity: Number,
        }
    ],
    status: {
        type: String,
        enum: ["en attente", "confirmée", "livrée", "annulée"],
        default: "en attente"
    },
    methodePaiement: {
        type: String,
        enum: ["carte", "espèces", "orange", "moovmoney"],
        default: "espèces"
    }, geolocalisation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    },
}, { timestamps: true })
const Commande = mongoose.model('Commande', CommandeSchema)

export default Commande