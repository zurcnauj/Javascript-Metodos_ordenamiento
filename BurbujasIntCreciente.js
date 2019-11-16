var ordenarBurbuja = function(arregloInt){
	let hasta = arregloInt.length -1
	let esig
	let aux 
	for(let i = 0 ; i < arregloInt.length ; i++){
		for(let e = 0 ; e < hasta ; e++){
			esig = e+1
			if(arregloInt[e] > arregloInt[esig]){
				aux = arregloInt[e]
				arregloInt[e] = arregloInt[esig]
				arregloInt[esig] = aux
			}
		}
		hasta--
	}
}

var arregloPruebaOrdenado = [1,2,3,4,5]

ordenarBurbuja(arregloPruebaOrdenado)
console.log(arregloPruebaOrdenado);

var arregloPruebaDesordenado = [6,5,3,2,1,0]
ordenarBurbuja(arregloPruebaDesordenado)
console.log(arregloPruebaDesordenado);