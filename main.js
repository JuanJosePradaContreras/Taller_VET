class Mascota {
    constructor(nombre, especie, edad, peso, estadoSalud) {
      this.nombre = nombre;
      this.especie = especie;
      this.edad = edad;
      this.peso = peso;
      this.estadoSalud = estadoSalud;
    }
  }
  
  const mascotas = [];
  
  function registrarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota:");
    let especie = prompt("Ingrese la especie de la mascota (Perro, Gato, etc.):");
    let edad = prompt("Ingrese la edad de la mascota:");
    let peso = prompt("Ingrese el peso de la mascota:");
    let estadoSalud = prompt("Ingrese el estado de salud (Sano, Enfermo, En tratamiento):");
  

  setTimeout(() => {
    mascotas.push(new Mascota(nombre, especie, edad, peso, estadoSalud));
    alert("Mascota registrada exitosamente.");
  }, 2000);
}

function listarMascotas() {
  if (mascotas.length === 0) {
    alert("No hay mascotas registradas.");
    return;
  }
  let lista = "Lista de mascotas:\n";
  mascotas.forEach((mascota, index) => {
    lista += `${index + 1}. ${mascota.nombre} - ${mascota.especie} - ${mascota.edad} años - ${mascota.peso}kg - ${mascota.estadoSalud}\n`;
  });
  alert(lista);
}

function buscarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota a buscar:");
    setTimeout(() => {
      let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
      if (mascota) {
        alert(`Mascota encontrada:\nNombre: ${mascota.nombre}\nEspecie: ${mascota.especie}\nEdad: ${mascota.edad} años\nPeso: ${mascota.peso} kg\nEstado de salud: ${mascota.estadoSalud}`);
      } else {
        alert("Mascota no encontrada.");
      }
    }, 2000);
  }
  
