try:
    f = open('simple.txt', 'w')
    f.write("TEst write to simple text")
except IOError:
    print("ERror, we can't find a file!")
else:
    print("success!")
    f.close()
finally:
    print('Hello')
