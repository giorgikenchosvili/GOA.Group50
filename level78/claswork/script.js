// 1)შექმენით დოკუმენტში რამდენიმე ერთნაირი ელემენტი და querySelector()ის და  querySelectorAll() ის გამოყენებით javascript-იდან შეუცვალეთ სტილები


let h1 = document.querySelector("h1")

h1.style.color ="red"

let p = document.querySelectorAll("p")

p[0].style.color =  "green"
p[1].style.color = "green"
p[2].style.color = "green"


// 2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, 
// ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ 
// ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი 
// დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები 

let body = document.body

let perantdiv = document.createElement("div")

body.appendChild(perantdiv)

perantdiv.style.backgroundColor = "red",perantdiv.style.height = "200px",perantdiv.style.width = "300px"

let chaileddiv = document.createElement("div")

chaileddiv.style.backgroundColor = "green",chaileddiv.style.height = "200px",chaileddiv.style.width = "300px"


perantdiv.appendChild(chaileddiv)

body.style.gap = "20px"




