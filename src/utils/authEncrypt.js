import CryptoJS from 'crypto-js'

const secretKey = 'My@pas$W0Rd'; //process.env.REACT_APP_SECRET_KEY
export const encryptObject = (objectToEncrypt) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(objectToEncrypt), secretKey);
    return ciphertext.toString();
};

export const decryptObject = (encryptedText) => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey);
    try{
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    }catch(err){
        localStorage.removeItem("_authuser");
        console.log('Error while parsing encrypted data', err)
    }
    
};