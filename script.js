
const encrypt = () => {
    const text = document.querySelector('#cod-text');
    const keys = Object.keys(aluraDictionary);
    const values = Object.values(aluraDictionary);
    console.log(text.value);

    const textCipher = text.value.toLowerCase().split('').map((symbol) => {
        const index = keys.indexOf(symbol);
        if(index !== -1) {
            return values[index];
        } else {
            return symbol;
        }
    }).join('');

    console.log(textCipher);
}
const decrypt = () => {

}

const aluraDictionary = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
}

const activateBtn = () => {
    const btnEncrypt = document.querySelector('.encriptar');
    btnEncrypt.addEventListener('click', () => {
        encrypt();
    })
    const btnDecrypt = document.querySelector('.desencriptar');
    btnDecrypt.addEventListener('click', () => {
        decrypt();
    })
}

activateBtn();