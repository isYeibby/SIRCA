// Datos de ejemplo para los cuestionarios
const cuestionarios = [
    { nombre: "Información Personal", estado: "completo" },
    { nombre: "Antecedentes Patológicos", estado: "enProceso" },
    { nombre: "Factores de Riesgo", estado: "sinIniciar" },
    { nombre: "Mediciones Corporales", estado: "completo" },
    { nombre: "Actividad Física", estado: "enProceso" }
];

// Seleccionar todos los divs con la clase "circle"
const circles = document.querySelectorAll(".circle");

// Asignar colores según el estado
circles.forEach((circle, index) => {
    const estado = cuestionarios[index]?.estado || "sinIniciar"; // Estado por defecto
    circle.classList.add(estado); // Agregar clase según el estado

    // Agregar evento de clic a cada círculo
    circle.addEventListener("click", () => {
        const text = circle.textContent.trim(); // Obtener el texto del círculo
        switch (text) {
            case "Información Personal":
                window.location.href = "/entrevistador/q1.html";
                break;
            case "Antecedentes Patológicos":
                window.location.href = "/entrevistador/q2.html";
                break;
            case "Factores de Riesgo":
                window.location.href = "/entrevistador/q3.html";
                break;
            case "Mediciones Corporales":
                window.location.href = "/entrevistador/q4.html";
                break;
            case "Actividad Física":
                window.location.href = "/entrevistador/q5.html";
                break;
            default:
                console.log("Se hizo clic en un elemento no reconocido.");
        }
    });
});