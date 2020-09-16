console.log("loaded")
var hiddenpixelH = getRandomIntInclusive(1, 399)
var hiddenpixelW = getRandomIntInclusive(1, 399)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }
  document.getElementById("clickbox").addEventListener('mousedown', function (evt) {
    console.log(evt)
    cursorX = evt.offsetX;
    cursorY = evt.offsetY;
    console.log("Hidden H: ", hiddenpixelH)
    console.log("Hidden W: ", hiddenpixelW)
    console.log("Click H: ", cursorY)
    console.log("Click W: ", cursorX)
    var location = document.getElementById("location")
    var result = document.getElementById("result")
    location.innerHTML = "Click location: " + cursorX + ', ' + cursorY
    if(cursorX==hiddenpixelW && cursorY==hiddenpixelH){
        result.innerHTML = "Result: Correct"
        result.style.color = 'green'
        alert("WINNER!!!!!")
    }else{
        result.innerHTML = "Result: Wrong"
        result.style.color = 'red'
    }
}, true); 