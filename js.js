function changeColor() {
    let element = document.getElementById("changeColor");
    element.style.color = getRandomColor();
}
    
function getRandomColor() {
    return'#' + Math.floor(Math.random()*16777215).toString(16);

}