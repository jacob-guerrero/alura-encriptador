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
        return textCipher;
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
        return textDecipher;
    }
    
    return {encrypt, decrypt}
})();

const activateBtns = () => {
    const btnEncrypt = document.querySelector('.encriptar');
    const btnDecrypt = document.querySelector('.desencriptar');
    const text = document.querySelector('#cod-text');

    btnEncrypt.addEventListener('click', () => {
        const encryptedText = encryptDecrypt.encrypt(text.value);
        hideSideContent();
        createSideElements(encryptedText);
    })
    btnDecrypt.addEventListener('click', () => {
        const decryptedText = encryptDecrypt.decrypt(text.value);
        hideSideContent();
        createSideElements(decryptedText);
    })
}
activateBtns();

const hideSideContent = () => {
    const sideImg = document.querySelector(".side-img");
    const sideText = document.querySelector(".side-text-container");
    sideImg.style.display = "none";
    sideText.style.display = "none";
}

const showSideContent = () => {
    const sideImg = document.querySelector(".side-img");
    const sideText = document.querySelector(".side-text-container");
    sideImg.style.display = "inline-block";
    sideText.style.display = "flex";
}

const createSideElements = (text) => {
    const sideContainer = document.querySelector(".side-content");
    sideContainer.classList.add("active");

    const copyBtn = document.createElement('button');
    copyBtn.textContent = "Copiar";
    copyBtn.classList.add("btn");

    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.name = "side-cod-text";
    textarea.id = "side-cod-text";
    textarea.cols = "20";
    textarea.rows = "25";

    sideContainer.append(textarea, copyBtn)
}