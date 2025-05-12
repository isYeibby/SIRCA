// Datos de ejemplo para los pacientes
const pacientes = [
    { id: 1, nombre: "Juan Pérez", diagnostico: "De acuerdo con la escala de Framingham, el paciente presenta un riesgo cardiovascular a 10 años del 20%, lo que lo clasifica como riesgo alto. Los factores que más contribuyen son: hipertensión no controlada, dislipidemia severa, obesidad abdominal, y antecedentes familiares.", estado: "terminado" },
    { id: 2, nombre: "María López", diagnostico: "", estado: "enProceso" },
    { id: 3, nombre: "Carlos García", diagnostico: "", estado: "sinIniciar" }
];

// Referencia al cuerpo de la tabla
const tbody = document.querySelector("table tbody");

// Generar filas dinámicamente
pacientes.forEach(paciente => {
    const diagnostico = paciente.diagnostico || "Sin diagnóstico disponible"; // Texto por defecto si está vacío
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${paciente.id}</td>
        <td>${paciente.nombre}</td>
        <td>${diagnostico}</td>
        <td><a href="/entrevistador/menuQ.html" class="${paciente.estado}">Ver</a></td>
    `;
    tbody.appendChild(fila);
});