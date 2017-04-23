#Linear Regression in 1D
import numpy as np
import matplotlib.pyplot as plt

#load the data
X = []
Y = []

for line in open('data_1d.csv'):
    x, y = line.split(',')
    X.append(float(x))
    Y.append(float(y))

# turn X and Y into numpy arrays

X = np.array(X)
Y = np.array(Y)

# plot the data
plt.scatter(X,Y)
plt.show()
