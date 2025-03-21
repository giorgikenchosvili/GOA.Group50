// 1)დაწერეთ JavaScript-ის პროგრამა რომელიც დაითვლის სიაში ელემენტების რაოდენობას, შედეგი გამოიტანეთ კონსოლში

let name = ["GIORGI",    "NIKOLOZI",  "ANDREA", "SOFO", "TAZO ","MARIAMI", "ANGELA", "KONSTANTINE"]

console.log(name.length)


// 2)for-ციკლის გამოყენებით იპოვეთ სიაში ყველაზე დიდი და ყველაზე პატარა რიცხვები ?

let numbers = [3, 7, 1, 9, 12, -5, 4, 8]

numbers.sort()

console.log(numbers[0])
console.log(numbers[numbers.length -1])



// 3)შექმენით სია, ამ სიაში შეინახეთ String-ტიპის მონაცემები და for-ციკლის გამოყენებით ახალ სიაში დაამატეთ ძველი სიიდან ყოველი სიტყვის პირველი ასო

let name1 = ["lika", "mikaeli","temo"]
let name2= []



for( let  i = 0; i < name1.length; i++ ){
    name2.push(name1[0]); 
}


console.log(name2)


// 4)შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ?

let person = [
    {name:"Giorgi",lastName: "Khmaladze"},
    {name:"Vano",lastName:"Motiashvili"}
    ]

let inicials = []

for(let i of person){
    inicials.push(${i.name[0]}.${i.lastName[0]})
}



// 5)Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით


let numbers2 = [3, -7, 1, -9, 12, -5, 4, 8];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2 < 0) {
        numbers2.splice(i, 1, 0); 
    }
}

console.log(numbers2);

// 6)შექმენით სია შეიყვანეთ user-ების სახელი და გვარი თუ user-ების სახელი და გვრი იწყება პატარა ასოთი slice-მეთოდის გამოყენებით ამოშალეთ ასეთი სახელები და გვარები სიიდან?


let person2 = [
    {name:"Giorgi",lastName: "Khmaladze"},
    {name:"Vano",lastName:"Motiashvili"}
    ]

let inicials2 = []

for(let i of person){
    inicials.push(`${i.name[0]}.${i.lastName[0]}`)
}

console.log(inicials)

