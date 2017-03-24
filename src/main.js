/**
 * Main JS entry file
 */
import App from 'App';
import Cube from 'Cube';

global.debug = true;

console.info('Ready! 🚀');

const app = new App();
const cube = new Cube();

for(let i = 0; i < 20; i++){
    app.add(new Cube());
}


