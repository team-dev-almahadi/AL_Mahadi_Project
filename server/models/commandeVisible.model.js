import mongoose from 'mongoose'

const OrderReviewSchema = new mongoose.Schema({
  orderId: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Order', 
     required: true, 
     unique: true },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client', 
    required: true },
  rating: { type: Number, 
    required: true, 
    min: 1, 
    max: 5 },
  comment: { type: String },
  createdAt: { type: Date, 
    default: Date.now }
});
const OrderReview = mongoose.model('OrderReview', OrderReviewSchema)

export default OrderReview