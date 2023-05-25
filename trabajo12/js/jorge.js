function saludo() {
  let nombre = prompt("Ingresa tu nombre");
  
  if (nombre) {
    alert("¡Bienvenido, " + nombre + "!");
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
}

saludo();
