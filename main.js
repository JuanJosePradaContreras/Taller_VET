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
  
  function actualizarEstadoSalud() {
    let nombre = prompt("Ingrese el nombre de la mascota para actualizar su estado de salud:");
    setTimeout(() => {
      let mascota = mascotas.find(m => m.nombre.toLowerCase() === nombre.toLowerCase());
      if (mascota) {
        let nuevoEstado = prompt("Ingrese el nuevo estado de salud (Sano, Enfermo, En tratamiento):");
        mascota.estadoSalud = nuevoEstado;
        alert("Estado de salud actualizado correctamente.");
      } else {
        alert("Mascota no encontrada.");
      }
    }, 3000);
  }
  
  function eliminarMascota() {
    let nombre = prompt("Ingrese el nombre de la mascota a eliminar:");
    let index = mascotas.findIndex(m => m.nombre.toLowerCase() === nombre.toLowerCase());
    if (index !== -1) {
      mascotas.splice(index, 1);
      alert("Mascota eliminada correctamente.");
    } else {
      alert("Mascota no encontrada.");
    }
  }
  
  function menu() {
    let opcion;
    do {
      opcion = prompt(
        "Menú:\n1. Registrar mascota\n2. Listar mascotas\n3. Buscar mascota\n4. Actualizar estado de salud\n5. Eliminar mascota\n6. Salir"
      );
      switch (opcion) {
        case "1":
          registrarMascota();
          break;
        case "2":
          listarMascotas();
          break;
        case "3":
          buscarMascota();
          break;
        case "4":
          actualizarEstadoSalud();
          break;
        case "5":
          eliminarMascota();
          break;
        case "6":
          alert("Saliendo del programa.");
          break;
        default:
          alert("Opción no válida, intente de nuevo.");
      }
    } while (opcion !== "6");
  }
  
  menu();