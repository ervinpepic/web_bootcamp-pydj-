# comparison operators

print(1 > 2)
print(1 < 2)
print(1 >= 2)
print(1 <= 2)
print(1 == 2)
print(1 == "1")
print("hi" == "bye")

# and
print((1 > 2) and (2 < 3))
# or
print((1 > 2) or (2 < 3))
# multiple logical operators
print(11 == 2 or 2 == 3 or 4 == 4)

# if else elif
if 1 < 2:
    print('True!')
    if 20 < 3:
        print('yes!')

if 1 < 2:

    print('Yes')
elif 1 == 1:
    print("whatsap")
else:
    print('Hello')

# loops
# loop through lists
sequence = [1, 2, 3, 4, 5, 6]
for item in sequence:
    print(item)

# Loop throguh dictionaries

dictionary = {
    "Ervin": 100200,
    "Frank": 2312312,
    "Emel": 3312312
}

for item in dictionary:
    print(dictionary[item])
for item in dictionary:
    print(item)

# loop throguh tuple

mypairs = [
    (1, 2),
    (3, 4),
    (5, 6)
]
for tup1, tup2 in mypairs:
    print(tup1, tup2)


# while loops

i = 1

while i < 5:
    print("i is: {}".format(i))
    i += 1

# range functions

x = [1, 2, 3, 4, 5]
print(list(range(5)))
print(list(range(0, 20, 2)))

for item in range(20):
    print(item)

# list comprehension

x1 = [1, 2, 3, 5]
out_x1 = []
for num in x1:
    out_x1.append(num ** 2)
print(out_x1)

#rewrite above loop

n = [num ** 2 for num in x1]
print(n)
