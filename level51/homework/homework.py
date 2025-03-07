# 1
def array_diff(a, b):
    list = []
    for i in a:
        if i not in b : 
            list.append(i)
    return list


# 2
def sum_triangular_numbers(n):
    sum = 0
    while n > 0:
        sum = sum + n*(n + 1)/2
        n = n - 1
    
    return sum


# 3
def delete_nth(order,max_e):
    l = []
    
    for i in order:
        if l.count(i) >= max_e:
            continue
        else:l.append(i)
    return l

# 4
def shortest_steps_to_num(num):
    count = 0
    
    while num != 0:
        if num % 2 == 0:
            num = num // 2
        else:
            num -= 1
        count +=1
    return count-1