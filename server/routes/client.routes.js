import clientController from "../controllers/client.controller.js";
import { Router } from "express";


const clientRouter = Router()


//? Les Routes Pour la partie Client
//! 1. Route pour l'inscription du Client
clientRouter.route("/inscription").post(clientController.inscriptionClient)
//! 2. Route pour la Connexion du Client
clientRouter.route("/connexion").post(clientController.connexionClient)
//! 3. Route pour la Déconnexion du Client
clientRouter.route("/deconnexion").post(clientController.deconnexionClient)

export default clientRouter;
