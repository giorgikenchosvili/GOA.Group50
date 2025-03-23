// 1)შექმენით ობიექტი სახელად myInfo სადაც შეინახავთ თქვენს სახელს, გვარს, ასაკს და ჰობის
// 2)შექმნილი ობიექტიდან გამოიტანეთ ყველა მნიშვნელობა ცალ-ცალკე და შემდეგ ობიექტს დაამატეთ თქვენი ჯგუფი

const myinfo = {
    name : "giorgi",
    age : 15,
    lastname : "kenchoshvili",
}

// console.log(myinfo)
console.log(myinfo.name)
console.log(myinfo.age)
console.log(myinfo.lastname)
myinfo.grupe  = "50"


// 3)Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, 
// ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"


let name1 = prompt("enter your name: ")
let lastname2 =prompt("enter your lastname: ")
let age1 = prompt("enter your age")
let hob1 =prompt("enter your hob")


const info ={
    name: name1  ,
    lastname : lastname2,
    age : age1 ,
    hob : hob1

}
info.name =name1
info.lastname = lastname2
info.age =age1
info.hob =hob1


console.log(info)


// 4)შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები

console.log(Object.keys(info))
console.log(Object.values(info))


// 5)შექმნილ ობიექტს გადაუარეთ for ციკლით და გამოიტანეთ key და value შემდეგი ფორმატით: "{key} is {value}"


for(let i in info){
    console.log(i+" is "+ String(info[i]))
}

console.log()


// შექმენით ქვემოთ მოცემული ობიექტის მსგავსი ობიექტი თქვენს სასურველ მანქანაზე და დაამატეთ ფუნქცია 
// CarFullInfo, რომლის გამოძაღებაზეც გამოიტანს მთლიან ინფორმაციას მანქანაზე(აუცილებლად გამოიყენეთ string formatting)


const carinfo ={
    brand : "toyota",
    model : "camry",
    year : 2021,
    color : "darkblue",
    iselectric : false,    
    carfullinfo(){
        return this.brand + ' ' + this.model + ' ' + String(this.year) + ' ' + this.color + ' ' + String(this.iselectric)
    }
}

console.log(carinfo.carfullinfo())
