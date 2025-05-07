const sounds =[
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3"
]


let instruments =document.querySelectorAll("drum")
document.addEventListener("keyup",function(e){
  if(e.key == "w"){
    instruments[0].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "a"){
    instruments[1].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "s"){
    instruments[2].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "d"){
    instruments[3].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "j"){
    instruments[4].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "k"){
    instruments[5].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "l"){
    instruments[6].computedStyleMap.border = "10px solid #3d465d"
  }
})

document.addEventListener("keydown",function(e){
  if(e.key == "w"){
    let lol = new Audio(sounds[0]) 
    lol.play()
    instruments[0].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "a"){
    let lol = new Audio(sounds[1]) 
    lol.play()
    instruments[1].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "s"){
    let lol = new Audio(sounds[2]) 
    lol.play()
    instruments[2].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "d"){
    let lol = new Audio(sounds[3]) 
    lol.play()
    instruments[3].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "j"){
    let lol = new Audio(sounds[4]) 
    lol.play()
    instruments[4].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "k"){
    let lol = new Audio(sounds[5]) 
    lol.play()
    instruments[5].computedStyleMap.border = "10px solid #3d465d"
  }
  if(e.key == "l"){
    let lol = new Audio(sounds[6]) 
    lol.play()
    instruments[6].computedStyleMap.border = "10px solid #3d465d"
  }
})


// let premium = document.getElementById("premium")

// document.