#Linear Regression in 1D
import numpy as np
import matplotlib.pyplot as plt

#load the data
x = []
y = []

for line in open('data_1d.csv'):
    X, Y = line.split(',')
    x.append(float(X))
    y.append(float(Y))

print("x before its a numpy array is: ", x)
print("y before its a numpy array is: ", y)
# turn X and Y into numpy arrays

x = np.array(x)
y = np.array(y)
print("x after its a numpy array is now : ", x)
print("y after its a numpy array is now : ", y)

# plot the data
plt.scatter(x,y)
plt.show()

# ok so now we apply equations to do a linear Regression

denominator = x.dot(x) - x.mean() * x.sum()
a = (x.dot(y) - y.mean() * x.sum()) / denominator
b = (y.mean() * x.dot(x) - x.mean() * x.dot(y)) / denominator
yHat = a * x + b
print("a which is going to be the slope of yHat is: ",a)
print("b which is the y intercept is: ", b)

# calculate the predicted y
# model is a line or ax * b



print("yhat is: ", yHat)
#plot it all
plt.scatter(x, y)
plt.plot(x, yHat)
plt.show()

#rSquared value is 1 minus the sumOfSquaresResidual over sumOfSquaresTotal
#rSquared of 1 is a perfect model
#to calculate the rSquared
d1 = y - yHat
d2 = y - y.mean()
rSquared = 1 - d1.dot(d1) / d2.dot(d2)
print("rSquared is: ", rSquared )
