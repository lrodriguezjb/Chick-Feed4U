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
       + 'Healthy Rooster' +
    '</h3>' +
    '<p>' +
        'As you can see our product is nothing but the best and you just picked the best chicken!' +
    '</p>' +
'</article>'
return chicken;
}

var newChicken = prompt('Do you want a chicken?');

if (newChicken === 'yes') {
    // if so, ask for name and description
    var chickenName = prompt("What will the chickens name be?");
    var chickenType = prompt("What type of Chicken?");
  
    // give name and description to the constructCatHTML function to let it do its thing
    var chickenhtml = makeChicken(chickenName, chickenType);
  
    // hand the resulting HTML off to document.write
    console.log(chickenhtml);
    document.write(chickenhtml);
  }
