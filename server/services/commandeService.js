import Commande from "../models/commande.model.js";

export const addCommande = async (data) => {
    const commande = await new Commande({
        // status:data.status,
        userId:data.userId,
        methodePaiement:data.methodePaiement,
        produits:data.produits,
        geolocalisation:data.geolocalisation
    });
    await commande.save();
    return commande

}

export const getAllcommande = async (data) => {
    const commande = await Commande.find();
    return commande
}
export const getOnecommande = async (id) => {
    const commande = await Commande.findOne({_id:id});
    return commande
}
export const getAllBySellercommande = async (id) => {
    const commande = await Commande.find({userId:id});
    return commande
}
export const DeleteOnecommande = async (id) => {
    const commande = await Commande.deleteOne({_id:id});
    return commande
}
