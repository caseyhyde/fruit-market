$(document).ready(function(){
  var fruitArray = []; //create array of fruits
  var priceOfFruit = 0;
  var totalCash = 0;
  var fruit = {};

  // var startingPrice = randomNumber(0.5, 9.99);


//fruit object constructor
  function Fruit(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
  }

//making the fruit objects
  var apple = new Fruit("apple", randomNumber(0.5, 9.99), "https://goo.gl/12Julb" );
  var orange = new Fruit("orange", randomNumber(0.5, 9.99), "orangle" );
  var banana = new Fruit("banana", randomNumber(0.5, 9.99), "bunanau" );
  var grapes = new Fruit("grapes", randomNumber(0.5, 9.99), "gupples" );


//pushing objects into array
function addFruitArray(fruit) {
  fruitArray.push(fruit);
}

addFruitArray(apple);
addFruitArray(orange);
addFruitArray(banana);
addFruitArray(grapes);

console.log(fruitArray);
//looping thru each fruit object in the array and appending it to the div
function addToDom() {
  for (var i = 0; i < fruitArray.length; i++) {

    $('#container').append('<div id="' + fruitArray[i].name + '"><img src="'+ fruitArray[i].image + '"></div>');
    $('#container').append('<div id="' + fruitArray[i].price + '">' + fruitArray[i].price + '</div>');
  }
}
//
addToDom(fruitArray);

  //
  $("h1").append(totalCash);//add Total available cash to DOM
  //
  //
  //

  // function fruitPrice(){
  // randomNumber(-.5,.5)
  // }


});

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
