function carimbar() {
  const senhaInput = document.getElementById('senhaInput').value;
  const campos = document.querySelectorAll('.campo');

  // Verifica se a senha está correta e carimba o primeiro campo vazio
  for (let i = 0; i < campos.length; i++) {
    if (!campos[i].classList.contains('carimbado') && senhaInput === 'padrao123') {
      campos[i].classList.add('carimbado');
      const img = document.createElement('img');
      img.src = 'img/logo_DS.png'; // Insira o caminho para a sua imagem aqui
      img.alt = 'Logo'; // Insira uma descrição alternativa para acessibilidade
      campos[i].innerHTML = ''; // Limpa o conteúdo anterior
      campos[i].appendChild(img); // Adiciona a imagem ao campo
      break; // Para depois de carimbar o primeiro campo vazio
    }
  }
}
