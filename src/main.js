/**
 * Main JS entry file
 */
import App from 'App';
import Cube from 'Cube';

console.info('Ready! 🚀');

const app = new App();
const cube = new Cube();

// Ajouter mesh à scène
app.add(cube._mesh);


