import * as THREE from 'three';

class Cube {
    constructor(color = 0xff0000) {
        // Initialiser un cube
        this._color = color;
        this.init();
    }
    init() {
        console.info("initCube");
        // Create cube
        const geometry = new THREE.BoxBufferGeometry( 50, 50, 50);
        const material = new THREE.MeshBasicMaterial( { 
            color: this._color, 
        } );
        this._mesh = new THREE.Mesh( geometry, material );
        console.info('init Cube', this._mesh);
        this._mesh.name = "cube";
    }
    
    get mesh(){
        return this._mesh;
    }
}

export default Cube;