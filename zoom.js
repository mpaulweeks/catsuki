
// filling functions
var currentNumCats = 0;
var fillCats = function(){
  var catPercent = 100 / currentNumCats;
  document.body.style.backgroundSize = catPercent + '%';
}

var randomSize = function(){
  var numCatsAcross = currentNumCats;
  while (numCatsAcross === currentNumCats){
    numCatsAcross = Math.floor(Math.random()*20) + 4;
  }
  currentNumCats = numCatsAcross;
  fillCats();
}

var increasingSize = function(){
  currentNumCats--;
  if (currentNumCats < 1){
    currentNumCats = 40;
  }
  fillCats();
}

var decreasingSize = function(){
  currentNumCats++;
  if (currentNumCats > 40){
    currentNumCats = 1;
  }
  fillCats();
}

// selecting which function
var currentFunc = 0;
var allFuncs = [
  increasingSize,
  decreasingSize,
  // randomSize,
];

var catFunc = function(){
  allFuncs[currentFunc]();
};

var changeFunc = function(){
  if(currentFunc >= allFuncs.length - 1){
    currentFunc = 0;
  } else {
    currentFunc++;
  }
};

// run functions
document.body.addEventListener('click', changeFunc);
setInterval(catFunc, 50);
