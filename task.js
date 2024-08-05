"use strict"
function parseCount(valuePars){

  if (isNaN(Number.parseInt(valuePars))) {
        const err = new Error("Невалидное значение");
        throw err.message;
    }

    return Number.parseInt(valuePars);
}

function validateCount(valuePars){
    try{
        return parseCount(valuePars);
    }
    catch(err){
        return err;
    }
}


class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < c || this.a + this.c < b || this.b + this.c < a){
            const errTriangle = new Error('Треугольник с такими сторонами не существует');
            throw errTriangle;
        }
    }
    getPerimeter(){
        return this.a + this.b + this.c;
       
    }
    getArea(){
        const p = this.getPerimeter() / 2;
        return (Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))).toFixed(3);
    }
}
function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    }
    catch{
        return {
            getPerimeter: ()=>"Ошибка! Треугольник не существует",
            getArea: ()=>"Ошибка! Треугольник не существует"
        }
    }
}
