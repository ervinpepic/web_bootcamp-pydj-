s = "GLOBAL VARIABLE!"


def func():
    mylocal = 10
    print(locals())
    print(globals()['s'])


print(func())


def hello(name="Ervin"):
    return "Hello, " + name


print(hello())

my_new_greet = hello

my_new_greet()


def hello_2(name= "Ervin"):
    print("The HELLO_2 function has been run!")

    def greet():
        return "This string is inside greet()"
    
    def welcome():
        return "This istring is inside welcome()"

    if name == "Ervin":
        return greet
    else:
        return welcome

x = hello_2()
print(x())

def hey():
    return "Hi ervin"

def other(func):
    print("Hello")
    print(func())

other(hey)

def new_decorator(func):
    def wrap_func():
        print("Code here before executing func!")
        func()
        print("FUNC() has been called!")

    return wrap_func

@new_decorator
def func_needs_decorator():
    print("this function is in need of a decorator")

# func_needs_decorator = new_decorator(func_needs_decorator)
# func_needs_decorator()

func_needs_decorator()