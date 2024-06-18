function saludarUsuario() {
  // Obtener el nombre del usuario
  const nombreUsuario = prompt("¿Cuál es tu nombre?");

  // Obtener la hora actual
  const fecha = new Date();
  const hora = fecha.getHours();

  // Personalizar el saludo según la hora del día
  let saludo;
  if (hora < 6) {
    saludo = "Buenos días";
  } else if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  // Mostrar mensaje de bienvenida 
  const mensaje = `${saludo}, ${nombreUsuario}! Bienvenido/a a Salvando Huellitas.`;
  alert(mensaje);

  function mostrarMenuPrincipal() {
    const mensajeMenu = `
      ¡Hola ${nombreUsuario}! ¿Qué te gustaría hacer en Salvando Huellitas?
  
      1. Ver Mascotas en Adopción
      2. Ver Tipos de Donaciones
      3. Ver Sector de Voluntariado
      4. Salir
    `;
    const opcionSeleccionada = prompt(mensajeMenu);
  
    procesarOpcionMenuPrincipal(opcionSeleccionada);
  }

  function procesarOpcionMenuPrincipal(opcion) {
    switch (opcion) {
      case "1":
        mostrarMenuMascotas();
        break;
      case "2":
        mostrarMenuDonaciones();
        break;
      case "3":
        mostrarMenuVoluntariado();
        break;
      case "4":
        alert("Gracias por visitar Salvando Huellitas. ¡Hasta pronto!");
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarMenuPrincipal(); // Reiniciar menú principal
        break;
    }
  }

  function mostrarMenuMascotas() {
    const mensajeMenuMascotas = `
      ¿Qué tipo de mascota te gustaría ver?
  
      1. Perros
      2. Gatos
      3. Volver al menú anterior
    `;
    const opcionMascota = prompt(mensajeMenuMascotas);
  
    procesarOpcionMenuMascotas(opcionMascota);
  }
  
  function procesarOpcionMenuMascotas(opcionMascota) {
    switch (opcionMascota) {
      case "1":
        mostrarMascotas("perro");
        break;
      case "2":
        mostrarMascotas("gato");
        break;
      case "3":
        mostrarMenuPrincipal();
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarMenuMascotas(); // Reiniciar menú de mascotas
        break;
    }
  }
  
  function mostrarMascotas(tipoMascota) {
    const mascotas = [
      { nombre: "Max", tipo: "perro", edad: 2, raza: "Labrador" },
      { nombre: "Luna", tipo: "perro", edad: 1, raza: "Beagle" },
      { nombre: "Rodolfo", tipo: "perro", edad: 3, raza: "Bulldog" },
      { nombre: "Simba", tipo: "gato", edad: 2, raza: "Siames" },
      { nombre: "Mia", tipo: "gato", edad: 1, raza: "Persa" },
      { nombre: "Coco", tipo: "gato", edad: 3, raza: "Maine Coon" },
    ];
  
    const mascotasFiltradas = mascotas.filter(mascota => mascota.tipo === tipoMascota);
    let mensajeMascotas = `Mascotas disponibles (${tipoMascota}s):\n\n`;
  
    mascotasFiltradas.forEach(mascota => {
      mensajeMascotas += `Nombre: ${mascota.nombre}\nEdad: ${mascota.edad} años\nRaza: ${mascota.raza}\n\n`;
    });
  
    alert(mensajeMascotas);
    mostrarMenuMascotas(); // Volver al menú de mascotas
  }
  
  function mostrarMenuDonaciones() {
    const mensajeMenuDonaciones = `
      ¿Cómo te gustaría colaborar?
  
      1. Donar dinero
      2. Donar objetos
      3. Volver al menú anterior
    `;
    const opcionDonacion = prompt(mensajeMenuDonaciones);
  
    procesarOpcionMenuDonaciones(opcionDonacion);
  }
  
  function procesarOpcionMenuDonaciones(opcionDonacion) {
    switch (opcionDonacion) {
      case "1":
        mostrarOpcionesDonacionDinero();
        break;
      case "2":
        mostrarOpcionesDonacionObjetos();
        break;
      case "3":
        mostrarMenuPrincipal();
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarMenuDonaciones(); // Reiniciar menú de donaciones
        break;
    }
  }
  
  function mostrarOpcionesDonacionDinero() {
    const mensajeOpcionesDinero = `
      Selecciona el monto que deseas donar:
  
      1. $500
      2. $1000
      3. $1500
      4. Volver al menú anterior
    `;
    const opcionMonto = prompt(mensajeOpcionesDinero);
  
    procesarOpcionDonacionDinero(opcionMonto);
  }
  
  function procesarOpcionDonacionDinero(opcionMonto) {
    switch (opcionMonto) {
      case "1":
        confirmarDonacion("500");
        break;
      case "2":
        confirmarDonacion("1000");
        break;
      case "3":
        confirmarDonacion("1500");
        break;
      case "4":
        mostrarMenuDonaciones(); // Volver al menú de donaciones
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarOpcionesDonacionDinero(); // Reiniciar opciones de dinero
        break;
    }
  }
  
  function confirmarDonacion(monto) {
    const confirmacion = confirm(`¿Confirmas tu donación de ${monto} pesos?`);
    if (confirmacion) {
      alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
    } else {
      alert("Tu donación ha sido cancelada.");
    }
    mostrarMenuDonaciones(); // Volver al menú de donaciones
  }
  
  function mostrarOpcionesDonacionObjetos() {
    const mensajeOpcionesObjetos = `
      ¿Qué tipo de objeto deseas donar?
  
      1. Alimento
      2. Juguetes
      3. Camitas
      4. Volver al menú anterior
    `;
    const opcionObjeto = prompt(mensajeOpcionesObjetos);
  
    procesarOpcionDonacionObjetos(opcionObjeto);
  }
  
  function procesarOpcionDonacionObjetos(opcionObjeto) {
    switch (opcionObjeto) {
      case "1":
        confirmarDonacionObjeto("Alimento");
        break;
      case "2":
        confirmarDonacionObjeto("Juguetes");
        break;
      case "3":
        confirmarDonacionObjeto("Camitas");
        break;
      case "4":
        mostrarMenuDonaciones(); // Volver al menú de donaciones
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarOpcionesDonacionObjetos(); // Reiniciar opciones de objetos
        break;
    }
  }
  
  function confirmarDonacionObjeto(tipoObjeto) {
    const confirmacion = confirm(`¿Confirmas tu donación de ${tipoObjeto}?`);
    if (confirmacion) {
      alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
    } else {
      alert("Tu donación ha sido cancelada.");
    }
    mostrarMenuDonaciones(); // Volver al menú de donaciones
  }
  
  function mostrarMenuVoluntariado() {
    const mensajeMenuVoluntariado = `
      ¿Qué te gustaría hacer en el Sector de Voluntariado?
  
      1. Ver Equipo de Voluntarios
      2. Formar Parte del Equipo de Voluntarios
      3. Volver al menú anterior
    `;
    const opcionVoluntariado = prompt(mensajeMenuVoluntariado);
  
    procesarOpcionMenuVoluntariado(opcionVoluntariado);
  }
  
  function procesarOpcionMenuVoluntariado(opcionVoluntariado) {
    switch (opcionVoluntariado) {
      case "1":
        mostrarEquipoVoluntariado();
        break;
      case "2":
        mostrarFormularioVoluntariado();
        break;
      case "3":
        mostrarMenuPrincipal();
        break;
      default:
        alert("Opción no válida. Inténtalo de nuevo.");
        mostrarMenuVoluntariado(); // Reiniciar menú de voluntariado
        break;
    }
  }

  function mostrarEquipoVoluntariado() {
    const mensajeEquipo = `
      Nuestro equipo de voluntarios está compuesto por personas apasionadas por ayudar a los animales.
      Aquí están algunos de nuestros miembros:
      
      1. Ana - Coordinadora
      2. Pedro - Encargado de Adopciones
      3. María - Encargada de Donaciones
      4. Luis - Voluntario de Cuidados Especiales
    `;
    alert(mensajeEquipo);
    mostrarMenuVoluntariado(); // Volver al menú de voluntariado
  }

  function mostrarFormularioVoluntariado() {
    const nombreVoluntario = prompt("Por favor, ingresa tu nombre:");
    const emailVoluntario = prompt("Por favor, ingresa tu correo electrónico:");
    
    if (nombreVoluntario && emailVoluntario) {
      alert(`¡Gracias por unirte, ${nombreVoluntario}! Te contactaremos pronto a ${emailVoluntario}.`);
    } else {
      alert("Información no válida. Inténtalo de nuevo.");
    }
    mostrarMenuVoluntariado(); // Volver al menú de voluntariado
  }

  // Iniciar la aplicación mostrando el menú principal
  mostrarMenuPrincipal();
}

