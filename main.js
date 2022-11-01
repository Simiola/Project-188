const geometry = new THREE.TorusGeometry( 10, 3, 16, 100)
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true} );
const torus = new THREE.Mesh( geometery, material );

screen.add(torus)

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render(scene, camera);

}

animate()