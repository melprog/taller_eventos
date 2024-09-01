// eventos.js
document.getElementById("btn").addEventListener("click", function(event) {
    event.stopPropagation(); 
    alert('Hola!');
});

document.getElementById("div").addEventListener("click", function() {
    alert("Hola! Soy el div");
});
