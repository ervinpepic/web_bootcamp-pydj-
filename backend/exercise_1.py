# given string s = 'django' print out 'd','o','djan' using string indexing
s = 'django'
print(s[0])
print(s[-1])
print(s[:4])
print(s[1:4])
print(s[4:])
print(s[::-1])

# given this nested below, change hello to be a goodbay word:
list_new = [3, 7, [1, 4, 'hello']]
list_new[2][2] = 'Goodbye'
print(list_new)


# using keys and indexing, grab the 'hello' from the following dictionaries:
dict_1 = {
    'simple_key': 'hello'
}
dict_2 = {
    'k1': {
        'k2': 'hello'
    }
}
dict_3 = {
    'k1': [
        {
            'nested_key': [
                'this is deep', [
                    'hello'
                ]
            ]
        }
    ]
}

print(dict_1['simple_key'])
print(dict_2['k1']['k2'])
print(dict_3['k1'][0]['nested_key'][1][0])

# use a set to find the unique values of the list below:
my_list = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3]
x_1 = set(my_list)
print(x_1)

# given two variables age and sammy, use print formating to print Hello my dog's name is Sammy and he is 4 years old"
age = 4
name = 'Sammy'

a = "Hello my dog's name is {name} and he is {age} years old".format(name = name, age = age)
print(a)