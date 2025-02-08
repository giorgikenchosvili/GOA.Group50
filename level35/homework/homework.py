#1
def count_sheeps(sheep):
    count = 0
    for s in sheep:
        if s is True:
            count += 1
    return count

#2
def maps(a):
    num = []
    for i in a:
        num.append(i * 2)
    return num

#3
def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    return n * m


#4
def past(h, m, s):
    return (h * 3600000) + (m * 60000) + (s * 1000)

#5
def make_upper_case(s):
    return s.upper()

#6
def simple_multiplication(number) :
    if number % 2 == 0:
        return number * 8
    return number*9