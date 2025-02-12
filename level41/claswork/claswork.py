#1
def get_count(sentence):
    num="aeiou"
    num1="y"
    counter=0
    for i in sentence:
        if i in num:
            counter +=1 
    return counter

#2
def square_digits(num):
    number = str(num)
    world = ""
    for i in number:
        world += str(int(i) * int(i))
    return int(world)

#3
def high_and_low(numbers):
    my_list = numbers.split()
    high = int(my_list[0])
    low = int(my_list[0])
    for i in my_list:
        if int(i) > high:
            high = int(i)
    for i in my_list:
        if int(i) < low:
            low = int(i)
    return str(high) + " " + str(low)

#4
def get_middle(s):
    if len(s) % 2 == 0:
        return s[(len(s)//2)-1]+s[len(s)//2]
    else:
        return s[len(s)//2]
        