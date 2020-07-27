class book():
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Title : {} , Author : {} , Pages : {}".format(self.title,self.author,self.pages)

b = book("Python","Farhan",300)
print(b)