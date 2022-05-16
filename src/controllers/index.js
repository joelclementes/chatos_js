import Home from './home.controller';
import Calcular from './calcular.controller';
import notFound from './404.controller';
const pages = {
    home: Home,
    calcular: Calcular,
    notFound: notFound
}

export {pages};