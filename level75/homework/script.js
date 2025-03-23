// 1)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ 
// ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი 
// car is in {condition} condition გამოიყენეთ format-ი


const carinfo ={
    company : "toyota",
    model : "camry",
    year : 2021,
    condition : "good",    
    milage : 100000,
    carfullinfo(){
        for(let i in carinfo){
            if(this.condition === "good")
                console.log(`car is in {good} condition`)
        }
    }
}
console.log(carinfo.carfullinfo())


// 2)არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 
carinfo.color= "black"
carinfo.price = "2000000$"
delete carinfo.milage

console.log(carinfo)

// 3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში

const user ={
    name : "giorgi",
    age : 15,
    lastname : "kenchoshvili",
}
for(let i in user){
    console.log(i, user[i])
}


// 4)შექმენი ობიექტი სახელად student რომელსაც ექნება fullName , scores(scores-უნდა იყოს სია რადგან შეინახოთ რამდენიმე მნიშვნელობა) , 
// ასევე ექნება ორი ფუნქცია 1)averageScore()- რომელიც გამოითცლის საშუალო ქულას , 2)checkStudent() - რომელიც გამოითლის მოსწავლის 
// დონეს ქულების მიხედვით , თუ საშუალო ქულა იქნება 90-ზე მეტი გამოსახეთ კონსოლში შემდეგი ტექსტი ("საუკეთესო სტუდენტი")  , თუ საშუალო ქულა იქნება 90 ზე 
// დაბალი და 60 ზე მაღალი გამოსახეთ "კარგი მოსწავლე" , ხოლო თუ საშუალო ქულა იქნება 60 ზე დაბალი გამოსახეთ "ნორმალური მოსწალე"

const student = {
    fullname: "Giorgi Khmaladze",
    scores: [10, 9, 5, 10, 8],
    averageScore() {
        let sum = 0;
        for (let i of this.scores) {
            sum += i;
        }
        return sum / this.scores.length;
    },
    checkStudent() {
        if (this.averageScore() > 6) { 
            return "You are good";
        } else {
            return "You need improvement";
        }
    }
}