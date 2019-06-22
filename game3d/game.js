// Creating variables
var fgeometry = new THREE.BoxGeometry( 100, 1, 100 );
var fmaterial = new THREE.MeshPhongMaterial({color: "green"});
var floor = new THREE.Mesh( fgeometry, fmaterial );
scene.add( floor );
floor.position.y = -0.5;

var light = new THREE.PointLight( );
var light2 = new THREE.PointLight( );
light.position.set(100,50,100);
light2.position.set(-100, 50, -100);
scene.add( light );
scene.add( light2 );

var wgeometry = new THREE.BoxGeometry(10, 10, 1);
var wmaterial = new THREE.MeshPhongMaterial();

for (let i=0; i<20; ++i){
	let wall = new THREE.Mesh( wgeometry, wmaterial);
	scene.add(wall);
	wall.position.set(Math.random()*100-50, 5, Math.random()*100-50)
}

//0, 0, 16 -> 0, 0, 0
camera.position.x = 5;
camera.position.y = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0))

var bgeometry = new THREE.SphereGeometry(1, 10, 10);
var bmaterial = new THREE.MeshPhongMaterial({color: "red"});

var b = [];
var dx = [], dy = [], dz = [];

function update() {
	let alpha = mouseX/300;
	let beta = -mouseY/300 + Math.PI/2;
	if (isKeyPressed[87]){
		camera.position.x += Math.cos(alpha);
		camera.position.z += Math.sin(alpha);
	}
	if (isKeyPressed[83]){
		camera.position.x -= Math.cos(alpha);
		camera.position.z -= Math.sin(alpha);
	}
	if (isKeyPressed[65]){
		camera.position.x += Math.sin(alpha);
		camera.position.z -= Math.cos(alpha);
	}
	if (isKeyPressed[68]){
		camera.position.x -= Math.sin(alpha);
		camera.position.z += Math.cos(alpha);
	}
	for (let i=0; i<b.length; ++i){
		b[i].position.x += dx[i];
		b[i].position.y += dy[i];
		b[i].position.z += dz[i];
	}
	camera.lookAt(new THREE.Vector3(camera.position.x + Math.cos(alpha)*Math.cos(beta), 5 + Math.sin(beta), camera.position.z + Math.sin(alpha)*Math.cos(beta)));
}

function keyup(key) {
	// Show the pressed keycode in the console
	console.log("Pressed", key);
}
function mouseup() {
	let alpha = mouseX/300;
	let beta = -mouseY/300 + Math.PI/2;
	b.push(new THREE.Mesh(bgeometry, bmaterial));
	dx.push(2*Math.cos(alpha)*Math.cos(beta))
	dy.push(2*Math.sin(beta))
	dz.push(2*Math.sin(alpha)*Math.cos(beta))
	b[b.length-1].position.set(camera.position.x, camera.position.y, camera.position.z);
	scene.add(b[b.length-1]);
}