// Ejecutar la función principal para iniciar el programa
saludarUsuario();





















// function saludarUsuario() {
//   // Obtener el nombre del usuario
//   const nombreUsuario = prompt("¿Cuál es tu nombre?");

//   // Obtener la hora actual
//   const fecha = new Date();
//   const hora = fecha.getHours();

//   // Personalizar el saludo según la hora del día
//   let saludo;
//   if (hora < 6) {
//     saludo = "Buenos días";
//   } else if (hora < 12) {
//     saludo = "Buenos días";
//   } else if (hora < 18) {
//     saludo = "Buenas tardes";
//   } else {
//     saludo = "Buenas noches";
//   }

//   // Mostrar mensaje de bienvenida 
//   const mensaje = `${saludo}, ${nombreUsuario}! Bienvenido/a a Salvando Huellitas.`;
//   alert(mensaje);

//   function mostrarMenuPrincipal() {
//     const mensajeMenu = `
//       ${nombreUsuario}, ¿Qué te gustaría hacer en Salvando Huellitas?
  
//       1. Ver Mascotas en Adopción
//       2. Ver Tipos de Donaciones
//       3. Ver Sector de Voluntariado
//       4. Salir
//     `;
//     const opcionSeleccionada = prompt(mensajeMenu);
  
//     procesarOpcionMenuPrincipal(opcionSeleccionada);
//   }

