function lista(item1, item2, item3) {
  let listaMandado = (item1  + item2 + item3);
  return "La lista es " + listaMandado;
}

console.log(lista('Avena ', 'Leche ', 'Canela'));

const listar = lista;
console.log(listar('Agua ', 'Proteina ', 'Carbohidratos'));


const perimetroCuadrado = function(lado){
    const perimetro = 4*lado;
    return perimetro;
}
console.log(perimetroCuadrado(5));

const calculaArea = (ancho, alto) => {
    const Area = ancho * alto;
    return Area;
}

console.log(calculaArea(25, 10))

const areaCirculo = x => 3.1416 * (x*x);
console.log(areaCirculo(2));

const avisaUsuario = (fun, x) => {
    alert(fun(x));
}

const resultado = (total = 0) => {
    return 'El resultado es ' + total;
} 

avisaUsuario(resultado, areaCirculo(2));

