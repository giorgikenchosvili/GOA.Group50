// 1) საიტზე დაამატეთ ტექსტი. გაუწერეთ მას 
// Javascript-ის კოდი ისე, რომ ტექსტზე დაჭერისას შეიცვალოს იგი და ეკრანზე მის ნაცვლად გამოვიდეს ახალი წინადადება;


let p1 = document.getElementById("p1")

p1.addEventListener("click", function(){
    p1.textContent = "hello guys"
})



// 2) დაამატეთ საიტზე ფოტო, რომელზე მაუსის გადატარებისას, უნდა შეიცვალოს ეს ფოტო. მაუსის გაწევისას კი დაუბრუნდეს ისევ საწყის ფოტოს.

let img = document.getElementById("img")

img.addEventListener("mouseover", function(){
    img.src = "./download (7).jpg"
})

img.addEventListener("mouseout", function(){
    img.src = "./Screenshot 2025-01-06 180026.png"
    img.style.width = "200px"
})


// 3) გააკეთეთ ისეთივე ფუნქციონალი Javascript-ის მეშვეობით რაც გაკვეთილზე გავაკეთეთ, თუმცა 
// ამჯერად მომხმარებელს პირველი Input-ის ველში შემოატანინეთ სიტყვა. მეორე ინფუთის ველში 
// კი თავიდან გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა 
// ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".


function validateInputs() {
    let firstValue = document.getElementById("firstInput").value;
    let secondValue = document.getElementById("secondInput").value;

    if (firstValue === secondValue && firstValue !== "") {
        console.log("The operation was successful");
    } else {
        console.log("The values should be equal and not blank");
    }
}



