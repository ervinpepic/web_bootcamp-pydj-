# from beginning to now we use concept like this
my_list = [1, 3, 3, 2]
my_list.append(4)
print(my_list)

# from now (in python everything is object)
print(type([1, 2, 3]))
print(type((1, 2, 3)))
print(type(1))

## Definig class
class Sample():
    pass

x = Sample()
print(type(x))

class Dog():
    # Class object attributes
    species = "Mammal"

    def __init__(self, breed, name):
        self.breed = breed
        self.name = name

dog = Dog(breed = "Lab", name = "Rex")
dog_1 = Dog(breed = "Huskie", name = "Fox")
print(dog.breed, dog.name)
print(dog_1.breed, dog_1.name)

#class object attributes
print(dog_1.species)


#class with methods and attrs

class Circle():
    pi = 3.14

    def __init__(self, radius = 1):
        self.radius = radius
    
    def area(self):
        return self.radius * self.radius * Circle.pi
    
    def set_radius(self, new_r):
        self.radius = new_r

my_circle = Circle(3)
# my_circle.radius = 100
my_circle.set_radius(100)
print(my_circle.radius)
print(my_circle.area())

#inheritance and special methods
class Animal():
    def __init__(self):
        print("ANIMAL CREATED")
    
    def who_am_i(self):
        print("Animal")
    
    def eat(self):
        print("Eating")

#Inerit

class Cat(Animal):
    def __init__(self):
        super().__init__()
        print("Cat was created")
    
    def meow(self):
        print("mmmeeoooww")

    def eat(self):
        print("cat eating")

cat = Cat()
cat.who_am_i()
cat.eat()
cat.meow()

#special methods
class Book():
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        return "Title: {}, Author: {}, Pages: {}".format(self.title, self.author, self.pages)
    
    def __len__(self):
        return self.pages
    
    def __del__(self):
        print("A book is destroyed!")

book = Book("c++", 'Ervin', 231)
print(book)
print(len(book))
del book