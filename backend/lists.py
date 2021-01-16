
my_list = [1, 2, 3]  # integer lists
new_list = ['string', 1, 2, 3, True, 'hej', [1, 2, 3]]
print(len(new_list))
list_1 = ['a', 'b', 'c', 'e', 'f']
print("Before adding elements", list_1[:3])

list_1[0] = "Ervin"
print("after adding elements", list_1[:3])
list_1.append("Emel")
list_1.append("[1, 2, 3]")
print("After append", list_1)

novi_niz = list_1.pop(0)
print("before pop", list_1)
print(novi_niz)

list_1.reverse()

print(list_1)
list_1.sort()
print(list_1)

niz_2 = [1, 2, ['x', 'y', 'z']]
print(niz_2[2][2])
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

#list comprehensions
first_col = [row[0] for row in matrix]
print(first_col)
