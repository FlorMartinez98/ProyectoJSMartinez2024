// Variables y Arrays 
let nombreUsuario = "";
const mascotas = [
  { nombre: "Max", tipo: "perro", edad: 2, raza: "Labrador" },
  { nombre: "Luna", tipo: "perro", edad: 1, raza: "Beagle" },
  { nombre: "Rodolfo", tipo: "perro", edad: 3, raza: "Bulldog" },
  { nombre: "Simba", tipo: "gato", edad: 2, raza: "Siames" },
  { nombre: "Mia", tipo: "gato", edad: 1, raza: "Persa" },
  { nombre: "Coco", tipo: "gato", edad: 3, raza: "Maine Coon" },
];
const voluntarios = [
  { nombre: "Ana", rol: "Coordinadora" },
  { nombre: "Pedro", rol: "Encargado de Adopciones" },
  { nombre: "María", rol: "Encargada de Donaciones" },
  { nombre: "Luis", rol: "Voluntario de Cuidados Especiales" },
];

// Función principal para saludar al usuario y comenzar la aplicación
function saludarUsuario() {
  // Obtener el nombre del usuario
  while (!nombreUsuario) {
    nombreUsuario = prompt("¿Cuál es tu nombre?");
    if (!nombreUsuario) {
      alert("Por favor, ingresa tu nombre.");
    }
  }

  // Obtener la hora actual del día
  const fecha = new Date();
  const hora = fecha.getHours();

  // Determinar qué tipo de saludo se va a hacer según la hora del día
  let saludo;
  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  // Mostrar el mensaje de bienvenida
  const mensajeSaludo = `${saludo}, ${nombreUsuario}! Bienvenido/a a Salvando Huellitas.`;
  alert(mensajeSaludo);

  // Mostrar el menú principal
  mostrarMenuPrincipal();
}

// Función para mostrar el menú principal y procesar las opciones
function mostrarMenuPrincipal() {
  const opcionSeleccionada = prompt(`
    ¡${nombreUsuario}! ¿Qué te gustaría hacer en Salvando Huellitas?

    1. Ver Mascotas en Adopción
    2. Ver Tipos de Donaciones
    3. Ver Sector de Voluntariado
    4. Salir
  `);

  procesarOpcionMenuPrincipal(opcionSeleccionada);
}

// Función de orden superior para procesar las opciones del menú principal
function procesarOpcionMenuPrincipal(opcion) {
  const opciones = {
    "1": mostrarMenuMascotas,
    "2": mostrarMenuDonaciones,
    "3": mostrarMenuVoluntariado,
    "4": function() {
      alert("Gracias por visitar Salvando Huellitas. ¡Hasta pronto!");
    }
  };

  const opcionSeleccionada = opciones[opcion];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuPrincipal(); // Reiniciar menú principal
  }
}

// Función para mostrar el menú de tipos de mascotas y procesar la selección
function mostrarMenuMascotas() {
  const opcionMascota = prompt(`
    ¿Qué tipo de mascota te gustaría ver?

    1. Perros
    2. Gatos
    3. Volver al menú anterior
  `);

  procesarOpcionMenuMascotas(opcionMascota);
}

// Función de orden superior para procesar la selección del menú de tipos de mascotas
function procesarOpcionMenuMascotas(opcionMascota) {
  const opciones = {
    "1": () => mostrarMascotas("perro"),
    "2": () => mostrarMascotas("gato"),
    "3": mostrarMenuPrincipal
  };

  const opcionSeleccionada = opciones[opcionMascota];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuMascotas(); // Reiniciar menú de mascotas
  }
}

// Función para mostrar las mascotas según el tipo seleccionado
function mostrarMascotas(tipoMascota) {
  const mascotasFiltradas = mascotas.filter(mascota => mascota.tipo === tipoMascota);
  let mensajeMascotas = `Mascotas disponibles (${tipoMascota}s):\n\n`;

  mascotasFiltradas.forEach(mascota => {
    mensajeMascotas += `Nombre: ${mascota.nombre}\nEdad: ${mascota.edad} años\nRaza: ${mascota.raza}\n\n`;
  });

  alert(mensajeMascotas);
  mostrarMenuMascotas(); // Volver al menú de mascotas
}

// Función para mostrar el menú de tipos de donaciones y procesar la selección
function mostrarMenuDonaciones() {
  const opcionDonacion = prompt(`
    ¿Cómo te gustaría colaborar?

    1. Donar dinero
    2. Donar objetos
    3. Volver al menú anterior
  `);

  procesarOpcionMenuDonaciones(opcionDonacion);
}

