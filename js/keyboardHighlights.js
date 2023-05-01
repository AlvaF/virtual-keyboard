export default function keyboardHighlights() {
    let keyElements = document.querySelectorAll('.keyItem');
    document.addEventListener('keydown', (ev) => {
        console.log(ev.code);


        keyElements.forEach((el) => {
            if (el.id == ev.code) {
                console.log(true)
                console.log(el.classList);
                console.log(ev.code)

                el.classList.add('active')
            }
        })

    })
    document.addEventListener('keyup', (ev) => {
        keyElements.forEach(el => {
            if (el.id === ev.code) {
                el.classList.remove('active')
            }
        })
    })
}