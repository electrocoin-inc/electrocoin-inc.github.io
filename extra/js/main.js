var d, y;

d = new Date();
y = d.getFullYear();

window.onload = function() {
    document.querySelector(".year").innerHTML = y;
}