var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );

//texture 

var textureWoodenFloor = new THREE.TextureLoader().load('textures/woodFloor.jpg')
var textureWoodenWall = new THREE.TextureLoader().load('textures/woodenWall.jpg')
var textureHay = new THREE.TextureLoader().load('textures/Hay.jpg')
var textureDoor = new THREE.TextureLoader().load('textures/dark door.jpg')


//material

var materialWoodenFloor = new THREE.MeshPhongMaterial( { map: textureWoodenFloor })
var materialWoodenWall = new THREE.MeshPhongMaterial( { map: textureWoodenWall })
var materialHay = new THREE.MeshPhongMaterial( { map: textureHay})
var materialDoor = new THREE.MeshPhongMaterial( { map: textureDoor})

//geometry 

const woodFloorGeom = new THREE.BoxBufferGeometry(100, 0, 100);
const woodWallGeom = new THREE.BoxBufferGeometry(100, 0, 50);
const HayBedGeom = new THREE.BoxBufferGeometry(15, 7, 50);
const DoorGeom = new THREE.BoxBufferGeometry(40, 10, 50);

//light
const color = 0xFFFFFF;
const intensity = 1.5;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, -10, 0);
light.target.position.set(-2, 10, 0);
scene.add(light);
scene.add(light.target);

//Shapes

var Door= new THREE.Mesh( DoorGeom, materialDoor);

var HayBed= new THREE.Mesh( HayBedGeom, materialHay);

var woodenFloor = new THREE.Mesh( woodFloorGeom, materialWoodenFloor);

var woodenWall = new THREE.Mesh( woodWallGeom, materialWoodenWall);

var woodenWall2 = new THREE.Mesh( woodWallGeom, materialWoodenWall);

var woodenWall3 = new THREE.Mesh( woodWallGeom, materialWoodenWall);

var woodenWall4 = new THREE.Mesh( woodWallGeom, materialWoodenWall);

scene.add(woodenFloor,woodenWall,Door, HayBed, woodenWall2, woodenWall3, woodenWall4);

//Backgrounds


// cam position
camera.position.z = -9;
camera.position.x = 10;
camera.position.y = -7;

//
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
controls = new THREE.OrbitControls( camera,renderer.domElement);

//

function animate() {
   requestAnimationFrame( animate );

   Door.rotation.x = 80
   Door.position.x = -50
   Door.rotation.z = 80
   Door.position.y = -20

   HayBed.position.x = 40
 //

   woodenWall.rotation.x = 80
   woodenWall.position.x = 50
   woodenWall.rotation.z = 80
   woodenWall.position.y = -20

//

   woodenWall2.rotation.x = 80
   woodenWall2.position.x = -50  
   woodenWall2.rotation.z = 80
   woodenWall2.position.y = -20

//
   woodenWall3.rotation.x = 80
   woodenWall3.position.x = 0
   woodenWall3.rotation.z = 160
   woodenWall3.position.y = -20
   woodenWall3.position.z = 50

//

   woodenWall4.rotation.x = 80
   woodenWall4.position.x = 0
   woodenWall4.rotation.z = 160
   woodenWall4.position.y = -20
   woodenWall4.position.z = -50

   renderer.render( scene, camera );

}

animate();

