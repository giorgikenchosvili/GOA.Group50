def cookie(x):
    if type(x) == str:  
        return "Who ate the last cookie? It was Zach!"
    elif type(x) in [int, float]:  
        return "Who ate the last cookie? It was Monica!"
    else: 
        return "Who ate the last cookie? It was the dog!"




def goose_filter(birds):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    l = []
    for i in birds:
        if i not in geese:
            l.append(i)
    return (l)

def past(h, m, s):
    return (h * 3600000) + (m * 60000) + (s * 1000)


def billboard(name, price=30):
    total_cost = 0
    for i in name:
        total_cost += price
    return total_cost

