# 1
def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2  
# 2
def boolean_to_string(b):
    return str(b)

# 3
def string_to_number(s):
     return int(s)

# 4
def opposite(number):
    return -number

# 5
def bool_to_word(boolean):
    return "Yes" if boolean else "No"
# 6
def make_negative( number ):
    return -abs(number)

#7
def solution(string):
    return string [::-1]

#8
def find_smallest_int(arr):
    smallest = arr[0]  
    for num in arr:  
        if num < smallest:  
            smallest = num  
    return smallest