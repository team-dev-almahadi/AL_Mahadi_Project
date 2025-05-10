import Client from "../models/client.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config(); 
const SECRET = process.env.JWT_SECRET_KEY;

const clientController = {

    //! Inscription d’un nouveau client
    inscriptionClient: async (req, res) => {
        try {
            const client = new Client(req.body);
            const nouveauClient = await client.save();
            const tokenClient = jwt.sign({ id: nouveauClient._id }, SECRET);
            console.log("Token du Client Inscrit : " + tokenClient, "+++++++++++++++++++++++++++");
            console.log(nouveauClient);
            res.status(201)
               .cookie("clientToken", tokenClient, { httpOnly: true })
            .json({ 
                client: nouveauClient, 
                token: tokenClient,      
                message: "Inscription réussie" 
            });
        } catch (error) {
            console.error(error);
            res.status(400).json(error.errors);
        }
    },

    //! Connexion d’un client existant
    connexionClient: async (req, res) => {
        try {
            const clientDepuisBD = await Client.findOne({ email: req.body.email });

            if (!clientDepuisBD) {
                return res.status(400).json({ message: "Email non trouvé" });
            }

            const motDePasseValide = await bcrypt.compare(req.body.motsdePasse, clientDepuisBD.motsdePasse);

            if (!motDePasseValide) {
                return res.status(400).json({ message: "Mot de passe incorrect" });
            }

            const tokenClient = jwt.sign({ id: clientDepuisBD._id }, SECRET);
            console.log("Token du Client Connecté : " + tokenClient, "-------------------");

            res.status(200)
               .cookie("clientToken", tokenClient, { httpOnly: true })
               .json({ client: clientDepuisBD, message: "Connexion réussie", token: tokenClient });

        } catch (error) {
            console.error(error);
            res.status(400).json({ message: "Erreur lors de la connexion", error });
        }
    },

    //! Déconnexion du client
    deconnexionClient: async (req, res) => {
        res.clearCookie("clientToken");
        res.json({ message: "Client déconnecté avec succès" });
    },

    //! Récupérer le client connecté
    getClientConnecté: async (req, res) => {
        console.log("Headers de la requête :", req.headers);
        res.json({ message: "Client actuellement connecté" });
    }
};

export default clientController;
