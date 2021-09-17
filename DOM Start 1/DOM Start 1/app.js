let ul = document.querySelector('ul');

let wert = 'Wert ';

let gen = document.querySelector('#gen');
let del = document.querySelector('#del');
let input = document.querySelector('#input');

function addList() {
  for (let index = 1; index <= input.value; index++) {
    let li = document.createElement('li');
    li.innerText = `${wert} ${index}`;
    ul.appendChild(li);
  }
}
function deleteLast() {
  if (ul.hasChildNodes() === true) {
    ul.removeChild(ul.lastChild);
  } else {
    alert('Keine Einträge mehr!');
  }
}

gen.addEventListener('click', addList);
del.addEventListener('click', deleteLast);
