import Cathegories from "../models/categories.model.js";
import Cathegorie from "../models/categories.model.js";

export const addCatheg = async (nom) => {
    const categorie = new Cathegorie({
        nom
    });
    await categorie.save();
    return categorie

}

export const updateCatheg = async (nom, id) => {
    const cathegorie = await Cathegories.updateOne({ _id: id }, { $set: { nom: nom } })
    return cathegorie
}
export const CathegOne = async (id) => {
    const categorie = await Cathegories.findById(id);
    return categorie
}
export const CathegAll = async () => {
    const categorie = await Cathegories.find();
    return categorie
}
export const deleOneCatheg = async (id) => {
    const categorie = await Cathegories.findOneAndDelete({ _id: id });
    return categorie
}
