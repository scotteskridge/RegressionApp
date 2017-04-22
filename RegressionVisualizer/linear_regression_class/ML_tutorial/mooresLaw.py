import re
import numpy as np
import matplotlib.pyplot as plt

x = []
y = []
non_decimal = re.compile(r'[^\d]+')

for line in open('moore.csv'):
    r = line.split('\t')
    X = int(non_decimal.sub('', r[2].split('[')[0]))
    Y = int(non_decimal.sub('', r[1].split('[')[0]))
    x.append(X)
    y.append(Y)

x = np.array(x)
y = np.array(y)

#note to self x.tolist() will turn this back into a list when I want to mess with it in google charts

plt.scatter(x,y)
plt.show()

y = np.log(y)
plt.scatter (x,y)
plt.show()

#ok so I'm pretty sure that at this point i can just go cut and paste everything from my 1d linear regression... actually I'm going to do that see if I can plumb it up and then delete everything and follow along again
##########################
### This is the magic! ###
##########################
denominator = x.dot(x) - x.mean() * x.sum()
a = (x.dot(y) - y.mean() * x.sum()) / denominator
b = (y.mean() * x.dot(x) - x.mean() * x.dot(y)) / denominator
yHat = a * x + b

plt.scatter(x, y)
plt.plot(x, yHat)
plt.show()

#rSquared value is 1 minus the sumOfSquaresResidual over sumOfSquaresTotal
#rSquared of 1 is a perfect model
#to calculate the rSquared
d1 = y - yHat
d2 = y - y.mean()
rSquared = 1 - d1.dot(d1) / d2.dot(d2)
print("a is: ", a, "b is: ", b, "rSquared is: ", rSquared )

#to find out how long it takes for the transitor count to double we need to know that
# tc is transitor_count
#log(tc) = a * year + b
#take the log of both sides to solve for tc
# tc = exp(b) * exp(a * year)) <--- I don;t understand this step I need to go back to algebra class :/
# 2 * tc     = 2 *exp(b) * exp(a * year) = exp(ln(2)) * exp(b) * exp(a * year)
#            = exp(b) * exp(a * year + ln(2))
# exp(b) * exp(a*year2) = exp(b) * exp(a*year1 + ln(2))
# a * year2 = a * year1 + ln(2)
# year2 = (year1 + ln(2))/a

print("the time to double is: ", np.log(2)/a, "years" )
