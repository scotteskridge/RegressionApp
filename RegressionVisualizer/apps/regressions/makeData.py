import random

def scatterData():
    ScatterData = []
    for i in range (0 , 100):
        ScatterData.append([i,i])

    return ScatterData

def randomSet(count, variance):
    randomSet = []
    for i in range (0 , int(count)):
        randomSet.append([i, random.randint(-1*int(variance),int(variance)) + i])

    return randomSet
