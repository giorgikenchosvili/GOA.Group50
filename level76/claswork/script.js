// 1)შექმენით რამდენიმე თეგი HTML-ში და javascript-ის გამოყენებით მიეცით სასურველი სტილები და შეუცვალეთ კონტენტი

let paragraph = document.getElementsByTagName("p")

paragraph[0].innerHTML = "wsp", paragraph[0].style.color ="red",paragraph[1].style.color = "black",paragraph[1].innerHTML = "hello world"


// 2)შექმენით ფუნქცია რომელიც შეცვლის ელემენტის შიგთავსს , გამოიყენეთ onClick - მეთოდი


function changename(){
    paragraph[0].innerHTML = "giorgi kenchoshvili"
    paragraph[0].style.color = "green"
}

