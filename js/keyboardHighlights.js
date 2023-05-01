export default function keyboardHighlights(createkeyboard) {
    let keyElements = document.querySelectorAll('.keyItem');
    let pressed = new Set();
    document.addEventListener('keydown', (ev) => {
        console.log(ev.key);
        keysPressed.add(ev.key);
        if (keysPressed.has('AltLeft') && keysPressed.has('Enter')) {
            createkeyboard();
          }
        // if (ev.code !== 'ShiftLeft' || 'ShiftRight' || 'Enter' || 'ControlLeft' || 'Win' || 'Del' || 'ControlRight' || 'AltLeft' || 'AltRight' || 'Comma' || 'Period') {
        keyElements.forEach(el => {
            if (el.id == ev.key) {
                console.log(true)
                console.log(el.classList);
                console.log(ev.key)

                el.classList.add('active')
            }
        })
        // }

    })
    document.addEventListener('keyup', (ev) => {
        keyElements.forEach(el => {
            if (el.id === ev.key) {
                el.classList.remove('active')
            }
        })
    })
}