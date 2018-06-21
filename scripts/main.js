'use strict'

var desk = [];
var full;

function createBaraja(desk) {

  if (full === 1) {
    console.log('Solo se puede generar una Baraja');
    return
  }
  var baraja = {
    type:[
      {
        name:'Spades',
        limit:'10'
      },{
        name:'Clubs',
        limit:'10'
      },{
        name:'Diamonds',
        limit:'10'
      },{
        name:'Flush',
        limit:'10'
      }
    ],
    caracters: ['Jack','Queen','King']
  };



  for (var i = 0; i < baraja.type.length; i++) {
    for (var k = 0; k < baraja.type[i].limit; k++) {
      var card = new Object();
      card.type = baraja.type[i].name;
      card.num = k + 1;
      desk.push(card);
    }
    for (var g = 0; g < baraja.caracters.length; g++) {
      var card = new Object();
      card.type = baraja.type[i].name;
      card.num = baraja.caracters[g];
      desk.push(card);
    }
  }
  full = 1;

  console.log(desk);
  drawBaraja(desk)
  //console.log(desk);
}

function disorder(desk) {
  if (desk === undefined || desk.length == 0) {
    console.log("No se puede desordenar si no hay baraja");
    return;
  }
  var desk = desk.sort(function() {return Math.random() - 0.5});
  console.log(desk);
}

function drawBaraja(desk) {
  for (var i = 0; i < desk.length; i++) {

    $('#carta').append(desk[i].num + ' - ' +desk[i].type + '<br>');

  }
}
