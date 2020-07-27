class Circle():
    pi = 3.14
    def __init__(self,radius=1):
        self.radius = radius

    def area(self):
        return self.radius * self.radius *Circle.pi



myc = Circle()
myc.radius  = 1
print(myc.area())