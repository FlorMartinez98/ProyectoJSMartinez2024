// Variables y Arrays
let nombreUsuario = "";

// Función para cargar los datos de las mascotas desde el archivo JSON
async function cargarMascotas() {
  try {
    const response = await fetch('mascotas.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo de mascotas.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al cargar las mascotas:', error);
    return [];
  }
}

// Función principal para saludar al usuario y comenzar la aplicación
function saludarUsuario() {
  const storedName = localStorage.getItem('nombreUsuario');
  if (storedName) {
    nombreUsuario = storedName;
    mostrarSaludo();
    mostrarMenuPrincipal();
  } else {
    Swal.fire({
      title: '¿Cuál es tu nombre?',
      input: 'text',
      inputPlaceholder: 'Ingresa tu nombre',
      allowOutsideClick: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Por favor, ingresa tu nombre';
        }
        return null;
      }
    }).then((result) => {
      nombreUsuario = result.value;
      localStorage.setItem('nombreUsuario', nombreUsuario);
      mostrarSaludo();
      mostrarMenuPrincipal();
    });
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
  Swal.fire({
    title: 'Gracias por visitar Salvando Huellitas. ¡Hasta pronto!',
    icon: 'info'
  });
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
async function mostrarMascotas(tipoMascota) {
  const mascotas = await cargarMascotas();
  const mascotasFiltradas = mascotas.filter(mascota => mascota.tipo === tipoMascota);
  
  let mensajeMascotas = `Mascotas disponibles (${tipoMascota}s):<br><br>`;

  mascotasFiltradas.forEach(mascota => {
    mensajeMascotas += `
      <div>
        <img src="${mascota.imagen}" alt="${mascota.nombre}" style="width: 200px; height: 200px;">
        <p>Nombre: ${mascota.nombre}</p>
        <p>Edad: ${mascota.edad} años</p>
        <p>Raza: ${mascota.raza}</p>
        <button onclick="mostrarFormularioAdopcion('${mascota.nombre}', '${mascota.imagen}')">Adoptar</button>
      </div><br>
    `;
  });

  document.getElementById('content').innerHTML = mensajeMascotas + '<button onclick="mostrarMenuMascotas()">Volver</button>';
}

// Función para validar el formato del correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Función para mostrar el formulario de adopción
function mostrarFormularioAdopcion(nombreMascota, imagenMascota) {
  Swal.fire({
    title: `Formulario de Adopción - ${nombreMascota}`,
    html: `
      <img src="${imagenMascota}" alt="${nombreMascota}" style="width: 200px; height: 200px;">
      <input type="text" id="nombreAdoptante" class="swal2-input" placeholder="Tu Nombre">
      <input type="email" id="correoAdoptante" class="swal2-input" placeholder="Tu Correo Electrónico">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const nombreAdoptante = document.getElementById('nombreAdoptante').value;
      const correoAdoptante = document.getElementById('correoAdoptante').value;

      if (!nombreAdoptante || !correoAdoptante) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return false;
      }

      if (!validarEmail(correoAdoptante)) {
        Swal.showValidationMessage('Por favor, ingresa un correo electrónico válido');
        return false;
      }

      return { nombreAdoptante, correoAdoptante };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { nombreAdoptante, correoAdoptante } = result.value;
      Swal.fire(`Gracias, ${nombreAdoptante}! Nos pondremos en contacto contigo a través del correo ${correoAdoptante} para los siguientes pasos de la adopción.`);
      // Aquí podrías agregar la lógica para enviar un correo con la información de la adopción
    }
  });
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
  Swal.fire({
    title: `¿Confirmas tu donación de $${monto}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, donar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('¡Gracias por tu donación! Ayudarás a muchos animales.');
    } else {
      Swal.fire('Tu donación ha sido cancelada.');
    }
    mostrarMenuDonaciones(); // Volver al menú de donaciones
  });
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
  Swal.fire({
    title: `¿Confirmas tu donación de ${tipoObjeto}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, donar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('¡Gracias por tu donación! Ayudarás a muchos animales.');
    } else {
      Swal.fire('Tu donación ha sido cancelada.');
    }
    mostrarMenuDonaciones(); // Volver al menú de donaciones
  });
}

// Función para mostrar el menú de voluntariado y procesar la selección
function mostrarMenuVoluntariado() {
  const menu = `
    <button onclick="mostrarVoluntarios()">Ver Voluntarios</button>
    <button onclick="mostrarFormularioVoluntariado()">Ser Voluntario</button>
    <button onclick="mostrarMenuPrincipal()">Volver al menú anterior</button>
  `;
  document.getElementById('content').innerHTML = menu;
}

// Función para mostrar los voluntarios actuales
async function mostrarVoluntarios() {
  const voluntarios = await cargarVoluntarios();
  let mensajeVoluntarios = 'Equipo de Voluntarios:<br><br>';

  voluntarios.forEach(voluntario => {
    mensajeVoluntarios += `
      <div>
        <p>Nombre: ${voluntario.nombre}</p>
        <p>Rol: ${voluntario.rol}</p>
      </div><br>
    `;
  });

  document.getElementById('content').innerHTML = mensajeVoluntarios + '<button onclick="mostrarMenuVoluntariado()">Volver</button>';
}

// Función para cargar los datos de los voluntarios desde el archivo JSON
async function cargarVoluntarios() {
  try {
    const response = await fetch('voluntarios.json');
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo de voluntarios.');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al cargar los voluntarios:', error);
    return [];
  }
}

// Función para mostrar el formulario para ser voluntario
function mostrarFormularioVoluntariado() {
  Swal.fire({
    title: 'Formulario para ser Voluntario',
    html: `
      <input type="text" id="nombreVoluntario" class="swal2-input" placeholder="Tu Nombre">
      <input type="email" id="correoVoluntario" class="swal2-input" placeholder="Tu Correo Electrónico">
      <input type="text" id="rolVoluntario" class="swal2-input" placeholder="Tu Rol o Especialidad">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const nombreVoluntario = document.getElementById('nombreVoluntario').value;
      const correoVoluntario = document.getElementById('correoVoluntario').value;
      const rolVoluntario = document.getElementById('rolVoluntario').value;

      if (!nombreVoluntario || !correoVoluntario || !rolVoluntario) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return false;
      }

      if (!validarEmail(correoVoluntario)) {
        Swal.showValidationMessage('Por favor, ingresa un correo electrónico válido');
        return false;
      }

      return { nombreVoluntario, correoVoluntario, rolVoluntario };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { nombreVoluntario, correoVoluntario, rolVoluntario } = result.value;
      Swal.fire(`Gracias, ${nombreVoluntario}! Nos pondremos en contacto contigo a través del correo ${correoVoluntario} para coordinar tu rol como voluntario.`);
      // Aquí podrías agregar la lógica para enviar un correo con la información del voluntario
    }
  });
}

// Iniciar la aplicación
document.addEventListener('DOMContentLoaded', saludarUsuario);