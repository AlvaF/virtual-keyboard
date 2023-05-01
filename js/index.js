import makeKeyboard from "./createKeyboard.js";
import keyboardHighlights from "./keyboardHighlights.js";
import doTyping from './doTyping.js';
import keyboards from './keyboards.js';
const body = document.querySelector('body');
// let capsLockBtn = 

const { engKeyboard, engCapsKeyboard, rusKeyboard, rusCapsKeyboard } = keyboards;
body.innerHTML = "<textarea class='text'></textarea>"
let out = '<div class="keyboard"></div><div class="describtion"><p>Зажмите Enter и Alt для смены языка</p></div>';
body.insertAdjacentHTML('afterbegin', out);


let curLang = 'en';
let curKeyboard = engKeyboard;
let capsPressed = false;


makeKeyboard(curKeyboard);
doTyping(makeKeyboard, curKeyboard, capsPressed);
keyboardHighlights();


function changeLang(event) {
    // если зажаты клавиши Enter и Alt
    if (event.code === 'Enter' && event.altKey) {
        if (curLang === 'en') {
            curLang = 'ru';
            capsPressed === true ? curKeyboard = rusCapsKeyboard : curKeyboard = rusKeyboard;

        } else {
            curLang = 'en';
            capsPressed === true ? curKeyboard = engCapsKeyboard : curKeyboard = engKeyboard;
        }
        makeKeyboard(curKeyboard);
        doTyping();
        keyboardHighlights();
        document.querySelector('#CapsLock').addEventListener('click', pressCapsLock)
    }
}

const pressCapsLock = (event) => {
    if (event.code === 'CapsLock' || event.target.id === 'CapsLock') {
        if (capsPressed) {
            capsPressed = false;
            curLang === 'en' ? makeKeyboard(engKeyboard) : makeKeyboard(rusKeyboard);
        } else {
            capsPressed = true;
            curLang === 'en' ? makeKeyboard(engCapsKeyboard) : makeKeyboard(rusCapsKeyboard);
        }
        doTyping();
        keyboardHighlights();
        document.querySelector('#CapsLock').addEventListener('click', pressCapsLock)
    }
}


document.addEventListener('keydown', changeLang);
document.addEventListener('keydown', pressCapsLock);
document.querySelector('#CapsLock').addEventListener('click', pressCapsLock)
// document.onload = function () {
//     if (capsLockBtn.onclick) {
//         capsLockBtn.removeEventListener('click', pressCapsLock);
//     }
//     capsLockBtn.addEventListener('click', pressCapsLock);

// };


