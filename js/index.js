import makeKeyboard from "./createKeyboard.js";
import keyboardHighlights from "./keyboardHighlights.js";
import doTyping from './doTyping.js';
import keyboards from './keyboards.js';
const { engKeyboard, engCapsKeyboard, rusKeyboard, rusCapsKeyboard } = keyboards;
const body = document.querySelector('body');
let curLang = 'en';
let curKeyboard = engKeyboard;
let capsPressed = false;

let savedLanguage = localStorage.getItem('keyboardLanguage');
if (savedLanguage === 'en') {
    curLang = 'en';
    curKeyboard = engKeyboard;
} else if (savedLanguage === 'ru') {
    curLang = 'ru';
    curKeyboard = rusKeyboard;
} else {
    curLang = 'en';
    curKeyboard = engKeyboard;
}

body.innerHTML = "<textarea class='text'></textarea>"
let out = '<div class="keyboard"></div><div class="describtion"><p>Зажмите Shift и Alt для смены языка</p></div>';
body.insertAdjacentHTML('afterbegin', out);




makeKeyboard(curKeyboard);
doTyping(makeKeyboard, curKeyboard, capsPressed);
keyboardHighlights();


function changeLang(event) {
    // если зажаты клавиши Shift и Alt
    if (event.altKey && event.shiftKey) {
        if (curLang === 'en') {
            curLang = 'ru';
            capsPressed === true ? curKeyboard = rusCapsKeyboard : curKeyboard = rusKeyboard;
            localStorage.setItem('keyboardLanguage', 'ru');
            console.log(localStorage);

        } else {
            curLang = 'en';
            capsPressed === true ? curKeyboard = engCapsKeyboard : curKeyboard = engKeyboard;
            localStorage.setItem('keyboardLanguage', 'en');
            console.log(localStorage);
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
document.querySelector('.CapsLock').addEventListener('click', pressCapsLock)