//   function procesarOpcionMenuPrincipal(opcion) {
//     switch (opcion) {
//       case "1":
//         mostrarMenuMascotas();
//         break;
//       case "2":
//         mostrarMenuDonaciones();
//         break;
//       case "3":
//         mostrarMenuVoluntariado();
//         break;
//       case "4":
//         alert("Gracias por visitar Salvando Huellitas. ¡Hasta luego!");
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarMenuPrincipal(); // Reiniciar menú principal
//         break;
//     }
//   }

//   function mostrarMenuMascotas() {
//     const mensajeMenuMascotas = `
//       ¿Qué tipo de mascota te gustaría ver?
  
//       1. Perros
//       2. Gatos
//       3. Volver al menú anterior
//     `;
//     const opcionMascota = prompt(mensajeMenuMascotas);
  
//     procesarOpcionMenuMascotas(opcionMascota);
//   }
  
//   function procesarOpcionMenuMascotas(opcionMascota) {
//     switch (opcionMascota) {
//       case "1":
//         mostrarMascotas("perros");
//         break;
//       case "2":
//         mostrarMascotas("gatos");
//         break;
//       case "3":
//         mostrarMenuPrincipal();
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarMenuMascotas(); // Reiniciar menú de mascotas
//         break;
//     }
//   }
  
//   function mostrarMascotas(tipoMascota) {
//     const mascotas = [
//       { nombre: "Max", tipo: "perro", edad: 2, raza: "Labrador" },
//       { nombre: "Luna", tipo: "perro", edad: 1, raza: "Beagle" },
//       { nombre: "Rodolfo", tipo: "perro", edad: 3, raza: "Bulldog" },
//       { nombre: "Simba", tipo: "gato", edad: 2, raza: "Siames" },
//       { nombre: "Mia", tipo: "gato", edad: 1, raza: "Persa" },
//       { nombre: "Coco", tipo: "gato", edad: 3, raza: "Maine Coon" },
//     ];
  
//     const mascotasFiltradas = mascotas.filter(mascota => mascota.tipo === tipoMascota);
//     let mensajeMascotas = `Mascotas disponibles (${tipoMascota}s):\n\n`;
  
//     mascotasFiltradas.forEach(mascota => {
//       mensajeMascotas += `Nombre: ${mascota.nombre}\nEdad: ${mascota.edad} años\nRaza: ${mascota.raza}\n\n`;
//     });
  
//     alert(mensajeMascotas);
//     mostrarMenuMascotas(); // Volver al menú de mascotas
//   }
  
//   function mostrarMenuDonaciones() {
//     const mensajeMenuDonaciones = `
//       ¿Cómo te gustaría colaborar?
  
//       1. Donar dinero
//       2. Donar objetos
//       3. Volver al menú anterior
//     `;
//     const opcionDonacion = prompt(mensajeMenuDonaciones);
  
//     procesarOpcionMenuDonaciones(opcionDonacion);
//   }
  
//   function procesarOpcionMenuDonaciones(opcionDonacion) {
//     switch (opcionDonacion) {
//       case "1":
//         mostrarOpcionesDonacionDinero();
//         break;
//       case "2":
//         mostrarOpcionesDonacionObjetos();
//         break;
//       case "3":
//         mostrarMenuPrincipal();
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarMenuDonaciones(); // Reiniciar menú de donaciones
//         break;
//     }
//   }
  
//   function mostrarOpcionesDonacionDinero() {
//     const mensajeOpcionesDinero = `
//       Selecciona el monto que deseas donar:
  
//       1. $500
//       2. $1000
//       3. $1500
//       4. Volver al menú anterior
//     `;
//     const opcionMonto = prompt(mensajeOpcionesDinero);
  
//     procesarOpcionDonacionDinero(opcionMonto);
//   }
  
