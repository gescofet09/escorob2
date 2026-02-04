const boton = document.getElementById('boton');
const list = document.getElementById('list');

boton.addEventListener('click', () => {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = 'Elemento ' + i;
    frag.appendChild(li);
  }

  list.appendChild(frag);

  // Elimina el evento para que no vuelva a ejecutarse
  boton.remove();
});
