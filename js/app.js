var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 945, window.innerWidth / window.innerHeight, 0.1, 1000 );

//textures

var textureWindow = new THREE.TextureLoader().load('textures/window.jpg')

var textureWoodenFloor = new THREE.TextureLoader().load('textures/woodFloor.jpg')
var textureWoodenWall = new THREE.TextureLoader().load('textures/woodenWall.jpg')
var textureHay = new THREE.TextureLoader().load('textures/Hay.jpg')
var textureDresserFront = new THREE.TextureLoader().load('textures/dresserFront.jpg')
var textureDresserWood = new THREE.TextureLoader().load('textures/dresserWood.jpg')
var textureDoor = new THREE.TextureLoader().load('textures/shackDoor.jpg')
var textureMarsh = new THREE.TextureLoader().load('textures/dessertLand2.jpg', function(texture){
   // repeating the texture
   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   texture.offset.set( 2, 2 );
   texture.repeat.set( 5, 5 );
})
var textureSky = new THREE.TextureLoader().load('textures/dessert.jpg')
var texturePlywood = new THREE.TextureLoader().load('textures/plywood.jpg');
var textureGod = new THREE.TextureLoader().load('textures/milosGod.jpg');
var texturePortal = new THREE.TextureLoader().load('textures/portal.png');

//material

const dresserMaterials =  [
new THREE.MeshPhongMaterial( { map: textureDresserFront}),
new THREE.MeshPhongMaterial( { map: textureDresserWood}),
new THREE.MeshPhongMaterial( { map: textureDresserWood}),
new THREE.MeshPhongMaterial( { map: textureDresserWood}),
new THREE.MeshPhongMaterial( { map: textureDresserWood}),
new THREE.MeshPhongMaterial( { map: textureDresserWood})
]

var materialWindow = new THREE.MeshBasicMaterial( {  
   map: textureWindow,
   opacity: 0.7,
   transparent: true,
})
var materialWoodenFloor = new THREE.MeshPhongMaterial( { map: textureWoodenFloor })
var materialWoodenWall = new THREE.MeshPhongMaterial( { map: textureWoodenWall })
var materialHay = new THREE.MeshPhongMaterial( { map: textureHay})
var materialDoor = new THREE.MeshPhongMaterial( { map: textureDoor})
var materialPlane = new THREE.MeshPhongMaterial( {map: textureMarsh} );
var materialPortal = new THREE.MeshPhongMaterial( {map: texturePortal} );
var materialPlywood = new THREE.MeshPhongMaterial( {map: texturePlywood});

//geometry 

const windowGeom = new THREE.BoxBufferGeometry(2, 20, 20);
const DresserGeom = new THREE.BoxBufferGeometry(20, 15,30);
const planeGeometry = new THREE.PlaneGeometry( 2000, 2000, 999);
const portalGeom = new THREE.BoxBufferGeometry(100, 0, 200);
const woodFloorGeom = new THREE.BoxBufferGeometry(100, 0, 100);
const kisameGeom = new THREE.BoxBufferGeometry(100, 0, 100);
const woodWallGeom = new THREE.BoxBufferGeometry(100, 0, 50);
const woodWallHalfGeom = new THREE.BoxBufferGeometry(40, 0, 50);
const HayBedGeom = new THREE.BoxBufferGeometry(20, 15, 70);
const DoorGeom = new THREE.BoxBufferGeometry(20, 3, 30);

//lighting
const color = 0xFFFFFF;
const intensity = 1.5;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(40, -10, 0);
light.target.position.set(-2, 10, 0);
scene.add(light);
scene.add(light.target);

//Shapes
var dresser= new THREE.Mesh(DresserGeom, dresserMaterials);

var windows= new THREE.Mesh(windowGeom, materialWindow);
var windows2= new THREE.Mesh(windowGeom, materialWindow);

var woodWallHalf =new THREE.Mesh( woodWallHalfGeom, materialWoodenWall);
var woodWallHalf2 =new THREE.Mesh( woodWallHalfGeom, materialWoodenWall);

