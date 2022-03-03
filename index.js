

let all=document.querySelectorAll('.drum');
let length=all.length;

  for( var i=0;i<length;i++)
{
  all[i].addEventListener("click", function()
   {
 var buttonHtml=this.innerHTML;

 playsound(buttonHtml);
 pressedEffect(buttonHtml);
 
});
} 

document.addEventListener('keypress',function (event)
{
playsound(event.key);
// console.log(event.key);
pressedEffect(event.key);
});

const playsound=function(input)
{
  switch(input)
 {
   case"w":
   var sound1=new Audio('sources/sounds/tom-1.mp3');
   sound1.play();
   break;

   case"a":
   var sound2=new Audio("sources/sounds/tom-4.mp3");
   sound2.play();
   break;

   case"s":
   var sound3=new Audio("sources/sounds/tom-3.mp3");
   sound3.play();
   break;

   case"d":
   var sound4=new Audio("sources/sounds/tom-2.mp3");
   sound4.play();
   break;
   
   case"j":
   var sound5=new Audio("sources/sounds/crash.mp3");
   sound5.play();
   break;

   case"k":
   var sound6=new Audio("sources/sounds/snare.mp3");
   sound6.play();
   break;

   case"l":
   var sound7=new Audio("sources/sounds/kick-bass.mp3");
   sound7.play();
   break;

   default: console.log("no valid input!!");
} 
}

  function pressedEffect(buttonPressed)
{
  var active=document.querySelector("." + buttonPressed);
  active.classList.add("pressed");

  setTimeout( function()
  { active.classList.remove("pressed");} ,250 );
}
