import re
patterns  = ['term1' ,'term2']
text = "This is a String with term1 but not the other one"

for pattern in patterns:
    print("Im searching for :" + pattern)

    if re.search(pattern,text):
        print("Match!")
    else:
        print("Unmatched!")