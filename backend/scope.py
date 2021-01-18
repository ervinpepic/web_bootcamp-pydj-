x = 25

def my_func():
    x = 50
    return x

print(x)
print(my_func())
my_func( )
print(x)

#local

print(lambda x: x ** 2)

#Enclosing function locals

name = 'THis is a gloval name!'
def greet():
    # name = "Ervin"
    
    def hello():
        print("Hello, " + name)
    hello()
greet()

