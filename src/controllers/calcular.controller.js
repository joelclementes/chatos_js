import view from '../views/calcular.html';
import calculo from './calculo.js';

const d = document;

export default () => {
    // Creamos un elemento div
    const divElement = d.createElement('div');

    // Le asignamos al div el contenido del view, en este caso calcular.html
    divElement.innerHTML = view;

    // Devolvemos el contenido al DOM
    return divElement;
}

d.addEventListener("DOMContentLoaded", (e) => {
    // Cuando hacemos clic en el botón de calcular
    calculo();
})

