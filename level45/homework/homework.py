# 1
def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0  
    
    return sum(range(begin_number, end_number + 1, step))

# 2
def lowercase_count(s):
    count = 0  
    
    for char in s:  
        if char.islower():  
            count += 1  
    
    return count


# 3
def small_enough(array, limit):
    for num in array:  
        if num > limit:  
            return False  
    return True  