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
  }

  