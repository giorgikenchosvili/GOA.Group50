let hexcolor = '0123456789abcdef'
let resultcolor = '#'

let button = document.getElementById('button')
let color = document.getElementById('color')

let main = document.querySelector('main')


button.addEventListener('click',function(){
    for( let num = 0; num < 6; num++){
        let randomindex = Math.floor(Math.random()*16)
        resultcolor= resultcolor + hexcolor[randomindex]

    }

    color.textContent = resultcolor;
    color.style.color = resultcolor;

    main.style.backgroundColor = resultcolor;

    const audio = new Audio('./level83/homework/Click.mp3');
    // audio.src = "Click.mp3";


    resultcolor ='#'



    

})