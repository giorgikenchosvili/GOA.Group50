
// 1) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ დაატრიალეთ ერთიდან ამ რიცხვამდე ციკლი, while ის დახმარებით და დაბეჭდეთ მხოლოდ 1 დან მომხმარებლის შემოტანილ რიცხვამდე 
// 3ისჯერადი და 5ის ჯერადი რიცხვი, ისეთი რიცხვები რომლებიც სამის ჯერადიც არის და ხუთის ჯერადიც

let userInput = prompt("enter number:");
let number = parseInt(userInput);

if (number > 0) {
    let i = 1;
    while (i <= number) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
        i++;
    }
} 

// 2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი


const number2 = prompt("Enter the number:")
const choice = prompt("Enter the choice")

for(let i = 0; i < number; i++){
    if(i % 2 === 0 && choice === "even" ){
        console.log(i)
    }else if(i % 2 !== 0 && choice === "odd"){
        console.log(i)
    }else if(i % 3 == 0 && choice === "divisor"){
        console.log(i)
    }
}