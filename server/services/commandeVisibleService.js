import Commande from "../models/commande.model.js";
import OrderReview from "../models/commandeVisible.model.js";

export const CommandeUser = async (orderId, userId) => {
    const commande = await Commande.find({ _id: orderId });
    return commande
}
export const findOneCommandeVisible = async (orderId) => {
    const commande = await OrderReview.findOne({orderId: orderId });
    return commande
}
export const addCommandeVisible = async ( orderId, userId, rating, comment ) => {
    const commandeVisible = new OrderReview({ orderId, userId, rating, comment });
    await commandeVisible.save();
    return commandeVisible

}