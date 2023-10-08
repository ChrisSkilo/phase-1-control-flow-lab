function scuberGreetingForFeet(feet){
if (feet <= 400){
    return `"This one is on me!"`
  }
else if (feet > 2000 && feet <=2500){
    return `"I will gladly take your thirty dollars"`
 }
else {
    return `"No can do"`
 }   
}



function ternaryCheckCity(destinationCity){
  return destinationCity === "NYC" ? 'Ok, sounds good.' : 'No go.';
 }



function switchOnCharmFromTip(tip){
 switch (tip) {
   case "generous":
     return "Thank you so much.";
     break;
   case "is not as generous":
     return "Thank you.";
     break;
   default:
     return "Bye.";
   
  }
}


