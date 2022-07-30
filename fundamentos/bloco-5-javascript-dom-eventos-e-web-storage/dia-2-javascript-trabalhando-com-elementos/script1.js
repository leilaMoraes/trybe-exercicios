//Parte I

// Exercício 1
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// Exercício 2
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'purple';

// Exercício 3
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Adicione texto aqui';

// Exercício 4
const primeiroFilho = pai.firstChild;

// Exercício 5
const primeiroFilhoAgain = elementoOndeVoceEsta.previousElementSibling;

// Exercício 6
const text = elementoOndeVoceEsta.nextSibiling;

// Exercício 7
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Exercício 8
const terceiroFilhoAgain = pai.lastElementChild.previousElementSibling;

// Início da parte II

// Exercício 1
const elementoOndeVoceEstaSibiling = document.createElement('section');
elementoOndeVoceEstaSibiling.id = 'brother';
pai.appendChild(elementoOndeVoceEstaSibiling);

// Exercício 2
const elementoOndeVoceEstaChild = document.createElement('section');
elementoOndeVoceEstaChild.id = 'child';
elementoOndeVoceEsta.appendChild(elementoOndeVoceEstaChild);

// Exercício 3
const primeiroFilhoDoFilhoChild = document.createElement('section');
primeiroFilhoDoFilhoChild.id = 'great-grandson';
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoChild);

// Exercício 4
const terceiroFilhoAgainAgain = primeiroFilhoDoFilhoChild.parentNode.parentNode.nextElementSibling;

// Parte III

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const removeAll = pai.childNodes[index];
    if (removeAll.id !== 'elementoOndeVoceEsta') {
        removeAll.remove();
    }
  }

  for (let index = elementoOndeVoceEsta.childNodes.length - 1; index >= 0; index -= 1) {
    const removeAll2 = elementoOndeVoceEsta.childNodes[index];
    if (removeAll2.id !== 'primeiroFilhoDoFilho') {
        removeAll2.remove();
    }
  }