function scuberGreetingForFeet(x){
  // Write your code here!
  if (x <= 400){
    return("This one is on me!");
  } else if (x <= 2000){
    return("That will be twenty bucks.");
  } else if (x > 2000 && x <= 2500){
    return("I will gladly take your thirty bucks.");
  } else{
    return("No can do.");
  } 
}
console.log(scuberGreetingForFeet(2501))

function ternaryCheckCity(y){
  // Write your code here!
  if (y=='NYC'){
    return("Ok, sounds good.");
  } else {
    return("No go.");
  }
}
console.log(ternaryCheckCity('Los Angeles'))

function switchOnCharmFromTip(z){
  // Write your code here!
  if (z=='generous'){
    return("Thank you so much.");
  } else if(z=='not as generous'){
    return("Thank you.");
  } else{
    return("Bye.");
  }
}
console.log(switchOnCharmFromTip("Generous"))