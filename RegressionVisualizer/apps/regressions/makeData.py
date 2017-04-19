import random

def shuffleSet(randset):
    for i in range (0, len(randset) -2):
        temp = randset[i]
        j = random.randint(i, len(randset)-1)
        randset[i] = randset[j]
        randset[j] = temp
    return randset

def scatterData():
    ScatterData = []
    for i in range (0 , 100):
        ScatterData.append([i,i])

    return ScatterData

def randomSet(total_count, variance, selection):
    randomSet = []
    print( total_count)
    print( variance)
    print( selection)
    for i in range (0 , int(total_count)):
        randomSet.append([i, random.randint(-1*int(variance),int(variance)) + i])
    if (int(total_count) > int(selection)):
        print("im about to shuffle")
        shuffledset = shuffleSet(randomSet)
        print("there are {len(shuffledset)} items in the shuffledset")
        randomSet = []
        for i in range (0 ,int(selection)):
            randomSet.append(shuffledset[i])
    return randomSet
