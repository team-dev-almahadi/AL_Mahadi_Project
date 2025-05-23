import express from 'express';
const router = express.Router();
import { addproducts, deleteOneProduct, geAllProducts, geOneProduct, getAllProductByCategorie, getAllProductByName, getAllProductByPrice, updateProducts, UserProduct } from '../controllers/productControllers.js'
import { addCathegories, UpdateCathegories, geAllCathegorie, deleteOneCathegorie, geOneCathegorie } from '../controllers/categoriesControllers.js'
import {  addCommandes, geAllCommandes, geOneCommande, getAllCommandeBySeller, OneDeleteCommande } from '../controllers/commandesControllers.js';
import { addCommandeVis } from '../controllers/commandeVisibleControllers.js';
import { propsImage, uploadImageProd } from '../middlewares/uploadImageProd.js';
import { addImageProduct } from '../middlewares/minio.js';
import clientController from '../controllers/client.controller.js';
import verifierSuperAdmin from '../middlewares/verifierSuperAdmin.js';




// =============================Clients===========================================

//? Les Routes Pour la partie Client
//! 1. Route pour l'inscription du Client
router.post("/client/inscription",clientController.inscriptionClient)
//! 2. Route pour la Connexion du Client
router.post("/client/connexion",clientController.connexionClient)
//! 3. Route pour la Déconnexion du Client
router.post("/client/deconnexion",clientController.deconnexionClient)

//! 4. Ajouter cette route pour que le superAdmin approuve un admin ⚠️:
router.put("/clients/:id/approuver", verifierSuperAdmin, clientController.approuverAdmin);

// =============================Produits===========================================
router.post("/product/add", uploadImageProd, addImageProduct, propsImage, addproducts)
router.put("/product/update/:id", uploadImageProd, addImageProduct, propsImage, updateProducts)
router.get("/product/all/", geAllProducts)
router.get("/product/all/byname/", getAllProductByName)
router.get("/product/all/byprice/", getAllProductByPrice)
router.get("/product/all/bycategorie/", getAllProductByCategorie)
router.get("/product/:id", geOneProduct)
router.get("/product/forSeller/:id", UserProduct)
router.delete("/product/:id", deleteOneProduct)


// =============================Cathegories========================================
router.post("/cathegories/add", addCathegories)
router.put("/cathegories/:id", UpdateCathegories)
router.get("/cathegories/all/", geAllCathegorie)
router.get("/cathegories/:id", geOneCathegorie)
router.delete("/cathegories/:id", deleteOneCathegorie)

// =============================Commande===========================================

router.post("/commande/add", addCommandes)
router.get("/commande/all/", geAllCommandes)
router.get("/commande/:id", geOneCommande)
router.get("/commande/byseller/:id", getAllCommandeBySeller)
router.delete("/commande/:id", OneDeleteCommande)


// =============================Commande===========================================

router.post("/commande/:orderId/review", addCommandeVis)


export default router;