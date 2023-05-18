// Agregar funcionalidad de click a las tarjetas
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});
