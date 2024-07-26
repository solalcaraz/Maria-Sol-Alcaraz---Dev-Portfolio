// script.js
function openTab(evt, tabName) {
    // Ocultar todo el contenido de los tabs
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover la clase "active" de todos los botones
    var tablinks = document.getElementsByClassName("name-tabs");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar el contenido del tab actual y agregar la clase "active" al botón correspondiente
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
