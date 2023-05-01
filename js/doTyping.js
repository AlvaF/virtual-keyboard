export default function doTyping(createkeyboard) {
    const keyboard = document.querySelector('.keyboard');
    let keyElements = document.querySelectorAll('.keyItem');
    const textArea = document.querySelector('.text');
    keyElements.forEach((el) => {
        el.addEventListener('click', (ev) => {
            console.log(ev.target.id);
            console.log()
            if (ev.target.id.length <= 1) {
                textArea.value += ev.target.id
            } else {
                switch (ev.target.id) {
                    case 'Backspace':
                        textArea.value = textArea.value.substring(0, textArea.value.length - 1);
                        break;
                    case 'Space':
                        textArea.value += " ";
                        break;
                    case 'CapsLock':
                        createkeyboard()
                        break;
                }
            }
        })
    })
}