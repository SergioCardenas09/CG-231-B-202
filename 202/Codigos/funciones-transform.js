/**
 *Geometria:crea un objeto THREE.Geometry y lo retorna
* Entradas: vertices=arreglo de vertices (arreglo de arreglos de enteros)
* Salidas:  geom= objeto THREE.Geometry generado apartir delo arreglo vertices
*/
function Geometria(vertices){
    geom = new THREE.Geometry();
    for (let i = 0; i < vertices.length; ++i) {
        x = vertices[i][0];
        y = vertices[i][1];
        z = vertices[i][2];
        vector = new THREE.Vector3(x, y, z);
        geom.vertices.push(vector);
    }
    return geom;
    }   
    
    /**
     * Traslacion: Crea la matriz de traslacion a partir del vector vt
     * Entrada: vt=vector de traslacion (arreglo 3 enteros)
     * Salida: matriz: Matriz de traslacion generada apartir de vt
     */
    
    function Traslacion(vt) {
        var matriz = new THREE.Matrix4();
        matriz.set(1, 0, 0, vt[0],
            0, 1, 0, vt[1],
            0, 0, 1, vt[2],
            0, 0, 0, 1);
        return matriz;
    }
    
    /**
     * Escalado: Crea la matriz de escalado "matrizS" a partir de "vs"
     * Entrada: vs=vector de escalado (arreglo 3 enteros)
     * Salida: matriz: Matriz de escalado generada apartir de vt
     */
    function Escalado(vs) {
        var matriz = new THREE.Matrix4();
        matriz.set(vs[0], 0, 0, 0,
            0, vs[1], 0, 0,
            0, 0, vs[2], 0,
            0, 0, 0, 1);
        return matriz;
    }
   
    function EscaladoReal(obj,vt,vs){
        vp=[-vt[0],-vt[1],-vt[2]];
        obj.applyMatrix(Traslacion(vp));
        obj.applyMatrix(Escalado(vs));
        obj.applyMatrix(Traslacion(vt));
    
    }

    /**
     * RotacionX: Crea la matriz de rotacion en x
     * Entrada: Angulo
     * Salida: matriz: Matriz de rotacion en x generada apartir de vt y el angulo
     */
    
    function RotacionX(angulo) {
        var matriz = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matriz.set(1, 0, 0, 0,
                   0, Math.cos(radianes), -Math.sin(radianes), 0,
                   0, Math.sin(radianes), Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matriz;
    }
    
    /**
     * RotacionY: Crea la matriz de rotacion en y
     * Entrada: Angulo
     * Salida: matriz: Matriz de escalado generada apartir de vt y el angulo
     */
    

    function RotacionY(angulo) {
        var matriz = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matriz.set(Math.cos(radianes), 0, Math.sin(radianes), 0,
                   0, 1, 0, 0,
                   -Math.sin(radianes), 0, Math.cos(radianes), 0,
                   0, 0, 0, 1);
        return matriz;
    }

    /**
     * RotacionZ: Crea la matriz de rotacion en Z
     * Entrada: Angulo
     * Salida: matriz: Matriz de escalado generada apartir de vt y el angulo
     */
    
    
    function RotacionZ(angulo) {
        var matriz = new THREE.Matrix4();
        var radianes = THREE.Math.degToRad(angulo);
        matriz.set(Math.cos(radianes), -Math.sin(radianes), 0, 0,
                   Math.sin(radianes), Math.cos(radianes), 0, 0,
                   0, 0, 1, 0,
                   0, 0, 0, 1);
        return matriz;
      }
    
    
    /**
     *rotacion en x Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line 
     * Salida: obj actualizado
     */
    function RotacionRealX (obj, vp,angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(RotacionX(angulo));
        obj.applyMatrix(Traslacion(vp));
        }
    /**
     *rotacion en z Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line
     * Salida: obj actualizado
     */
    function RotacionRealY(obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(RotacionY(angulo));
        obj.applyMatrix(Traslacion(vp));
      }

    
    /**
     *rotacion en y Real
    * Entrada: vp= vector posicion 
     * vs= vector escalado  
     * angulo= cantidad a rotar
     * obj = objeto de tipo THREE.Line a 
     * Salida: obj actualizado
     */
    function RotacionRealZ (obj, vp, angulo) {
        var vt = [-vp[0], -vp[1], -vp[2]];
        var vt = [-vp[0], -vp[1], -vp[2]];
        obj.applyMatrix(Traslacion(vt));
        obj.applyMatrix(RotacionZ(angulo));
        obj.applyMatrix(Traslacion(vp));
    }
    