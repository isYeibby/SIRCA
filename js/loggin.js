// Lógica para el formulario de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim().toLowerCase();

  switch (username) {
    case 'entrevistador':
      window.location.href = 'rol.html';
      break;
    case 'paciente':
      window.location.href = '/paciente/inicio.html';
      break;
    case 'profesor':
      window.location.href = '/profesor/inicio.html';
      break;
    case 'tecnico':
      window.location.href = '/tecnico/inicio.html';
      break;
    default:
      alert('Usuario no reconocido');
      break;
  }
});

// Lógica para selección de rol (en rol.html)
document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.role-button');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const texto = boton.textContent.trim().toLowerCase();

      if (texto === 'entrevistador') {
        window.location.href = '/entrevistador/inicio.html';
      } else if (texto === 'paciente') {
        window.location.href = '/paciente/inicio.html';
      }
    });
  });
});
