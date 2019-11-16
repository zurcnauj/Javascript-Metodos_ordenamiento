var ordenarBurbuja = function(arregloInt , funcion){
	let hasta = arregloInt.length -1
	let esig
	let aux 
	for(let i = 0 ; i < arregloInt.length ; i++){
		for(let e = 0 ; e < hasta ; e++){
			esig = e+1
			if( funcion( arregloInt[e], arregloInt[esig] ) ){
				aux = arregloInt[e]
				arregloInt[e] = arregloInt[esig]
				arregloInt[esig] = aux
			}
		}
		hasta--
	}
}

function menor (ele1 ,ele2){
	return ele1 < ele2
}

function mayor (ele1, ele2){
	return ele1 > ele1
}

var arreglo = [1,2,3,4,5,6,7,8,9,0]

ordenarBurbuja(arreglo, menor )
console.log(arreglo)