var woodWallHalf3 =new THREE.Mesh( woodWallHalfGeom, materialWoodenWall);
var woodWallHalf4 =new THREE.Mesh( woodWallHalfGeom, materialWoodenWall);

var portal = new THREE.Mesh( portalGeom, materialPortal);
var plane = new THREE.Mesh( planeGeometry, materialPlane );
var Door= new THREE.Mesh( DoorGeom, materialDoor);
var HayBed= new THREE.Mesh( HayBedGeom, materialHay);
var woodenFloor = new THREE.Mesh( woodFloorGeom, materialWoodenFloor);

var woodenWall = new THREE.Mesh( woodWallGeom, materialWoodenWall);
var woodenWall2 = new THREE.Mesh( woodWallGeom, materialWoodenWall);
var woodenWall3 = new THREE.Mesh( woodWallGeom, materialWoodenWall);
var woodenWall4 = new THREE.Mesh( woodWallGeom, materialWoodenWall);

var kisame = new THREE.Mesh( kisameGeom, materialPlywood);

scene.add(windows2, windows, dresser ,woodWallHalf4 ,woodWallHalf3 ,woodWallHalf,woodWallHalf2, kisame,portal,plane, woodenFloor,woodenWall,Door, HayBed, woodenWall2, woodenWall3, woodenWall4);

//Backgrounds
scene.background = (textureSky);

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

   dresser.position.y = -10
   dresser.position.x = -35
   dresser.position.z = -30
   
   //
   windows.position.y = -35
   windows.position.x = 49
   windows.position.z = 0
   //

   windows2.position.y = -35
   windows2.position.x = 0
   windows2.position.z = 51
   windows2.rotation.y = 1.5

   plane.rotation.x = 1.5
   //
   woodenFloor.position.y = -3
   woodenFloor.rotation.x = 0
   //
   kisame.position.y = -45
   kisame.rotation.x = -0
   //
   portal.rotation.x = 1.5
   portal.position.x = -900
   portal.rotation.z = 1.6
   portal.position.y = -100

   //
   Door.rotation.x = 80
   Door.position.x = -50
   Door.rotation.z = 80
   Door.position.y = -20

   //

   HayBed.position.x = 40

   //

   woodWallHalf.rotation.x = 1.6
   woodWallHalf.position.x = 50
   woodWallHalf.rotation.z = 1.6
   woodWallHalf.position.y = -20
   woodWallHalf.position.z = 30

   //

   woodWallHalf2.rotation.x = 1.6
   woodWallHalf2.position.x = 50
   woodWallHalf2.rotation.z = 1.6
   woodWallHalf2.position.y = -20
   woodWallHalf2.position.z = -30

   //
   woodWallHalf3.rotation.x = 80
   woodWallHalf3.position.x = -30
   woodWallHalf3.rotation.z = 0
   woodWallHalf3.position.y = -20
   woodWallHalf3.position.z = 50

   //
   woodWallHalf4.rotation.x = 80
   woodWallHalf4.position.x = 30
   woodWallHalf4.rotation.z = 0
   woodWallHalf4.position.y = -20
   woodWallHalf4.position.z = 50
   
   //

 //wall near bed
   woodenWall.rotation.x = 1.6
   woodenWall.position.x = 50
   woodenWall.rotation.z = 1.6
   woodenWall.position.y = 0

//

   woodenWall2.rotation.x = 1.6
   woodenWall2.position.x = -50  
   woodenWall2.rotation.z = 1.6
   woodenWall2.position.y = -20

//
   woodenWall3.rotation.x = 80
   woodenWall3.position.x = 0
   woodenWall3.rotation.z = 0
   woodenWall3.position.y = 0
   woodenWall3.position.z = 50

//
   woodenWall4.rotation.x = 80
   woodenWall4.position.x = 0
   woodenWall4.rotation.z = 0
   woodenWall4.position.y = -20
   woodenWall4.position.z = -50

   renderer.render( scene, camera );

}

animate();

