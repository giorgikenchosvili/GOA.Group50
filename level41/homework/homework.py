#1
def filter_list(l):
    result = []
    for i in l:
        if type(i)==int:
            result.append(i)
    return result

#2