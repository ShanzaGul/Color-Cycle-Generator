var box = document.querySelector('.colorCycle');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');

var rr = red.value;
var gg = green.value;
var bb = blue.value;
r = parseInt(rr);
g = parseInt(gg);
b = parseInt(bb);

var myVar;

// This function starts the colorCycle
function tostartthenewcycle(){

   myVar = setInterval(function(){

     //rgb values should remain between 0 - 255 if they go above then 255 it restarts from 0
    if(r < 255)
    {r=r+5;}
    else if (r==255 || r >255)
      {r=0;}

    if(g < 255){
         g=g+6;}
    else if (g==255 || g >255)
    {g=0;}

    if(b < 255)
         {b=b+7;}
    else if (b==255 || b >255) {
      b=0;}



// if all values go 0 setting them again for the values the user entered

      if(r==0 && g==0 && b==0 )
        {
                   rr = red.value;
                   gg = green.value;
                   bb = blue.value;
                   r = parseInt(rr);
                   g = parseInt(gg);
                   b = parseInt(bb);
         }

    setColorCycle(r,g,b);}, 750);
}



// the function which will be repeated again and again after 0.25 seconds setting the box background according to rgb value we incrimented

function setColorCycle(r,g,b) {
  box.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

// this function starts when the button start the color cycle is clicked takes the value entered parse it and those values entered will be then used in functioning

function startColorCycle() {
  var rr = red.value;
  var gg = green.value;
  var bb = blue.value;
  r = parseInt(rr);
  g = parseInt(gg);
  b = parseInt(bb);
  console.log(r);
  console.log(g);
  console.log(b);
  tostartthenewcycle();
}
//this stops the cycle
function stopColorCycle() {
  clearInterval(myVar);
}
