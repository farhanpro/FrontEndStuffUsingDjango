"""
import random as rd

list = [1,2,3,4,5,6]
for item in list:
    print("Hello")

dict = {"Farhan":22,"Sohail":24,"Uzaif":25}
for items in dict:
    print(items,dict[items])


pairs = [(1,2),(3,4),(5,6)]
for tup1,tup2 in pairs:
    print(tup1)
    print(tup2)

i = 1
while i<5:
    print("i is :",i)
    i = i + 1
"""

mylist = [1,2,3,4,5,6,7,8,9,10]

def Even(n):
    return n%2 == 0

val = filter(Even,mylist)
print(list(val))


