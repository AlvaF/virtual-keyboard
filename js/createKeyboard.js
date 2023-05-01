
export default function makeKeyboard(defaultLang) {
    // let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 16, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

    let createKeyboard = () => {
        let out = "";
        defaultLang.forEach((el) => {
            out += `<div class="keyItem" id="${el}"> ${el} </div>`;
            document.querySelector('.keyboard').innerHTML = out;
        })
    }
    createKeyboard()
}