import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs"; // Assure-toi d'avoir importé bcrypt

const clientSchema = new Schema({
  prénom: {
    type: String,
    required: [true, "{PATH} est requis!!"],
    minLength: [2, "{PATH} doit être au minimum 2 caractères"],
    maxLength: [255, "{PATH} doit être au maximum 255 caractères"]
  },
  nomFamille: {
    type: String,
    required: [true, "{PATH} est requis!!"],
    minLength: [2, "{PATH} doit être au minimum 2 caractères"],
    maxLength: [255, "{PATH} doit être au maximum 255 caractères"]
  },
  role: {
    type: String,
    enum: ["superAdmin", "client", "admin"],
    default: "client"
  },
  email: {
    type: String,
    required: [true, "Email est requis"],
    validate: {
      validator: val => /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(val),
      message: "Veuillez entrer un email valide!"
    }
  },
  motsdePasse: {
    type: String,
    required: [true, "{PATH} est requis!"],
    minLength: [8, "{PATH} doit être au minimum 8 caractères!!"]
  }
}, { timestamps: true });

// Virtual field for password confirmation
clientSchema.virtual('confirmMotsdePasse')
  .get(function () {
    return this._confirmMotsdePasse;
  })
  .set(function (value) {
    this._confirmMotsdePasse = value;
  });

// Password confirmation validation
clientSchema.pre('validate', function (next) {
  if (this.motsdePasse !== this._confirmMotsdePasse) {
    this.invalidate('confirmMotsdePasse', "Les mots de passe doivent correspondre");
  }
  next();
});

// Password hashing before saving
clientSchema.pre('save', async function (next) {
  if (this.isModified('motsdePasse')) {
    try {
      const motDePasseHaché = await bcrypt.hash(this.motsdePasse, 10);
      this.motsdePasse = motDePasseHaché;
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const Client = model('Client', clientSchema);
export default Client;
