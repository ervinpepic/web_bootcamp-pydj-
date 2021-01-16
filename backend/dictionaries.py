my_stuff = {
    "key1": "value",
    "key2": "value2",
    "key3": True,
    "key4": 123,
    "key5": {
        "sub_key": 1,
        "sub_key2": [1, 2, 'grabMe']
    }
}

print(my_stuff['key5']['sub_key2'][2].capitalize())

#make changes to the values
my_stuff['key4'] = 432
print(my_stuff['key4'])
