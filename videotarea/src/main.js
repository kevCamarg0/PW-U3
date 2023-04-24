function promedioNum(num1, num2, num3) {
  let promedio = (num1 + num2 + num3)/3;
  return "El promedio es " + promedio;
}

console.log(promedioNum(10, 9, 10));

const calcula = promedioNum;
console.log(calcula(45, 35, 62));

const calculaArea = function(ancho, alto){
    const area = ancho * alto;
    return area;
}
console.log(calculaArea(45, 35));

const calculaArea2 = (ancho, alto) => {
    const Area2 = ancho * alto;
    return Area2;
}

console.log(calculaArea2(25, 10))

const multiplicarNumero = x => x ** 3;
console.log(multiplicarNumero(10));

const avisaUsuario = (fun, x) => {
    alert(fun(x));
}

const saludaUsuario = (nombre = 'Amigo') => {
    return 'Hola ' + nombre;
} 

avisaUsuario(saludaUsuario);