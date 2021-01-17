import random
# get guess


def get_guess():
    x = list(input("Enter your three num guess: "))
    return x
# generate computer code 123


def generate_code():
    digits = [str(num) for num in range(10)]
    random.shuffle(digits)
    return digits[:3]
    # shuddle the digits then grab the first three
# generate the clues


def generate_clues(code, user_guess):
    if user_guess == code:
        return "Code cracked!"
    clues = []
    for ind, num in enumerate(user_guess):
        if num == code[ind]:
            clues.append("match")
        elif num in code:
            clues.append("close")
    if clues == []:
        return ["Nope"]
    else:
        return clues


# run game logic
print("WELOCME CODE BRAKER!")

secret_code = generate_code()
print(secret_code)
clue_report = []

while clue_report != "Code cracked!":
    guess = get_guess()
    clue_report = generate_clues(guess, secret_code)
    print("Here is the result of your guess: ")
    for clue in clue_report:
        print(clue)
