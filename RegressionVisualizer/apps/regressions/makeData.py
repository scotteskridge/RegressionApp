import random

def scatterData():
    ScatterData = []
    for i in range (0 , 100):
        ScatterData.append([i,i])

    return ScatterData

def randomSet(postData):
    randomSet = []
    for i in range (0 , int(postData['element_count'])):
        randomSet.append([i, random.randint(0,10) + i])

    return randomSet
