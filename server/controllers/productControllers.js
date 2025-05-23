import { deleteImagesBokcket } from "../middlewares/minio.js";
import { addProduits, deleOneProduct, productAll, productOne, getProductByName, updateProduits, getProductByPrice, getProductByCategorie, getProductBySeller } from "../services/productService.js";
import { deleteImages, isEmpty } from "../utils/util.js";
import dotenv from 'dotenv'
dotenv.config()


export const addproducts = async (req, res) => {

    try {
        const { libele, description, price, categorie, userId } = req.body;

        if (isEmpty(libele)) throw new SyntaxError("Le champ libélé est vide")
        if (isEmpty(description)) throw new SyntaxError("Le champ description est vide")
        if (isEmpty(price)) throw new SyntaxError("Le champ prix est vide")
        else {
            const imagePaths = req?.files?.map(file => {
                const images = file.path.split("/")
                return file.path.split("/")[images.length - 1]
            });
            const product = await addProduits(libele?.trim().toLowerCase().trim(), description.trim(), parseFloat(price.trim()), categorie.trim(),userId, imagePaths)
            res.send(product)
        }
    } catch (err) {
        const imagePaths = req?.files?.map(file => {
            const images = file.path.split("/")
            return file.path.split("/")[images.length - 1]
        });
        if ((imagePaths.length != 0)) {
            deleteImagesBokcket(process.env.BEKATENAME, imagePaths)
            res.status(500).json({ error: err.message });
        }
        res.status(500).json({ error: err.message });
    }
}
export const updateProducts = async (req, res) => {
    const id = req.params.id
    const { libele, description, price, categorie } = req.body;
    try {
        if (isEmpty(libele)) throw new SyntaxError("Le champ libélé est vide")
        if (isEmpty(description)) throw new SyntaxError("Le champ description est vide")
        if (isEmpty(price)) throw new SyntaxError("Le champ prix est vide")
        else {
            const imagePaths = req?.files?.map(file => {
                const images = file.path.split("/")
                return file.path.split("/")[images.length - 1]
            });
            const products = await productOne(id)
            if (products) {
                if (imagePaths.length && products.images.length != null) {
                    deleteImagesBokcket(process.env.BEKATENAME, products.images)
                    const product = await updateProduits(libele?.toLowerCase().trim(), description.trim(), parseFloat(price.trim()), categorie, id, imagePaths)
                    if (product.modifiedCount) {
                        deleteImagesBokcket(process.env.BEKATENAME, products.images)
                        res.send({ message: "Produit mnodifié avec succès" })
                    } else {
                        deleteImagesBokcket(process.env.BEKATENAME, products.images)
                        res.status(400).json({ message: "Produit non modifié" })
                    }
                } else {
                    const product = await updateProduits(libele?.toLowerCase().trim(), description.trim(), parseFloat(price.trim()), categorie, id, [])
                    if (product.modifiedCount) {
                        res.send({ message: "Produit mnodifié avec succès" })
                    } else {
                        res.status(400).json({ message: "Produit non modifié" })
                    }
                }
            } else {
                res.status(400).json({ message: "Ce produit n'existe pas" })
            }

        }
    } catch (err) {
        const imagePaths = req?.files?.map(file => {
            const images = file.path.split("/")
            return file.path.split("/")[images?.length - 1]
        });
       if (imagePaths.length != 0) {
            deleteImagesBokcket(process.env.BEKATENAME, imagePaths)
            res.status(500).json({ error: err.message });
        }
        res.status(500).json({ error: err.message });
    }

}
export const geOneProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await productOne(id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ error: `Erreur server: ${err.message}` });
    }

}
export const UserProduct= async(req,res)=>{
    const sellerId=req.params.id
    try {
        const product = await getProductBySeller(sellerId)
        res.json(product)
    } catch (error) {
       res.status(500).json({ error: `Erreur server: ${err.message}` });  
    }
}
export const geAllProducts = async (req, res) => {
    try {
        const products = await productAll()
        res.send(products)
    } catch (error) {
        res.status(500).json({ error: `Erreur server: ${err.message}` });
    }

}
export const deleteOneProduct = async (req, res) => {
    const id = req.params.id
    try {
        const products = await productOne(id)
        if (products?.id) {
            await deleOneProduct(id)
            await deleteImages(products.images)
            res.send({ message: "produit supprimé avec succès" })
        } else {
            res.status(400).json({ message: "Ce produit est de déjà supprimé." })
        }
    } catch (error) {
        res.status(500).json({ error: `Erreur server: ${err.message}` });
    }
}
export const getAllProductByName = async (req, res) => {
    const name = req.query.name.toLowerCase()
    try {
        if (isEmpty(name)) throw new SyntaxError("Le champ  est vide")
        else {
            const product = await getProductByName(name.trim());
            res.send(product)
        }

    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', message: err?.message });
    }
};
export const getAllProductByPrice = async (req, res) => {
    const { minPrice, maxPrice } = req.query;
    try {
        if (isEmpty(minPrice)) throw new SyntaxError("Le champ  est vide")
        if (isEmpty(maxPrice)) throw new SyntaxError("Le champ  est vide")
        else {
            const product = await getProductByPrice(minPrice.trim(), maxPrice.trim());
            res.send(product)
        }

    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', message: err?.message });
    }
};
export const getAllProductByCategorie = async (req, res) => {
    const { categorie } = req.query;
    try {
        if (isEmpty(categorie)) throw new SyntaxError("Le champ  est vide")
        else {
            const product = await getProductByCategorie(categorie);
            res.send(product)
        }
    } catch (err) {
        res.status(500).json({ message: 'Erreur serveur', message: err?.message });
    }
};

