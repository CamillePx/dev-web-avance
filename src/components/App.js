import * as THREE from 'three';

class App {
    constructor() {
        // Initialiser une scène
        this.initScene();
    }
    /**
    *Scene init
    *
    * @returns {undefined}
    *
    * @memberOf App
    */
    initScene() {
        console.info("initScene");
        // Create scene
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._scene = new THREE.Scene();
        
        // Init camera
        this.initCamera();
        // Init renderer
        this.initRenderer();
        
        // Render !!!
    }
    
    initCamera() {
        const fieldOfView= 60;
        const aspectRatio = this._width/this._height;
        const nearPlane = 1;
        const farPlane = 2000;
        
        this._camera = new THREE.PerspectiveCamera(
            fieldOfView,
            aspectRatio,
            nearPlane,
            farPlane
        );
    }
    
    initRenderer(){
        this._renderer = new THREE.WebGLRenderer();
        this._renderer.setSize(this._width, this._height);
        document.body.appendChild(this._renderer.domElement);
    }
    
    render(){
        this._renderer.render(this._scene, this._camera);
    }
}

export default App;