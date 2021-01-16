#basics of strings

a = 'Im string'
a1 = "Im also string"
a2 = "I'm string also with single quote inside"

#indexing strings

mystring = 'abcdefg'
print(mystring[-1])

#slicing strings

new_string = 'Ervin Pepic, Software Developer'
print(new_string[2:-1])
print(new_string[:-1])
print(new_string[::2]) # stepsize
print(new_string.upper())
print(new_string.capitalize())
print(new_string.split('e'))

# Print formating

format_string  = "Insert another string here: {}".format("Insert me! ")
format_string_2  = "Insert another string here: {x}, and here {y} ".format(x = "Insert me! ", y = "Another insert")
print(format_string)
print(format_string_2)