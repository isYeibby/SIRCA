function agregarLinea(tipo) {
  const contenedor = document.getElementById(`${tipo}-fields`);
  const numeroLinea = contenedor.querySelectorAll('.campo-linea').length + 1;

  const newField = document.createElement("div");
  newField.classList.add("campo-linea");

newField.innerHTML = `
  <div class="celda numero-celda"><span class="numero">${numeroLinea}</span></div>
  <div class="celda label-celda"><label>Parentesco:</label></div>
  <div class="celda select-celda">
    <select name="relacion[]">
      <option value="">Seleccione</option>
      <option value="padre">Padre</option>
      <option value="madre">Madre</option>
      <option value="abuelos">Abuelos</option>
      <option value="otros">Otros</option>
    </select>
  </div>
  <div class="celda boton-celda">
    <button type="button" class="boton-quitar" onclick="eliminarLinea(this)">-</button>
  </div>
`;

  contenedor.appendChild(newField);
}

// Función para eliminar la línea
function eliminarLinea(element) {
  const contenedor = element.closest('.campo-linea').parentElement;

  // Eliminar la línea
  element.closest('.campo-linea').remove();

  // Reordenar los números para mantener el orden
  let numero = 1;
  const lineas = contenedor.querySelectorAll('.campo-linea');
  
  lineas.forEach(linea => {
    const numeroSpan = linea.querySelector('.numero');
    numeroSpan.textContent = numero++;  // Reasignamos el número
  });
}

