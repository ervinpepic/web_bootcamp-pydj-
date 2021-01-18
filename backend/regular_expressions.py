import re

patterns = [
    'term1',
    'term2'
]

text = "This is a string with term1, not the ither!"

for pattern in patterns:
    print("I'm searching for: " + pattern)

    if re.search(pattern, text):
        print("Match!")
    else:
        print("Not find anything here!")


split_term = "@"

email = "user@gmail.com"

match_2 = re.split(split_term, email)
print(match_2)

x = re.findall('match', 'test phrase match in middle, match')
print(x)

def multi_re_find(patterns, phrases):
    for pat in patterns:
        print("Searching for pattern {} ".format(pat))
        print(re.findall(pat, phrases))
        print('\n')

test_phrase = 'sdsd..sssddd..sdddsddd..dsds...dsssss...sddddd'
test_phrase2 = 'This is a string! But has a punctuation. How we can remove it?'
test_phrase3 = 'Hello 23213 and #hashtaf'
test_patterns = ['sd+']
test_patterns1 = ['s[sd]+']
test_patterns2 = ['[^!.?]+']
test_patterns3 = ['[a-z]+']
test_patterns4 = ['[A-Z]+']
test_patterns5 = [r'\W+']
multi_re_find(test_patterns, test_phrase)
multi_re_find(test_patterns5, test_phrase3)
