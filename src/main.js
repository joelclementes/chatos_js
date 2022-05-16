import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/collapse.js";
import './main.css';
import { router } from './router/index.routes.js';

// Para que inicie mostrando el view Home
router(window.location.hash);

window.addEventListener('hashchange',() => {
    router(window.location.hash);
})