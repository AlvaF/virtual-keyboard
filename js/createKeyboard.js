
export default function makeKeyboard(defaultLang) {
    const keyCodes = [
        "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "MetaRight", "Delete", "ControlRight", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"
    ];
    let createKeyboard = () => {
        let out = "";
        for (let i = 0; i < defaultLang.length; i++) {
            out += `<div class="keyItem ${defaultLang[i]}" id="${keyCodes[i]}"> ${defaultLang[i]} </div > `;
            document.querySelector('.keyboard').innerHTML = out;
        }
    }
    createKeyboard()
}