# 1
def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number, end_number+1, step))

# 2
def lowercase_count(s):
    count = 0  
    
    for char in s:  
        if char.islower(): 
            count += 1  
    
    return count
# 3
def small_enough(array, limit):
    for e in array:
        if not e != limit: 
            return False
    return True
# 4
def logical_calc(array, op):
    
    
    result = array[0]
    
    for i in array[1:]:
        if op == "AND":
            result = result and i
        elif op == "OR":
            result = result or i
        elif op == "XOR":
            result = result ^ i
        
    return result

# 4
def converter(mpg):
    return round(mpg / 4.54609188 * 1.609344 , 2)