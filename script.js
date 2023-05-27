const encryptDecrypt  = (() => {
    // Dictionaries:
    const aluraDictionary = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    }

    // Keys and Values from dict:
    const keys = Object.keys(aluraDictionary);
    const values = Object.values(aluraDictionary);

    // Encrypt and Decrypt Functions:
    const encrypt = (text) => {
        const textCipher = text.toLowerCase().split('').map((symbol) => {
            const index = keys.indexOf(symbol);
            if(index !== -1) {
                return values[index];
            } else {
                return symbol;
            }
        }).join('');
    
        console.log(textCipher);
    }
    const decrypt = (text) => {
        const reg = /(ai|enter|imes|ober|ufat)|(\w|\s)/;
        const textDecipher = text.toLowerCase().split(reg).map((symbol) => {
            const index = values.indexOf(symbol);
            if(index !== -1) {
                return keys[index];
            } else {
                return symbol;
            }
        }).join('');
    
        console.log(textDecipher);
    }
    
    return {encrypt, decrypt}
})();

const activateBtns = () => {
    const btnEncrypt = document.querySelector('.encriptar');
    const btnDecrypt = document.querySelector('.desencriptar');
    const text = document.querySelector('#cod-text');

    btnEncrypt.addEventListener('click', () => {
        encryptDecrypt.encrypt(text.value);
    })
    btnDecrypt.addEventListener('click', () => {
        encryptDecrypt.decrypt(text.value);
    })
}
activateBtns();