$(document).ready(function(){
  var fruitArray = []; //create array of fruits
  var priceOfFruit = 0;
  var totalCash = 100;
  var fruit = {};
  //making the fruit objects
  var apple = new Fruit("apple", randomNumber(0.5, 9.99), "https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg");
  var orange = new Fruit("orange", randomNumber(0.5, 9.99), "https://s-media-cache-ak0.pinimg.com/originals/79/09/7e/79097edf37d134a666e1ac82129d4243.jpg" );
  var banana = new Fruit("banana", randomNumber(0.5, 9.99), "http://saltmarshrunning.com/wp-content/uploads/2014/09/bananasf.jpg" );
  var pears = new Fruit("pears", randomNumber(0.5, 9.99), "http://www.onlyfoods.net/wp-content/uploads/2013/06/Pears.jpg" );
  //adding objects to the fruit array
  addFruitArray(apple);
  addFruitArray(orange);
  addFruitArray(banana);
  addFruitArray(pears);
  //add fruits to DOM
  $('#totalCash').append(totalCash);
  addToDom(fruitArray);
  // replacePrice(fruitArray);
  // setInterval(modifyFruitPrices, 5000);

  //update total cash from button click
  $('#container').on('click', 'button', function() {
    console.log($(this).prev().data('price'));
    totalCash -= $(this).prev().data('price');
    console.log(totalCash);
    removeFromTotalCash();
  });



/*****************
FUNCTIONS
******************/
  function removeFromTotalCash() {
    $('#totalCash').text('Total Available Cash: $' + totalCash.toFixed(2));
  }

  //fruit object constructor
  function Fruit(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
  }
  //pushing objects into array
  function addFruitArray(fruit) {
    fruitArray.push(fruit);
  }
  //add objects to dom
  function addToDom() {
    for (var i = 0; i < fruitArray.length; i++) {
      $('#container').append('<div id="' + fruitArray[i].name + 'container"></div>');
      $('#' + fruitArray[i].name + 'container').append('<div id="' + fruitArray[i].name + '"><img src="'+ fruitArray[i].image + '"></div>');
      $('#' + fruitArray[i].name + 'container').append('<div id="' + fruitArray[i].name + 'price" class="price">' + fruitArray[i].price + '</div>');
      $('#' + fruitArray[i].name + 'price').data('price', fruitArray[i].price);
      $('#' + fruitArray[i].name + 'container').append('<button id="' + fruitArray[i].name + 'BuyButton">BUY</button>');
    }
  }
  //replace prices in fruitArray
  function replacePrice(fruitArray) {
      for (var i = 0; i < fruitArray.length; i++) {
        var priceChange = randomNumber(-0.5, 0.5);
        var newPrice =  fruitArray[i].price + priceChange;
        fruitArray[i].price = newPrice;
      }
      $('#container').empty();
      addToDom();
    }
  //calls replacePrice
  function modifyFruitPrices() {
    replacePrice(fruitArray);
  }
});

function randomNumber(min, max){
    return Number((Math.random() * (1 + max - min) + min).toFixed(2));
}
