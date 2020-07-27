"""
name = "This is global name"

def greet():
    name = "sammy"

    def hello():
        print("Hello " + name)
    
    hello()

greet()
print(name)
        """

x = 50
def setter():
    global x 
    x = 5000

print("Before declaration it was ",x)
setter()
print("After Declaration it is ",x)