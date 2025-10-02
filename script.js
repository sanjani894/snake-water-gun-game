let a=prompt("enter snake gun water")
let string=["snake","gun","water"]
let b=string[Math.floor(Math.random()*string.length)]
if(a=="snake" && b=="water"){
    alert("you win")
}
else if(a=="snake" && b=="gun"){
     alert("you loose")
}
else if(a=="gun" && b=="water"){
      alert("you loose")
}
else if(b=="snake" && a=="water"){
    alert("you loose")
}
else if(b=="snake" && a=="gun"){
     alert("you won")
}
else if(b=="gun" && a=="water"){
      alert("you won")
}else if(a=="snake" && b=="snake" || 
    a=="gun" && b=="gun" || 
a=="water" && b=="water"){
    alert("draw");
}else{
    alert("not valid input")
}
    