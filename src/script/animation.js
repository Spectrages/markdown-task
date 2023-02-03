
console.log("I worked!")
const id = null;
function myMove() {
    let elem = document.getElementById("square");
    let pos = 0;
    clearInterval(id)
    id = setInterval(frame, 5)
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}