// Datos de ejemplo para los cuestionarios
const cuestionarios = [
    { nombre: "Información Personal", estado: "completo" },
    { nombre: "Antecedentes Patológicos", estado: "enProceso" },
    { nombre: "Factores de Riesgo", estado: "sinIniciar" },
    { nombre: "Mediciones Corporales", estado: "completo" },
    { nombre: "Actividad Física", estado: "enProceso" }
];

// Seleccionar todos los artículos con la clase "card"
const cards = document.querySelectorAll(".card");

// Asignar colores/clases según el estado
cards.forEach((card) => {
    const texto = card.querySelector("p").textContent.trim();

    // Buscar el cuestionario que coincide por nombre
    const cuestionario = cuestionarios.find(q => q.nombre === texto);
    const estado = cuestionario ? cuestionario.estado : "sinIniciar";

    // Agregar clase según el estado
    card.classList.add(estado);

    // Agregar evento de clic
    card.addEventListener("click", () => {
        switch (texto) {
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
