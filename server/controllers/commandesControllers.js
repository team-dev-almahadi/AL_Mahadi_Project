import { addCommande, DeleteOnecommande, getAllBySellercommande, getAllcommande, getOnecommande } from '../services/commandeService.js';
import { isEmpty } from "../utils/util.js";


export const addCommandes = async (req, res) => {
    const { status, produits, methodePaiement, geolocalisation, userId } = req.body;
    try {
        if (!produits.length) throw new SyntaxError("Aucun produit n'a été choisis")
        if (isEmpty(methodePaiement)) throw new SyntaxError("Veillez choisir un mode payement")
        if (!geolocalisation.coordinates?.length) throw new SyntaxError("Aucune geolocalisation")
        else {
            const data = {
                produits: produits,
                userId:userId,
                methodePaiement: methodePaiement.trim(),
                geolocalisation: {
                    coordinates: [geolocalisation.coordinates[0], geolocalisation.coordinates[1]]
                }
            }
            const commande = await addCommande(data)
            if (commande) res.send({message:"Commande a été lancer avec succès"}) 

        }
    } catch (error) {
        if (error.message) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ err: "Erreur serveur" + error.message })
        }
    }
}

export const geAllCommandes=async (req, res) => {
    try {
        const commande=await getAllcommande()
        res.send(commande)
    } catch (error) {
         if (error.message) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ err: "Erreur serveur" + error.message })
        }
    }
}
export const geOneCommande=async (req, res) => {
    const id = req.params.id
    try {
        const commande=await getOnecommande(id)
        res.send(commande)
    } catch (error) {
         if (error.message) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ err: "Erreur serveur" + error.message })
        }
    }
}
export const getAllCommandeBySeller=async (req, res) => {
    const id = req.params.id
    try {
        const commande=await getAllBySellercommande(id)
        res.send(commande)
    } catch (error) {
         if (error.message) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ err: "Erreur serveur" + error.message })
        }
    }
}
export const OneDeleteCommande=async (req, res) => {
    const id = req.params.id
    try {
        const cmd= await getOnecommande(id) 
        if (cmd?.id) {
            if (cmd.status=="annulée" || cmd.status=="livrée") {
                 const commande=await DeleteOnecommande(id)
                 if(commande.deletedCount)  res.send({message:"La commande  a été supprimé avec succès"}) 
            }else if ((cmd.status=="confirmée" || cmd.status=="en attente") && cmd.status!="livré") {
                res.send({message:"Une commande confirmée non livré ne peut pas être supprimé"}) 
            }
        } else {
            res.status(400).json({message:"La commande n'est pas disponible"})
        }

    } catch (error) {
         if (error.message) {
            res.status(500).json({ message: error.message })
        } else {
            res.status(500).json({ err: "Erreur serveur" + error.message })
        }
    }
}
