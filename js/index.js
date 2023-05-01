import makeKeyboard from "./createKeyboard.js";
import keyboardHighlights from "./keyboardHighlights.js";
import doTyping from './doTyping.js';
import keyboards from './keyboards.js';

const { engKeyboard, engCapsKeyboard, rusKeyboard, rusCapsKeyboard } = keyboards;
const body = document.querySelector('body')
body.innerHTML = "<textarea class='text'></textarea>"
let out = '<div class="keyboard"></div>';
body.insertAdjacentHTML('afterbegin', out);
const defaultLang = engKeyboard;

makeKeyboard(defaultLang);
doTyping();
keyboardHighlights();