let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 16, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

// [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61]
// [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92]
//  [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13]
// [92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47]

// document.onkeypress = function (ev) {
//     console.log(ev);
//     keyboard.push(ev.charCode);
//     console.log(keyboard);
// }
let createKeyboard = () => {
    let out = '<div class="keyboard"></div>';
    document.querySelector('body').insertAdjacentHTML('afterbegin', out);
    out = '';
    // keyboard.forEach((el) => {
    //     out += `<div class="keyItem"> ${String.fromCodePoint(el)} </div>`;
    //     document.querySelector('.keyboard').insertAdjacentHTML('afterbegin', out);
    // })
    for (let i = 0; i < keyboard.length; i++) {
        out += `<div class="keyItem"> ${String.fromCharCode(keyboard[i])} </div>`;
        document.querySelector('.keyboard').insertAdjacentHTML('afterbegin', out);
    }
}

createKeyboard()