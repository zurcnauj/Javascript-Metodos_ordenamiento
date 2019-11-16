var OrdenarMerge = function(arreglo){
	OrdenarMerge2(arreglo, 0, arreglo.length)
}

var OrdenarMerge2 = function(arreglo ,inicio, final){
	let mitad 
	if(inicio  + 1 < final ){
		mitad = Math.round((inicio + final ) / 2)
		OrdenarMerge2(arreglo, inicio, mitad)
		OrdenarMerge2(arreglo, mitad, final)
		intercalar(arreglo, inicio, mitad, final)
	}
}

var intercalar = function(arreglo, inicio, medio ,final){ 
	let tam = final - inicio
	let init = inicio
	let hasta = medio
	let recorrido = 0
	let aux = new Array(tam)
	while( inicio < hasta && medio < final ){
		if(arreglo[inicio] < arreglo[medio]){
			aux[recorrido++] = arreglo[inicio++]
		}
		else{
			aux[recorrido++] = arreglo[medio++]
		}
	}
	while( inicio < hasta ){
		aux[recorrido++] = arreglo[inicio++]
	}
	while( medio < final ){
		aux[recorrido++] = arreglo[medio++]
	}
	for(let i = 0 ; i < tam ; i++){
		arreglo[init++] = aux[i]
	}
}

var arreglo1 = [0,1,2,3,4,5,6,7,8,9]
OrdenarMerge(arreglo1)
console.log(arreglo1)

var arreglo2 = [9,8,7,6,5,4,3,2,1,0]
OrdenarMerge(arreglo2)
console.log(arreglo2)

var arreglo3 = [1,9,2,8,3,7,4,6,5,0]
OrdenarMerge(arreglo3)
console.log(arreglo3)