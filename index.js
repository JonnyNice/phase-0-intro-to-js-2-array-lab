// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat (name) {
    var name_1= [...cats,name];
    return name_1;
}

function prependCat (name) {
    var name_2= [name, ...cats];
    return name_2
}

function removeLastCat (name) {
    var name_3= cats.slice(0,cats.length-1);
    return name_3
}

function removeFirstCat (name) {
    var name_3= cats.slice(1);
    return name_3
}
