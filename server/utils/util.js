// import bcrypt from 'bcrypt'
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs/promises'
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const isEmpty = (value) =>
    value == null || // null ou undefined
    (typeof value === "string" && value.trim() === "") || // Chaîne vide ou espace
    (Array.isArray(value) && value.length === 0) || // Tableau vide
    (typeof value === "object" && Object.keys(value).length === 0);
// export const bcryptPassword = (password) => {
//     const saltRounds = 15;
//     const salt = bcrypt.genSaltSync(saltRounds);
//     const hash = bcrypt.hashSync(password, salt)
//     return hash
// }
export const Maxage = 60 * 60 * 1000
// export function createToken(id: string, Maxage: number) {
//     return jwt.sign({ id: id }, process.env.TOKEN_SECRETE as jwt.Secret,
//         { expiresIn: Maxage })
// }
export const generateValidationCode = (length) => {
    const charset = process.env.CHARSET
    let code = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        code += charset.charAt(randomIndex);
    }
    return code;
}
export const safeObjectId = (id) => {
};
export const deleteImages = async (filenames) => {
    for (const filename of filenames) {
        const filePath = path.join(__dirname, '../images/products', filename);
        try {
            await fs.unlink(filePath);
        } catch (err) {
        }
    }
};
