const juego = (evento) => {
 evento.preventDefault(); 
const jugador = "Hola " + document.getElementById("nombre").value;
  document.getElementById("nombrePersona").innerHTML = jugador;
  
}


