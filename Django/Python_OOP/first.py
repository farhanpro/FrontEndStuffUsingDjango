class Mobile():
    typee =  "4g Handset" 
    def __init__(self,company,model,price,ram,prosessor):
        self.company = company
        self.model = model 
        self.price  = price
        self.ram = ram 
        self.prosessor = prosessor

mymobile  = Mobile(company = "Honor",model = "Play",price = 20000,ram = "6gb",prosessor = "Kirin 975", )
mySecondMobile  = Mobile(company = "Mi",model = "A3",price = 13000,ram = "4gb",prosessor = "Snapdragon 660" )
print(mymobile.company,mymobile.model,mymobile.price,mymobile.ram,mymobile.prosessor,mymobile.typee)
print(mySecondMobile.company,mySecondMobile.model,mySecondMobile.price,mySecondMobile.ram,mySecondMobile.prosessor,mymobile.typee)