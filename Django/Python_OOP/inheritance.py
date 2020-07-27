class Animal():
    
    def __init__(self):
        print("Animal Created")
    
    def whoAmI(self):
        print("Animal")
    
    def eat(self):
        print("Eating")

    def mydogbark(self):
        print("Woof")

class Dog(Animal):
    
    def __init__(self):
        print("Dog Class Created")



myani = Dog()
myani.whoAmI()
myani.eat()
myani.mydogbark()