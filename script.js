function carimbar() {
  const senhaInput = document.getElementById('senhaInput').value;
  const campos = document.querySelectorAll('.campo');

  // Verifica se a senha está correta e carimba o primeiro campo vazio
  for (let i = 0; i < campos.length; i++) {
    if (!campos[i].classList.contains('carimbado') && senhaInput === 'padrao123') {
      campos[i].classList.add('carimbado');
      campos[i].textContent = "DS"; // Adiciona texto indicando que foi carimbado
      break; // Para depois de carimbar o primeiro campo vazio
    }
  }
}
