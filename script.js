var username = prompt("What is your Chicken Name?");

console.log(username);

document.write('<p>Hi, ' + username + '!</p>');

var wantToPurchase = prompt("Are you planning to purchase for your chicken!?");
if (wantToPurchase === 'yes') { 
    document.write('<p>We are really happy that you are taking care of your chicken please purchase now!</p>');}
    else {
        document.write('<p>Ok I guess you dont care bye!</p>')

    }

