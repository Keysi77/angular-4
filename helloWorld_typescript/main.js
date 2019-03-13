// VARIABLES 
/*
let a: number; // cislo
let b: boolean; // true/false
let c: string; // string
let d: any; // hocico
let e: number[] = [1,2,3]; // pole cisel
let f: any[] = [1, true, 'a', false]; // hockae pole

// konstanty

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;


// Enum



enum Color {Red, Green, Blue};
let backgroundColor = Color.Blue; //  ColorBlue = 2;

*/
// PRETYPOVANIE
/*
let message;
message = 'abc';
// pretypovanie na String leob defaultne je any
let endsWithC = (<string>message).endsWith('c');
// metoda 2 na pretypovanie
let endsWithC2 = (message as string).endsWith('c');
*/
// ARROW FUNCTIONS
/*
let logJS = function(message){ // JS zapis
    console.log(message);
}

let logTS = (message) =>{ // TS zapis
    console.log(message);
}

// INTERFACES

// objekt ako vstupny parameter ked nevieme kolko bude parametrov vstupovat
// napr auto ked ma viac vlastnosti a nevieme koolko ich bude
// inline anotation
interface Point{ //interface ako v Jave alebo c#
    x: number,
    y: number,
}

let drawPointInterface = (point: Point ) =>{

  
    // ...
}

let drawPoint = (point: {x: number, y: number}) =>{

    // ...
}

drawPoint({
    x: 1,
    y: 2
})
*/
// CLASS - skupina premennzych (properties) a funkcii(methods) ktore
// ktore su si pribuzne
// Cohesions - dedicnost
var Point = /** @class */ (function () {
    function Point() {
    }
    // Metody
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
// instancia
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
