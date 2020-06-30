//Autoscroll/Manual Carousel functions are based from
//Stackoverflow == https://stackoverflow.com/questions/40638969/automatic-and-manual-slideshow 

var pictureNumber = 1;
var time = null;
display(pictureNumber);

//Move the slides
function moveSlides(k){
  clearTimeout(time);
  display(pictureNumber += k);
}

//Display the pictures individually
function display(x){
  var pictures = document.getElementsByClassName("main-slides");

  //Start at the beginning of the picture list
  if (x==undefined){
    x = ++pictureNumber;
  };

  //If x is larger than the length, return to the first picture
  if (x > pictures.length){
    pictureNumber = 1;
  };

  if (x < 1){
    pictureNumber = pictures.length;
  }

  for (var a = 0; a < pictures.length; a++){
    pictures[a].style.display = "none";
  };

  pictures[pictureNumber-1].style.display = "block";

  //Slow the autoscroll to 5 seconds
  time = setTimeout(display, 5000);
}

function secretmessage(){
  console.log("Here is a secret message.")
  console.log("If you can see this, you are awesome!");
}

//Initalize the secret message
secretmessage();