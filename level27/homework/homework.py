# 1) შექმენით სია რომელშიც გექნებათ 1 დან 20-მდე რიცხვები დაბეჭდეთ თითოეული სიის ელემენტი და თითოეულ მათგანს მიუწერეთ ლუწია თუ კენტი
numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for number in numbers:
    if number % 2 == 0:
        print(f"{number}")
    else:   
        print(f"{number}")

print()  

# 2) შექმენით სია რომელშიც გექნებათ 1 დან 20მდე რიცხვები შემდეგ კი დაბეჭდეთ 3 ის ჯერადი რიცხვები
for number in numbers:
    if number % 3 == 0:
        print(number)

print()  

# 3) შექმენით სია რომელშიც გექნებათ ათიცალი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ ამ სიიდან მხოლოდ 10ზე დაბალი რიცხვები
different_numbers = [5, 12, 3, 8, 15, 1, 9, 20, 7, 4]
for number in different_numbers:
    if number < 10:
        print(number)

print()  

# 4) შექმენით სია რომელშიც გექნებათ ოცი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ მხოლოდ 10-ზე ნაკლები და მხოლოდ ლუწი რიცხვები
twenty_numbers = [2, 15, 4, 9, 12, 6, 1, 18, 3, 10, 7, 14, 8, 5, 11, 20, 13, 17, 16, 19]
for number in twenty_numbers:
    if number < 10 and number % 2 == 0:
        print(number)

print()  

# 5) შექმენით სია რომელშიც გექნებათ ოცი სხვადასხვა რიცხვი შემდეგ კი დაბეჭდეთ მხოლოდ 20 ზე მეტი რიცხვები ისე რომ იყოს თან სამის ჯერადი
for number in twenty_numbers:
    if number > 20 and number % 3 == 0:
        print(number)

print()  

# 6) შექმენით სია სადაც მოათავსებთ ხუთ სხვადასხვა სახელს შემდეგ კი მიწვდით თითოეულ ელემენტს(სახელს) და დაბეჭდეთ თითოეულში ასოების რაოდენობა
names = ["ანა", "გიორგი", "მარიამი", "დავით", "ნინო"]
for name in names:
    print(f"{name} {len(name)} ")

print() 

# 7) შექმენით სია სადაც მოათავსებთ ხუთ სხვადასხვა სახელს შემდეგ კი დაბეჭდეთ ამ სიაში თითოეული ელემენტის პირველი ასო
for name in names:
    print(name[0])

# 1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე 

for i in range(1,101):
    Plus= i + i
    subtract= i - 5
    multiplication= i * i
    division= i / 2

print(Plus)
print(subtract)
print(multiplication)
print(division)

# 2) მომხმარებელს შემოატანინეთ რიცხვი და შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვამდე ყველა რიცხვის ჯამი(მაგალითად თუ შეიყვანს 10ს გამოიტანეთ 10მდე ყველა რიცხვის ჯამი მაგალითად).


age=int(input("enter number"))

count=0
for i in range(1,age):
    count += i

print(count)


# 3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

number=int(input("enter num"))
number1=int(input("enter num"))

sum=0
multiply=1

for i in range(number,number1):
    sum += i
    multiply *= i

print(sum)
print(multiply)


# 4) დაწერეთ ალგორითმი, რომელიც მომხმარებელს შეეკითხება რიცხვს. თუ რიცხვი ლუწია გაყავით ორზე, სხვა შემთხვევაში გაამრავლეთ სამზე და მიუმატეთ ერთი.


num=int(input("enter number"))

for i in range (num):
    if num % 2 == 0:
        print ( num / 2)
    else :
        print((num*3)+1) 


# 5) დაწერეთ პროგრამა რომელიც ბეჭდავს ყველა რიცხვს 1-100 მდე რომელიც იყოფა 3-ზე და 5-ზე

for i in range(1,101):
    if i % 3 ==0 and i % 5==0 :

        print(i)


# 1) დაიწყეთ 10-დან და დაითვალეთ 1-მდე, დაბეჭდეთ თითოეული რიცხვი.

i = 10

while i > 0 :
    print(i)
    i -=1


