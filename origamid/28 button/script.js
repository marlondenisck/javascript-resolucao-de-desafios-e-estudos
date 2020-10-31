// 1 - Selecionamos os elementos
const formControles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

// 2 - Adicionamos evento ao formulário 
formControles.addEventListener('change', handleChange);

// 2.1 Evento atribuido ao formulário 
function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;

  handleStyle[name](value);
  showCssValuesInHtml();
  setValuesInLocalStorage(name, value);
}

// 3 - Objeto com propriedades e metodos para atribuição do método handleChange
const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'rem';
  },
  border(value) {
    this.element.style.border = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
  
}

// 4 - Mostrar o CSS no HTML
function showCssValuesInHtml() {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

// 5 - Salvar no local storage
function setValuesInLocalStorage(name, value) {
  localStorage[name] = value;
}

// 6 - Pegar os dados locais e renderiza-los 
function getValuesInLocalStorage() {
  const properties = Object.keys(localStorage);
  properties.forEach(p => {
    handleStyle[p](localStorage[p]);
    formControles.elements[p].value = localStorage[p];
    showCssValuesInHtml();
  });
}

getValuesInLocalStorage();