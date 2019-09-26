// pseudocode
// Parameters: meat - "turkey", cheese - "pepperjack", bread - "wheat"
// Work: "Here is your beatiful sandwich is has" + meat + "and " + cheese + "on" + bread + "."
// return value: "Here is your beautiful sandwich. It has turkey and cheese on wheat Enjoy!"

                        //Parameters
function makeSandwich (meat, cheese, bread) {
    var newSandwich = "Here is your beatiful sandwich is has" + meat + "and " + cheese + "on" + bread + ".";
    return newSandwich;
} 
var leosSandwich = makeSandwich("turkey", "pepperjack", "wheat");


function makeChicken (nameOfChicken, typeOfChicken) {
    var chicken = '<article>' +
    '<img src="newchicken.jpg">' +
    '<h3>'
       + nameOfChicken +
    '</h3>' +
    '<p>' +
        'As you can see our product is nothing but the best and you just picked the best chicken!' +
        typeOfChicken +
    '</p>' +
'</article>'
return chicken;
}

var newChicken = prompt('Do you want a free promotional chicken?');
while (newChicken === 'yes' || newChicken === 'Yes' || newChicken === 'YES') {
    var chickenName = prompt("What will the chickens name be?");
    var chickenType = prompt("What type of Chicken?");
    var chickenhtml = makeChicken(chickenName, chickenType);
    console.log(chickenhtml);
    document.write(chickenhtml);
    newChicken = prompt('Do You Want to Add another free chicken?');
  }
