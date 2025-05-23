import clientController from "../controllers/client.controller.js";
import { Router } from "express";
import verifierSuperAdmin from "../middlewares/verifierSuperAdmin.js";


const clientRouter = Router()


//? Les Routes Pour la partie Client
//! 1. Route pour l'inscription du Client
clientRouter.route("/inscription").post(clientController.inscriptionClient)
//! 2. Route pour la Connexion du Client
clientRouter.route("/connexion").post(clientController.connexionClient)
//! 3. Route pour la Déconnexion du Client
clientRouter.route("/deconnexion").post(clientController.deconnexionClient)

//! 4. Ajouter cette route pour que le superAdmin approuve un admin ⚠️:
clientRouter.put("/clients/:id/approuver", verifierSuperAdmin, clientController.approuverAdmin);

export default clientRouter;