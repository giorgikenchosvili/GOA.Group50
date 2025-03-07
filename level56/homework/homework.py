# 1
def nickname_generator(name):
    
    if len(name) < 4:
        return "Error: Name too short"
    
    l = "aeiou"
    
    if name[2] in l:
        return name[ : 4]
    else:
        return name[ : 3]