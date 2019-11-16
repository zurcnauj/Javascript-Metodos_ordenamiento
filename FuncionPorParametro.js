 function ejemplo1(fn) {
  fn();
}

ejemplo1(function() {
  console.log("hola");
});  // "hola"

 function fun_resta(ele1, ele2){
	return ele1 - ele2
}

function fun_suma (ele1, ele2){
	return ele1 + ele2
}

var funciones = function(ele1,ele2,funcion){
	return funcion(ele1,ele2)
}

console.log(funciones(1, 2, fun_resta ))