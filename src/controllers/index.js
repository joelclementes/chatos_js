import Home from './home.controller';
import Productos from './productos.controller';
import notFound from './404.controller';
const pages = {
    home: Home,
    productos: Productos,
    notFound: notFound
}

export {pages};