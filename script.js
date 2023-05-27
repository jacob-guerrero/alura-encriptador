const encryptDecrypt  = (() => {
    // Dictionaries:
    const aluraDictionary = {
        'a' : 'ai',
        'e' : 'enter',
        'i' : 'imes',
        'o' : 'ober',
        'u' : 'ufat'
    }

    // Activate Btns:
    const btnEncrypt = document.querySelector('.encriptar');
    const btnDecrypt = document.querySelector('.desencriptar');
    const text = document.querySelector('#cod-text');
    btnEncrypt.addEventListener('click', () => {
        encrypt(text.value);
    })
    btnDecrypt.addEventListener('click', () => {
        decrypt(text.value);
    })
    
    const keys = Object.keys(aluraDictionary);
    const values = Object.values(aluraDictionary);

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