//   function procesarOpcionDonacionDinero(opcionMonto) {
//     switch (opcionMonto) {
//       case "1":
//         confirmarDonacion("500");
//         break;
//       case "2":
//         confirmarDonacion("1000");
//         break;
//       case "3":
//         confirmarDonacion("1500");
//         break;
//       case "4":
//         mostrarMenuDonaciones(); // Volver al menú de donaciones
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarOpcionesDonacionDinero(); // Reiniciar opciones de dinero
//         break;
//     }
//   }
  
//   function confirmarDonacion(monto) {
//     const confirmacion = confirm(`¿Confirmas tu donación de ${monto} pesos?`);
//     if (confirmacion) {
//       alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
//     } else {
//       alert("Tu donación ha sido cancelada.");
//     }
//     mostrarMenuDonaciones(); // Volver al menú de donaciones
//   }
  
//   function mostrarOpcionesDonacionObjetos() {
//     const mensajeOpcionesObjetos = `
//       ¿Qué tipo de objeto deseas donar?
  
//       1. Alimento
//       2. Juguetes
//       3. Camitas
//       4. Volver al menú anterior
//     `;
//     const opcionObjeto = prompt(mensajeOpcionesObjetos);
  
//     procesarOpcionDonacionObjetos(opcionObjeto);
//   }
  
//   function procesarOpcionDonacionObjetos(opcionObjeto) {
//     switch (opcionObjeto) {
//       case "1":
//         confirmarDonacionObjeto("Alimento");
//         break;
//       case "2":
//         confirmarDonacionObjeto("Juguetes");
//         break;
//       case "3":
//         confirmarDonacionObjeto("Camitas");
//         break;
//       case "4":
//         mostrarMenuDonaciones(); // Volver al menú de donaciones
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarOpcionesDonacionObjetos(); // Reiniciar opciones de objetos
//         break;
//     }
//   }
  
//   function confirmarDonacionObjeto(tipoObjeto) {
//     const confirmacion = confirm(`¿Confirmas tu donación de ${tipoObjeto}?`);
//     if (confirmacion) {
//       alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
//     } else {
//       alert("Tu donación ha sido cancelada.");
//     }
//     mostrarMenuDonaciones(); // Volver al menú de donaciones
//   }
  
//   function mostrarMenuVoluntariado() {
//     const mensajeMenuVoluntariado = `
//       ¿Qué te gustaría hacer en el Sector de Voluntariado?
  
//       1. Ver Equipo de Voluntarios
//       2. Formar Parte del Equipo de Voluntarios
//       3. Volver al menú anterior
//     `;
//     const opcionVoluntariado = prompt(mensajeMenuVoluntariado);
  
//     procesarOpcionMenuVoluntariado(opcionVoluntariado);
//   }
  
//   function procesarOpcionMenuVoluntariado(opcionVoluntariado) {
//     switch (opcionVoluntariado) {
//       case "1":
//         mostrarEquipoVoluntariado();
//         break;
//       case "2":
//         mostrarFormularioVoluntariado();
//         break;
//       case "3":
//         mostrarMenuPrincipal();
//         break;
//       default:
//         alert("Opción no válida. Inténtalo de nuevo.");
//         mostrarMenuVoluntariado(); // Reiniciar menú de voluntariado
//         break;
//     }
//   }
//   function mostrarEquipoVoluntariado() {
//     const mensajeEquipo = `
//       Nuestro equipo de voluntarios está compuesto por personas apasionadas por ayudar a los animales.
//       Aquí están algunos de nuestros miembros:
      
//       1. Ana - Coordinadora
//       2. Pedro - Encargado de Adopciones
//       3. María - Encargada de Donaciones
//       4. Luis - Voluntario de Cuidados Especiales
//     `;
//     alert(mensajeEquipo);
//     mostrarMenuVoluntariado(); // Volver al menú de voluntariado
//   }

//   function mostrarFormularioVoluntariado() {
//     const nombreVoluntario = prompt("Por favor, ingresa tu nombre:");
//     const emailVoluntario = prompt("Por favor, ingresa tu correo electrónico:");
    
//     if (nombreVoluntario && emailVoluntario) {
//       alert(`¡Gracias por unirte, ${nombreVoluntario}! Te contactaremos pronto a ${emailVoluntario}.`);
//     } else {
//       alert("Información no válida. Inténtalo de nuevo.");
//     }
//     mostrarMenuVoluntariado(); // Volver al menú de voluntariado
//   }

//   // Iniciar la aplicación mostrando el menú principal
//   mostrarMenuPrincipal();
// }

// // Ejecutar la función principal para iniciar el programa
// saludarUsuario();





























































