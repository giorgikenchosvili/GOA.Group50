# 1
def func(a,b):
    return (a + b) + (a - b) + (a * b) + (a // b)


def evaluate(equation):
    
    equation = equation.split(" @ ")
    
    l = []
    
    for i in equation:
        l.append(int(i))
    
    
    result = l[0]
    
    for i in l[1:]:
        if i == 0 :
            return None
        result = func(result,i)
    return result

# 2
def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    
    x = 0 
    y = 0
    
    for direction in walk:
        if direction == 'n':
            y += 1
        elif direction == 's':
            y -= 1
        elif direction == 'e':
            x += 1
        elif direction == 'w':
            x -= 1
    
    return x == 0 and y == 0

# 3
def expanded_form(num):
    final = ""  
    for element in str(num): 
        if element == "0":  
            continue  
        else:
            final += element + (len(str(num)) - (str(num).index(element) + 1)) * "0"
    
    return final  