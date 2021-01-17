def my_function(param1=10, param12="String"):
    """
    this is doc string to explain what happened in function
    """
    print(param1, param12)


def hell():
    return "hello"


x = hell()
print(x)


def addNum(num1, num2):
    return num1 + num2


result = addNum(20, 30)
result1 = addNum('20', '30')

print(result)
print(type(result1))


# filter function

my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]


def even_bool(num):
    return num % 2 == 0


evens = filter(even_bool, my_list)
print(list(evens))

# lambda expression


def x2(num): return num % 2 == 0


evens_lambda = filter(x2, my_list)
print(list(evens_lambda))

# methods

tweet = "Go sports! #Sports"
results = tweet.split('#')[1]
print(results)

# in operators

a = [1, 2, 3, 4]
print('x' in a) #false...x is not in the a list
