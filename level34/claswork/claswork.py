def summation(num):
    return num * (num + 1) // 2

def no_space(x):
    return "".join(x.split())

def litres(time):
    return time // 2

def century(year):
    return (year + 99) // 100

def digitize(n):
    result = []
    while n >= 1:
        result.append(n%10)
        n //= 10
    return result

