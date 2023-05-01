export default function doTyping() {
    const keyboard = document.querySelector('.keyboard');
    let keyElements = document.querySelectorAll('.keyItem');
    const textArea = document.querySelector('.text');

    keyElements.forEach((el) => {
        el.addEventListener('click', (ev) => {
            if (ev.target.outerText.length <= 1) {
                textArea.value += ev.target.outerText
            } else {
                switch (ev.target.id) {
                    case 'Backspace':
                        textArea.value = textArea.value.substring(0, textArea.value.length - 1);
                        break;
                    case 'Space':
                        textArea.value += " ";
                        break;
                    case 'Enter':
                        textArea.textContent += `${textArea.textContent}\n`
                        break;
                    case 'Delete':
                        textArea.value = textArea.value.slice(0, -1);
                        break;
                    case 'Tab':
                        textArea.value += " "
                        break;
                }
            }
        })
    })
}