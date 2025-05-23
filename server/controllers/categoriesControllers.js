import { addCatheg, CathegAll, CathegOne, deleOneCatheg, updateCatheg } from "../services/cathegorieService.js";
import { getProductCategories } from "../services/productService.js";
import { isEmpty } from "../utils/util.js";

export const addCathegories = async (req, res) => {
    try {
        const { nom } = req.body;
        if (isEmpty(nom)) throw new SyntaxError("Le champ nom est vide")
        else {
            const cathegorie = await addCatheg(nom)
            res.send(cathegorie)
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const UpdateCathegories = async (req, res) => {
    const id = req.params.id
    try {
        const { nom } = req.body;
        if (isEmpty(nom)) throw new SyntaxError("Le champ nom est vide")
        else {
            await updateCatheg(nom, id)
            res.send({ message: "Cathegorie modifié avec succès" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const geOneCathegorie = async (req, res) => {
    const id = req.params.id
    try {
        const product = await CathegOne(id)
        res.send(product)
    } catch (error) {
        res.status(500).json(error.message)
    }

}
export const geAllCathegorie = async (req, res) => {
    try {
        const categories = await CathegAll()
        res.send(categories)
    } catch (error) {
        res.status(500).json(error.message)
    }

}
export const deleteOneCathegorie = async (req, res) => {
    const id = req.params.id
    try {
        const product = await getProductCategories(id)
        if (product?._id) {
            const categories = await CathegOne(id)
            if (categories?.id) {
                await deleOneCatheg(id)
                res.send({ message: "Cathegories supprimé avec succès" })
            } else {
                res.status(400).json({ message: "Ce Cathegories est de déjà supprimé." })
            }
        } else {
            res.send({ message: "Cette categorie ne peut pas être supprimer car il y a des produits qui contient cette categorie " })
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}