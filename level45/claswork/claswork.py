# 1
def custom_operator(a, b):
    if b == 0:
        return None  
    return (a + b) + (a - b) + (a * b) + (a // b)

def evaluate(equation):
    if not equation:
        return None
    
    tokens = equation.replace("@", " @ ").split()
    numbers = list(map(int, tokens[::2]))
    
    result = numbers[0]
    for num in numbers[1:]:
        result = custom_operator(result, num)
        if result is None:
            return None
    
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