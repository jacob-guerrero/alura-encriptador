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

    // Encrypt Button:
    btnEncrypt.addEventListener('click', () => {
        if(text.value !== "") {
            const encryptedText = encryptDecrypt.encrypt(text.value);
            hideSideContent();
            createSideElements(encryptedText);
        } else {
            showSideContent();
        }
    })

    // Decrypt Button:
    btnDecrypt.addEventListener('click', () => {
        if(text.value !== "") {
            const decryptedText = encryptDecrypt.decrypt(text.value);
            hideSideContent();
            createSideElements(decryptedText);
        } else {
            showSideContent();
        }
    })
}
activateBtns();

const hideSideContent = () => {
    const sideImg = document.querySelector(".side-img");
    const sideText = document.querySelector(".side-text-container");
    sideImg.style.display = "none";
    sideText.style.display = "none";

    if (document.querySelector("#side-cod-text")) {
        const sideEncrypt = document.querySelector("#side-cod-text");
        const copyBtn = document.querySelector(".copiar");
        sideEncrypt.style.display = "inline-block";
        copyBtn.style.display = "inline-block";
    }
}

const showSideContent = () => {
    const sideImg = document.querySelector(".side-img");
    const sideText = document.querySelector(".side-text-container");
    sideImg.style.display = "inline-block";
    sideText.style.display = "flex";
    
    if (document.querySelector("#side-cod-text")) {
        const sideContainer = document.querySelector(".side-content");
        sideContainer.classList.remove("active");
        const sideEncrypt = document.querySelector("#side-cod-text");
        const copyBtn = document.querySelector(".copiar");
        sideEncrypt.style.display = "none";
        copyBtn.style.display = "none";
    }
}

const createSideElements = (text) => {
    const sideContainer = document.querySelector(".side-content");

    if(!document.querySelector('#side-cod-text')) {
        sideContainer.classList.add("active");

        const copyBtn = document.createElement('button');
        copyBtn.textContent = "Copiar";
        copyBtn.classList.add("btn", "copiar");
        copyBtn.onclick = copyText;

        const textarea = document.createElement('textarea');
        textarea.name = "side-cod-text";
        textarea.id = "side-cod-text";
        textarea.cols = "20";
        textarea.rows = "15";

        sideContainer.append(textarea, copyBtn);
    }
    
    if(document.querySelector('#side-cod-text')) {
        sideContainer.classList.add("active");
        const textarea = document.querySelector('#side-cod-text');
        textarea.textContent = text;
    }
}

const copyText = () => {
    const copiedText = document.getElementById("side-cod-text");

    // Select the text field
    copiedText.select();
    copiedText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copiedText.value);
}