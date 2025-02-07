#1
def count_sheep(sheep):
    count = 0
    for s in sheep:
        if s == True:
            count += 1
    return count

#2
def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()

#3
def quote(fighter):
    fighter = fighter.split(" ")
    l = []
    
    for i in fighter:
        i = i.capitalize() 
        l.append(i)
    
    fighter = " ".join(l)
    
    if fighter == "George Saint Pierre":
        return "I am not impressed by your performance."
    else:
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    


