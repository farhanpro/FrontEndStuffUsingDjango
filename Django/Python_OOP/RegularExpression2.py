import re

def Find_Expression(patterms,phrase):
    for pat in patterms:
        print("Searching for pattern {}".format(pat))
        print(re.findall(pat,phrase))
        print("\n")

test_phrase = 'sdsd..sssddd...sdddsddd...dsds...dsssss...sdddd'

test_patterns = ['sd{1,3}']
Find_Expression(test_patterns,test_phrase)