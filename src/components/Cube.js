import * as THREE from 'three';

class Cube {
    constructor(color = 0xff0000) {
        // Initialiser un cube
        this._color = color;
        this.init();
    }
    init() {
        // Create cube
        const geometry = new THREE.BoxBufferGeometry( 50, 50, 50);
        const material = new THREE.MeshLambertMaterial( { 
            color: this._color, 
        } );
        this._mesh = new THREE.Mesh( geometry, material );
        this._mesh.name = "cube";
        this._mesh.position.x = Math.random() * -50;
        this._mesh.position.y = Math.random() * 350;
        this._mesh.position.z = Math.random() * 150;
    }
    
    get mesh(){
        return this._mesh;
    }
    
    update(){
        this._mesh.rotation.x += 0.01;
    }
}

export default Cube;