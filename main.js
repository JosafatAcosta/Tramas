function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
}

// Mostrar la sección "Inicio" al cargar la página
window.onload = () => showSection('home');