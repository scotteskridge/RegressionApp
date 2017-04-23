import pandas as pd
import datetime
# import pandas.io.data as web
import pandas_datareader.data as web
import matplotlib.pyplot as plt
from matplotlib import style

style.use("ggplot")

#datetime comes in yyyy-mm-dd format
start = datetime.datetime(2017,2,3)
end = datetime.datetime(2017,3,3)

#so this grabbed XOM stock price from yahoo finance i think?

df = web.DataReader("GOOG", "yahoo" , start, end)

print(df.head())
print(df)

df["Adj Close"].plot()

plt.show()
