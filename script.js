const divCaixa = document.querySelector('.caixa');

divCaixa.addEventListener('mousemove', (event) => {
  divCaixa.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`;
})