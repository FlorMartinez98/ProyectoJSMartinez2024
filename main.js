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
  const storedName = localStorage.getItem('nombreUsuario');
  if (storedName) {
    nombreUsuario = storedName;
    mostrarSaludo();
    mostrarMenuPrincipal();
  } else {
    while (!nombreUsuario) {
      nombreUsuario = prompt("¿Cuál es tu nombre?");
      if (!nombreUsuario) {
        alert("Por favor, ingresa tu nombre.");
      } else {
        localStorage.setItem('nombreUsuario', nombreUsuario);
      }
    }
    mostrarSaludo();
    mostrarMenuPrincipal();
  }
}

function mostrarSaludo() {
  const fecha = new Date();
  const hora = fecha.getHours();
  let saludo;

  if (hora < 12) {
    saludo = "Buenos días";
  } else if (hora < 18) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  const mensajeSaludo = `${saludo}, ${nombreUsuario}! Bienvenido/a a Salvando Huellitas.`;
  document.getElementById('greeting').innerText = mensajeSaludo;
}

// Función para mostrar el menú principal y procesar las opciones
function mostrarMenuPrincipal() {
  const menu = `
    <button onclick="mostrarMenuMascotas()">Ver Mascotas en Adopción</button>
    <button onclick="mostrarMenuDonaciones()">Ver Tipos de Donaciones</button>
    <button onclick="mostrarMenuVoluntariado()">Ver Sector de Voluntariado</button>
    <button onclick="salir()">Salir</button>
  `;
  document.getElementById('menu').innerHTML = menu;
}

// Función para salir
function salir() {
  alert("Gracias por visitar Salvando Huellitas. ¡Hasta pronto!");
  localStorage.removeItem('nombreUsuario');
  document.getElementById('greeting').innerText = '';
  document.getElementById('menu').innerHTML = '';
  document.getElementById('content').innerHTML = '';
}

// Función para mostrar el menú de tipos de mascotas y procesar la selección
function mostrarMenuMascotas() {
  const menu = `
    <button onclick="mostrarMascotas('perro')">Perros</button>
    <button onclick="mostrarMascotas('gato')">Gatos</button>
    <button onclick="mostrarMenuPrincipal()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
}

// Función para mostrar las mascotas según el tipo seleccionado
function mostrarMascotas(tipoMascota) {
  const mascotasFiltradas = mascotas.filter(mascota => mascota.tipo === tipoMascota);
  let mensajeMascotas = `Mascotas disponibles (${tipoMascota}s):<br><br>`;

  mascotasFiltradas.forEach(mascota => {
    mensajeMascotas += `Nombre: ${mascota.nombre}<br>Edad: ${mascota.edad} años<br>Raza: ${mascota.raza}<br><br>`;
  });

  document.getElementById('content').innerHTML = mensajeMascotas + '<button onclick="mostrarMenuMascotas()">Volver</button>';
}

// Función para mostrar el menú de tipos de donaciones y procesar la selección
function mostrarMenuDonaciones() {
  const menu = `
    <button onclick="mostrarMenuOpcionesDinero()">Donar dinero</button>
    <button onclick="mostrarMenuOpcionesObjetos()">Donar objetos</button>
    <button onclick="mostrarMenuPrincipal()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
}

// Función para mostrar las opciones de donación de dinero y procesar la selección
function mostrarMenuOpcionesDinero() {
  const menu = `
    <button onclick="confirmarDonacion(500)">$500</button>
    <button onclick="confirmarDonacion(1000)">$1000</button>
    <button onclick="confirmarDonacion(1500)">$1500</button>
    <button onclick="mostrarMenuDonaciones()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
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
  const menu = `
    <button onclick="confirmarDonacionObjeto('Alimento')">Alimento</button>
    <button onclick="confirmarDonacionObjeto('Juguetes')">Juguetes</button>
    <button onclick="confirmarDonacionObjeto('Camitas')">Camitas</button>
    <button onclick="mostrarMenuDonaciones()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
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
  const menu = `
    <button onclick="mostrarEquipoVoluntariado()">Ver Equipo de Voluntarios</button>
    <button onclick="mostrarFormularioVoluntariado()">Formar Parte del Equipo de Voluntarios</button>
    <button onclick="mostrarMenuPrincipal()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
}

// Función para mostrar el equipo de voluntarios
function mostrarEquipoVoluntariado() {
  const mensajeEquipo = voluntarios.map(voluntario => 
    `${voluntario.nombre} - ${voluntario.rol}`).join('<br>');
  document.getElementById('content').innerHTML = `Nuestro equipo de voluntarios está compuesto por personas apasionadas por ayudar a los animales:<br><br>${mensajeEquipo}<br><button onclick="mostrarMenuVoluntariado()">Volver</button>`;
}

// Función para mostrar el formulario de voluntariado
function mostrarFormularioVoluntariado() {
  const nombreVoluntario = prompt("Por favor, ingresa tu nombre:");

  let emailVoluntario = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  while (!emailVoluntario || !emailRegex.test(emailVoluntario)) {
    emailVoluntario = prompt("Por favor, ingresa tu correo electrónico:");
    if (!emailVoluntario || !emailRegex.test(emailVoluntario)) {
      alert("Debes ingresar un correo electrónico válido.");
    }
  }

  if (nombreVoluntario) {
    alert(`¡Gracias por unirte a nuestro equipo de Voluntariados, ${nombreVoluntario}! Te contactaremos pronto a ${emailVoluntario}.`);
  } else {
    alert("Información no válida. Inténtalo de nuevo.");
  }

  mostrarMenuVoluntariado(); // Volver al menú de voluntariado
}

// Iniciar la aplicación
saludarUsuario();