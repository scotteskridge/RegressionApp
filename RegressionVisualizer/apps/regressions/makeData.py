import random

def getKey(item):
    return item[0]

def shuffleSet(randset):
    for i in range (0, len(randset) -2):
        temp = randset[i]
        j = random.randint(i, len(randset)-1)
        randset[i] = randset[j]
        randset[j] = temp
    return randset

def lineData():
    ScatterData = []
    for i in range (0 , 50):
        ScatterData.append([i,i])

    return ScatterData

def makeRandomSet(total_count, variance, selection):
    randomSet = []
    print( total_count)
    print( variance)
    print( selection)
    for i in range (0 , int(total_count)):
        randomSet.append([i, random.randint(-1*int(variance),int(variance)) + i])
    if (int(total_count) > int(selection)):

        return sorted(random.sample(randomSet, int(selection)), key = getKey)
        #I don't understand why this works

        #So it turns out I don't need to right my own sample function savingthis code for latter
        # print("im about to shuffle")
        # shuffledset = shuffleSet(randomSet)
        # print("there are {len(shuffledset)} items in the shuffledset")
        # randomSet = []
        # for i in range (0 ,int(selection)):
        #     randomSet.append(shuffledset[i])
    return randomSet

def setKeytoString(list_of_lists):
    KeysAsStrings = []
    for pairs in list_of_lists:
        KeysAsStrings.append([str(pairs[0]), pairs[1]])

    return KeysAsStrings
