import random 
number = random. randint(100,999) 

def guess(number):
    number_string = str(number)
    ####################################
    Sfirst_Digit = number_string[:0]
    Ssecond_Digit = number_string[:1]
    Sthird_Digit = number_string[:2]
    ######################################
    Ifirst_Digit = int(Sfirst_Digit)
    Isecond_Digit = int(Ssecond_Digit)
    Ithird_Digit = int(Sthird_Digit)
    #####################################
    user_guess = input("Enter your 3 digit number : ")
    Suser_guess = str(user_guess)
    SUfirst_Digit = Suser_guess[:0]
    SUsecond_Digit = Suser_guess[:1]
    SUthird_Digit = Suser_guess[:2]
    ####################################
    IUfirst_Digit = int(SUfirst_Digit)
    IUsecond_Digit = int(SUsecond_Digit)
    IUthird_Digit = int(SUthird_Digit)
    ###################################
    if (IUfirst_Digit < Ifirst_Digit):
        print("Your First digit is smaller than your guess")
    elif (IUfirst_Digit > Ifirst_Digit):
        print("Your First digit is greater than your guess")
    elif (IUfirst_Digit == Ifirst_Digit):
        print("Your First digit is correct")

    #########################################
    if (IUsecond_Digit < Isecond_Digit):
        print("Your Second digit is smaller than your guess")
    elif (IUsecond_Digit > Isecond_Digit):
        print("Your Second digit is greater than your guess")
    elif (IUsecond_Digit == Isecond_Digit):
        print("Your Second digit is correct")          

    ############################################3
    if(IUthird_Digit < Ithird_Digit):
        print("Your third digit is smaller than your guess")
    elif(IUthird_Digit > Ithird_Digit):
        print("Your third digit is greater than your guess")
    elif(IUthird_Digit == Ithird_Digit):
        print("your third digit is at right palce")
    #######################################################

    if(user_guess == number):
        print("Your guess is correct")



guess(number)