// Función de orden superior para procesar la selección del menú de tipos de donaciones
function procesarOpcionMenuDonaciones(opcionDonacion) {
  const opciones = {
    "1": mostrarMenuOpcionesDinero,
    "2": mostrarMenuOpcionesObjetos,
    "3": mostrarMenuPrincipal
  };

  const opcionSeleccionada = opciones[opcionDonacion];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuDonaciones(); // Reiniciar menú de donaciones
  }
}

// Función para mostrar las opciones de donación de dinero y procesar la selección
function mostrarMenuOpcionesDinero() {
  const opcionMonto = prompt(`
    Selecciona el monto que deseas donar:

    1. $500
    2. $1000
    3. $1500
    4. Volver al menú anterior
  `);

  procesarOpcionDonacionDinero(opcionMonto);
}

// Función para procesar la selección de monto de donación de dinero
function procesarOpcionDonacionDinero(opcionMonto) {
  const opciones = {
    "1": () => confirmarDonacion(500),
    "2": () => confirmarDonacion(1000),
    "3": () => confirmarDonacion(1500),
    "4": mostrarMenuDonaciones
  };

  const opcionSeleccionada = opciones[opcionMonto];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuOpcionesDinero(); // Reiniciar opciones de dinero
  }
}

// Función para confirmar la donación de dinero
function confirmarDonacion(monto) {
  const confirmacion = confirm(`¿Confirmas tu donación de $${monto}?`);
  if (confirmacion) {
    alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
  } else {
    alert("Tu donación ha sido cancelada.");
  }
  mostrarMenuDonaciones(); // Volver al menú de donaciones
}

// Función para mostrar las opciones de donación de objetos y procesar la selección
function mostrarMenuOpcionesObjetos() {
  const opcionObjeto = prompt(`
    ¿Qué tipo de objeto deseas donar?

    1. Alimento
    2. Juguetes
    3. Camitas
    4. Volver al menú anterior
  `);

  procesarOpcionDonacionObjetos(opcionObjeto);
}

// Función para procesar la selección de tipo de objeto de donación
function procesarOpcionDonacionObjetos(opcionObjeto) {
  const opciones = {
    "1": () => confirmarDonacionObjeto("Alimento"),
    "2": () => confirmarDonacionObjeto("Juguetes"),
    "3": () => confirmarDonacionObjeto("Camitas"),
    "4": mostrarMenuDonaciones
  };

  const opcionSeleccionada = opciones[opcionObjeto];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuOpcionesObjetos(); // Reiniciar opciones de objetos
  }
}

// Función para confirmar la donación de objetos
function confirmarDonacionObjeto(tipoObjeto) {
  const confirmacion = confirm(`¿Confirmas tu donación de ${tipoObjeto}?`);
  if (confirmacion) {
    alert("¡Gracias por tu donación! Ayudarás a muchos animales.");
  } else {
    alert("Tu donación ha sido cancelada.");
  }
  mostrarMenuDonaciones(); // Volver al menú de donaciones
}

// Función para mostrar el menú de voluntariado y procesar la selección
function mostrarMenuVoluntariado() {
  const opcionVoluntariado = prompt(`
    ¿Qué te gustaría hacer en el Sector de Voluntariado?

    1. Ver Equipo de Voluntarios
    2. Formar Parte del Equipo de Voluntarios
    3. Volver al menú anterior
  `);

  procesarOpcionMenuVoluntariado(opcionVoluntariado);
}

// Función de orden superior para procesar la selección del menú de voluntariado
function procesarOpcionMenuVoluntariado(opcionVoluntariado) {
  const opciones = {
    "1": mostrarEquipoVoluntariado,
    "2": mostrarFormularioVoluntariado,
    "3": mostrarMenuPrincipal
  };

  const opcionSeleccionada = opciones[opcionVoluntariado];
  if (opcionSeleccionada) {
    opcionSeleccionada();
  } else {
    alert("Opción no válida. Inténtalo de nuevo.");
    mostrarMenuVoluntariado(); // Reiniciar menú de voluntariado
  }
}

// Función para mostrar el equipo de voluntarios
function mostrarEquipoVoluntariado() {
  const mensajeEquipo = voluntarios.map(voluntario => 
    `${voluntario.nombre} - ${voluntario.rol}`).join('\n');
  alert(`Nuestro equipo de voluntarios está compuesto por personas apasionadas por ayudar a los animales:\n\n${mensajeEquipo}`);
  mostrarMenuVoluntariado(); // Volver al menú de voluntariado
}

// Función para mostrar el formulario de voluntariado
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

// Iniciar mostrando el menú principal
saludarUsuario();