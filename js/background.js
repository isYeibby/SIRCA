function agregarLinea(tipo) {
  const contenedor = document.getElementById(`${tipo}-fields`);

  // Crear contenedor de línea
  const linea = document.createElement('div');
  linea.className = 'campo-linea';

  // Celda 1: número de línea
  const celdaNumero = document.createElement('div');
  celdaNumero.className = 'celda numero-celda';
  celdaNumero.innerHTML = `<span class="numero">${contenedor.children.length + 1}</span>`;

  // Celda 2: Nombre del familiar
  const celdaNombre = document.createElement('div');
  celdaNombre.className = 'celda';
  const inputNombre = document.createElement('input');
  inputNombre.type = 'text';
  inputNombre.placeholder = 'Nombre del familiar';
  celdaNombre.appendChild(inputNombre);

  // Celda 3: Edad de aparición
  const celdaEdad = document.createElement('div');
  celdaEdad.className = 'celda';
  const inputEdad = document.createElement('input');
  inputEdad.type = 'number';
  inputEdad.placeholder = 'Edad de aparición';
  celdaEdad.appendChild(inputEdad);

  // Celda 4: ¿En tratamiento?
  const celdaTratamiento = document.createElement('div');
  celdaTratamiento.className = 'celda';
  const selectTratamiento = document.createElement('select');
  const opciones = ['Sí', 'No'];
  opciones.forEach(opcion => {
    const opt = document.createElement('option');
    opt.value = opcion.toLowerCase();
    opt.textContent = opcion;
    selectTratamiento.appendChild(opt);
  });
  celdaTratamiento.appendChild(selectTratamiento);

  // Botón quitar línea
  const botonQuitar = document.createElement('button');
  botonQuitar.className = 'boton-quitar';
  botonQuitar.innerHTML = '&times;';
  botonQuitar.onclick = function () {
    contenedor.removeChild(linea);
    actualizarNumeros(contenedor);
  };

  // Insertar botón al final
  linea.appendChild(celdaNumero);
  linea.appendChild(celdaNombre);
  linea.appendChild(celdaEdad);
  linea.appendChild(celdaTratamiento);
  linea.appendChild(botonQuitar);

  contenedor.appendChild(linea);
}

// Actualiza los números de línea si se eliminan
function actualizarNumeros(contenedor) {
  const lineas = contenedor.querySelectorAll('.campo-linea');
  lineas.forEach((linea, index) => {
    const numero = linea.querySelector('.numero');
    if (numero) numero.textContent = index + 1;
  });
}

function guardarSeccion(idSeccion) {
  const seccion = document.getElementById(idSeccion);
  const inputs = seccion.querySelectorAll('input, select');
  let valid = true;
  let datos = {};

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.classList.add('input-error');
      valid = false;
    } else {
      input.classList.remove('input-error');
      datos[input.name] = input.value;
    }
  });

  if (!valid) {
    alert('Por favor complete todos los campos requeridos de esta sección.');
    return;
  }

  localStorage.setItem(idSeccion, JSON.stringify(datos));
  alert(`Sección "${idSeccion}" guardada con éxito.`);
}

function guardarTodo() {
  const form = document.getElementById('formulario');

  if (!form.checkValidity()) {
    alert('Por favor complete todos los campos antes de guardar.');
    return false;
  }

  const formData = new FormData(form);
  const datos = {};

  for (let [clave, valor] of formData.entries()) {
    datos[clave] = valor;
  }

  localStorage.setItem('formularioCompleto', JSON.stringify(datos));
  alert('Formulario completo guardado correctamente.');
  return true;
}



