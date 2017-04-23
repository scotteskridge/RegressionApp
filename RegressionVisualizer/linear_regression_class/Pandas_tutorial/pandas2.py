import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import style
import pprint
style.use("ggplot")
import pprint

#dataframes are like python doctionaries

web_stats = {   "Day"       :   [1,2,3,4,5,6],
                "Visitors"  :   [43,53,34,45,65,87],
                "Bounce_Rate" : [65,72,62,64,54,41]}

print(web_stats)
#df is dataframe
df = pd.DataFrame(web_stats)
print(df)

listedDF = [list(x) for x in df.T.itertuples()]
print(listedDF)

listedDF = df.values.tolist()
print(listedDF)

#things to note that df.values is a numpy array
# df = DataFrame({'one':[1,1], 'two':[2,1], 'three':[3,1], 'four':[3,1] })
#
# ll = []
#
# for idx,row in df.iteritems():
#     l = row.values.tolist()
#     l.insert(0,idx)
#     ll.append(l)

listedDF = df.T.reset_index().values.tolist()
print(listedDF)

#setting an index is how everything is related generally the date
# df = df.set_index("Day")
# print(df)

df.set_index("Day", inplace=True)
print(df)
print(df["Bounce_Rate"])
print(df.Visitors)
#print(df[0]) <--- this doenst work so this is actually a dictionary and everything is refrenced by keys not indexes
print(df.Visitors.tolist())
print(np.array(df).tolist)
