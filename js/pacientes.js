// Datos de ejemplo para los pacientes
const pacientes = [
    { id: 2022060051, nombre: "Juan Pérez", diagnostico: "Alto", estado: "terminado",  },
    { id: 2022060052, nombre: "María López", diagnostico: "", estado: "enProceso" },
    { id: 2022060053, nombre: "Carlos García", diagnostico: "", estado: "sinIniciar" },
    { id: 2022060054, nombre: "Ana Torres", diagnostico: "Bajo", estado: "terminado" },
    { id: 2022060055, nombre: "Luis Martínez", diagnostico: "", estado: "enProceso" },
    { id: 2022060056, nombre: "Sofía Ramírez", diagnostico: "", estado: "sinIniciar" },
    { id: 2022060057, nombre: "Pedro Sánchez", diagnostico: "Bajo", estado: "terminado" },
    { id: 2022060058, nombre: "Laura Gómez", diagnostico: "", estado: "enProceso" },
    { id: 2022060059, nombre: "Jorge Herrera", diagnostico: "", estado: "sinIniciar" },
    { id: 2022060060, nombre: "Marta Ruiz", diagnostico: "Alto", estado: "terminado" }
];

// Referencia al cuerpo de la tabla
const tbody = document.querySelector("table tbody");

// Función para generar filas de los pacientes
function generarFilas(pacientesFiltrados = pacientes) {
    tbody.innerHTML = ""; // Limpiar el contenido de la tabla
    pacientesFiltrados.forEach(paciente => {
        const diagnostico = paciente.diagnostico || "Sin diagnóstico disponible"; // Texto por defecto si está vacío
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${paciente.id}</td>
            <td>${paciente.nombre}</td>
            <td>${diagnostico}</td>
            <td><a href="/entrevistador/menuQ.html" class="${paciente.estado}">Ver</a></td>
            <td><a href="/paciente/expediente.html" class="${paciente.diagnostico}">Detalles</a></td>
        `;
        tbody.appendChild(fila);
    });
}

// Función para buscar pacientes
function buscarPacientes() {
    const input = document.getElementById("search");
        const formattedInput = input.value.toLowerCase().trim();
    const pacientesFiltrados = pacientes.filter(paciente =>
paciente.nombre.toLowerCase().includes(formattedInput) || paciente.id.toString().includes(formattedInput) );

    if (pacientesFiltrados.length > 0) {
        generarFilas(pacientesFiltrados);
    } else {
        tbody.innerHTML = `<tr><td colspan="4">No se encontraron resultados</td></tr>`;
    }
}

// Llamar a la función para generar filas al cargar la página
generarFilas();

// Agregar evento de búsqueda
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", buscarPacientes);
const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", buscarPacientes);