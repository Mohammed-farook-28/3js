import Experience from "../Experience";
import * as THREE from 'three'
export default class World {
    constructor() {
        this.experiennce = new Experience();
        this.scene = this.experiennce.scene;

        const Mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ wireframe: true })
        )
        this.scene.add(Mesh)
    }
}