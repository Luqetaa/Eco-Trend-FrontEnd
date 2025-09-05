document.addEventListener('DOMContentLoaded', () => {
  //Recuperando o produto do localStorage (ainda em string):
  const produtoJSON = localStorage.getItem('produtoClicado');

  //Se houver um produto de fato:
  if (produtoJSON) {
    //Convertendo em JSON novamente
    const produto = JSON.parse(produtoJSON);

    document.querySelector('.product-image img').src = produto.imagem;
    document.querySelector('.product-title').textContent = produto.nome;
    document.querySelector('.product-price').textContent = produto.preco;
    document.querySelector('.payment-conditions').innerHTML = produto.info;
  } else {
    document.querySelector('body').innerHTML =
      '<h1>Produto não encontrado !</h1>';
  }
});
