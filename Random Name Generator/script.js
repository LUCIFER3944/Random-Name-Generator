var x = {
    one: "Crazy",
    two: "Amazing",
    three: "Fire"
};

var y = {
    one: "engine",
    two: "Food",
    three: "Garments"
};

var z = {
    one: "Bros",
    two: "Limited",
    three: "Hub"
};

var randomKeyX = Object.keys(x)[Math.floor(Math.random() * Object.keys(x).length)];
var randomKeyY = Object.keys(y)[Math.floor(Math.random() * Object.keys(y).length)];
var randomKeyZ = Object.keys(z)[Math.floor(Math.random() * Object.keys(z).length)];


var result = x[randomKeyX] + y[randomKeyY] + z[randomKeyZ];

console.log(result);
