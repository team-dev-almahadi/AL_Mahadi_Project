import { addCommandeVisible, CommandeUser, findOneCommandeVisible } from "../services/commandeVisibleService.js";

export const addCommandeVis = async (req, res) => {
  const { orderId } = req.params;
  try {
    const { userId, rating, comment } = req.body;
    if (userId && orderId) {
      const commande = await CommandeUser(orderId, userId)
      if (!commande) {
        res.status(404).json({ message: "Commande non trouvée." });
      }
      const existingReview = await findOneCommandeVisible(orderId);
      if (existingReview) {
        res.status(400).json({ message: "Un avis a déjà été laissé pour cette commande." });
      }
      else {
        await addCommandeVisible(orderId, userId, rating, comment);
        res.status(201).json({ message: "Avis sur la commande enregistré." });

      }

    }

  } catch (error) {
    console.log(error)
    if (error.message) {
      res.status(500).json({ message: error.message })
    } else {
      res.status(500).json({ err: "Erreur serveur" + error.message })
    }

  }
}