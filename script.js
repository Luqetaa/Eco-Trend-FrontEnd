//Selecionando todos os cards:
const cards = document.querySelectorAll('.produto-card');

//Adiciona ouvinte para evento de 'click' em todos os cards:
cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    //Recupera os dados nos elementos dentro do card:
    const cardImage = card.querySelector('img').src;
    const cardTitle = card.querySelector('h4').innerHTML;
    const cardPrice = card.querySelector('strong').innerHTML;
    const cardInfo = card.querySelector('p').innerHTML;

    //O elemento clicado vira um objeto:
    const produto = {
      imagem: cardImage,
      nome: cardTitle,
      preco: cardPrice,
      info: cardInfo,
    };

    //Armazenando os dados no localStorage:
    //O JSON foi convertido para string (formato aceito pelo localStorage)
    localStorage.setItem('produtoClicado', JSON.stringify(produto));

    //Redirecionando para a página de checkout:
    window.location.href = 'checkout.html';
  });
});
