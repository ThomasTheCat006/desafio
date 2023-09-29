class FiguraGeometrica{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends FiguraGeometrica{
    constructor(base, altura){
        super(base, altura)
    }

    get calcularArea(){
        return `A area do retangulo é igual a ${this.base * this.altura}`;
    }
}

class Circulo extends FiguraGeometrica{
    constructor(raio, base, altura){
        super(base, altura);
        this.raio = raio;

    }
    
    get calcularArea(){
        return `A area do circulo é igual a ${3.14 * (this.raio ** 2)}`; 
    }

}

var retangulo = new Retangulo(10, 20);
console.log(retangulo.calcularArea);

var circulo = new Circulo(5, 0, 0);
console.log(circulo.calcularArea);