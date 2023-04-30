export default function makeKeyboard() {
    // let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 46, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 16, 92, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];
    const rusKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '◄', '▼', '►'
    ];
    const engKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
        'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl'];

    let createKeyboard = () => {
        const body = document.querySelector('body')
        body.innerHTML = "<textarea class='text'></textarea>"
        let out = '<div class="keyboard"></div>';
        body.insertAdjacentHTML('afterbegin', out);
        out = "";
        engKeyboard.forEach((el) => {
            out += `<div class="keyItem" id="${el}"> ${el} </div>`;
            document.querySelector('.keyboard').innerHTML = out;
        })
    }
    createKeyboard()
}