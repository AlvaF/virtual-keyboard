export default function keyboardHighlights() {
    let keyElements = document.querySelectorAll('.keyItem');
    document.addEventListener('keydown', (ev) => {
        console.log(ev.key)
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