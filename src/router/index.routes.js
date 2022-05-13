import {pages} from '../controllers/index';
let content = document.getElementById('root');
const router = async (route) =>{
    content.innerHTML = '';
    switch (route){
        case '': {
            return content.appendChild(pages.home());
        }

        case '#/productos':
            return content.appendChild(await pages.productos());
        default:
            return content.appendChild(pages.notFound());
    }
}

export {router};