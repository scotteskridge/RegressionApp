import random
import operator
import sys
import unittest

class ChartData(object):
    #every column is a line ever row is the next step in time
    # here is an example of what format the data needs to be in
    #the first row is strings that are lables
    #the first data point of each row is the name of the point on the x axis
    #this could be a date or a number
    #     var data = google.visualization.arrayToDataTable([
    #         ['Year', 'Sales', 'Expenses', 'Revenue'],
    #         ['2004',  1000,      400,      600],
    #         ['2005',  1170,      460,      710],
    #         ['2006',  660,       1400,      -740],
    #         ['2007',  1030,      540,      490]
    # ]);
    #so... at the very least every Chart has a width and height
    #what if I make this a little easier by saying that you can't Create
    #a new data chart without at least defining the first 2 columns, so that it has both sets of lables and one full set of data
    def __init__(self, data = [], lineLable = ""):
        self.DataTable = [[None]*(2) for x in range(len(data)+1)] #I still don't understand why this works :)
        self.DataTable[0][0] = "X Axis"
        self.DataTable[0][1] = lineLable
        for i in range(0, len(data)):
            self.DataTable[i+1][0] = str(i)
            self.DataTable[i+1][1] = data[i]
        self.width = 2
        self.height = len(data)

    def assignLineLables(self, lineLable):
        pass

    def relableXAxis(self):
        pass

    def getSample(self, selection):
        print("im trying to select {selection} number of items", int(selection))
        DataSelection = sorted(random.sample(self.DataTable, int(selection)), key = getKey)
        print (DataSelection)
        return DataSelection

    def addColumn(self, data = [], lineLable = ""): #data is going to come over as a list and line needs to be a string
    #if the data set is empty then need to assign lables for the x axis
        self.DataTable[0][self.width] = lineLable
        for i in range(0, len(data)):
            self.DataTable[i+1][self.width] = data[i]
        return self




#def AddLine(self, line, lable):
    #assuming my line is a flat list of data ie [1,2,3,4] and I wanted to
    #add this to the table above this the new table would look like:
        #[
        #         ['Year', 'Sales', 'Expenses', 'Revenue', 'lable'],
        #         ['2004',  1000,      400,      600,       1],
        #         ['2005',  1170,      460,      710,       2],
        #         ['2006',  660,       1400,     -740,      3],
        #         ['2007',  1030,      540,      490,       4]
        # ]
    #if my new line was longer than the current then it would look like this:
        # [
        #         ['Year', 'Sales', 'Expenses', 'Revenue', 'lable'],
        #         ['2004',  1000,      400,      600,       1],
        #         ['2005',  1170,      460,      710,       2],
        #         ['2006',  660,       1400,     -740,      3],
        #         ['2007',  1030,      540,      490,       4],
        #         ['date.next()',  none,      none,      none,       5],
        # ]
    #hmmm allowing that starts to make my chart pretty jagged because adding a
    #next row is really adding new date at date.next() to every line so really
    #I think I need to handle the edge case by truncating my new line and not
    #by trying to extend my table. Ok lets see if I can pass a table as json

def getKey(item):
    return item[0]

def shuffleSet(randset):
    for i in range (0, len(randset) -2):
        temp = randset[i]
        j = random.randint(i, len(randset)-1)
        randset[i] = randset[j]
        randset[j] = temp
    return randset

def lineData(length):
    lineData = []
    for i in range (0 , length+1):
        lineData.append(i)

    return lineData

def makeRandomSet(total_count, variance, selection):
    #Ok so since we added in chart data objects the out put of this function can be 1 diminsional again
    randomSet = []

    for i in range (0 , int(total_count)):
        randomSet.append(random.randint(-1*int(variance),int(variance))+i)
    # if (int(total_count) > int(selection)):
    #     return random.sample(randomSet, int(selection))
        #return sorted(random.sample(randomSet, int(selection)), key = getKey)
        #I don't understand why this works

        #So it turns out I don't need to right my own sample function savingthis code for latter
        # print("im about to shuffle")
        # shuffledset = shuffleSet(randomSet)
        # print("there are {len(shuffledset)} items in the shuffledset")
        # randomSet = []
        # for i in range (0 ,int(selection)):
        #     randomSet.append(shuffledset[i])
    return randomSet


#this didnt work becuase the context object has trouble passing over string values packages up inside the lists would need to send over json instead

# def setKeytoString(list_of_lists):
#     KeysAsStrings = []
#     for pairs in list_of_lists:
#         KeysAsStrings.append([str(pairs[0]), pairs[1]])
#
#     return KeysAsStrings
