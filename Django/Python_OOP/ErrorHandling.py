try :
    f = open('Info.txt','w')
    f.write("Test write to sinple text!")

except IOError:
    print("Error ! Could Not find or  read data!")

else:
    print("Success!")
    f.close()

print("Hello World")
