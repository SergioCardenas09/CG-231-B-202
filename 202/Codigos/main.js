
function init() {

    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 100;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 000;
    camera.position.y = 100;
    camera.position.z = 600;
    camera.lookAt(scene.position);

    //geometria de la piramide

    lado=40; //lado 

    h=50; //altura de la piramide

    //Creacion de los vertices de la figura
    v1=[0,0,0];
    v2=[lado,0,0];
    v3=[lado,0,lado];
    v4=[0,0,lado];
    v5=[lado/2,h,lado/2];

    //Agrupamos Vertices
    vertices=[v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];

    //Los pasamos a las figugar
    geom=Geometria(vertices);

    //otra forma de agurparlos
    //[v1,v2,v3,v4,v5]= [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado], [lado/2,h,lado/2]]
    
    // Colores
    color=[{color:0x00FF00},{color:0x0000FF}]

    //material para la figura
    material=[];
    for(i=0;i<2;i++)
        material.push(new THREE.ParticleBasicMaterial(color[i]));


    // Figuras paras las piramides

    figPiramide=[];
    vt= [2*lado,2*lado,0]; //posicion
    figPiramide.push(new THREE.Line(geom,material[0]));
    

    //Transformaciones 


     //translacion
     figPiramide[0].applyMatrix(Traslacion(vt));
 
     //escalar piramide
     EscaladoReal(figPiramide[0],vt,[1.5,1.5,1.5]);
 
     //roracion pitamides
     RotacionRealX(figPiramide[0],vt,45);
     RotacionRealY(figPiramide[0],vt,45);
     RotacionRealZ(figPiramide[0],vt,60);
 
     
    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);	
    scene.add(arrowY);	
    scene.add(arrowZ);

    
    scene.add(figPiramide[0]);

    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;
