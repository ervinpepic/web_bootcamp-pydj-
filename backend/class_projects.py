from random import shuffle

SUITE = 'H D S C'.split()
RANKS = '2 3 4 5 6 7 8 9 10 J Q K A'.split()


class Deck:

    def __init__(self):
        print("Created new ordered deck!")
        self.allcards = [(s, r) for s in SUITE for r in RANKS]

    def shuffle(self):
        print("SHUFFLING DECK!")
        shuffle(self.allcards)

    def split_in_half(self):
        return (self.allcards[:26], self.allcards[26:])


class Hand:

    def __init__(self, cards):
        self.cards = cards

    def __str__(self):
        return "Contains {} cards".format(len(self.cards))

    def add(self, added_cards):
        self.cards.extend(added_cards)

    def remove_card(self):
        return self.cards.pop()


class Player:
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand

    def play_card(self):
        drawn_card = self.hand.remove_card()
        print("{} has placed: {} ".format(self.name, drawn_card))
        print("\n")
        return drawn_card

    def remove_war_cards(self):
        war_cards = []
        if len(self.hand.cards) < 3:
            return war_cards
        else:
            for x in range(3):
                war_cards.append(self.hand.cards.pop())
            return war_cards

    def still_has_cards(self):
        """
        Return True if player still has cards left
        """
        return len(self.hand.cards) != 0


print("Welcome to the War, let's begin")

# Create new deck and spilt in in half:

deck = Deck()
deck.shuffle()
half1, half2 = deck.split_in_half()

# Create both players!

computer = Player("Computer", Hand(half1))
name = raw_input("Whats is your Name? ")
user = Player(name, Hand(half2))

total_rounds = 0
war_count = 0

while user.still_has_cards() and computer.still_has_cards():
    total_rounds += 1
    print("Time for a new round!")
    print("Here are the current standings")
    print(user.name + "has the count: " + str(len(user.hand.cards)))
    print(computer.name + "has the count: " + str(len(computer.hand.cards)))
    print("Play a card!")
    print("\n")

    table_cards = []

    c_card = computer.play_card()
    p_card = user.play_card()

    table_cards.append(c_card)
    table_cards.append(p_card)

    if c_card[1] == p_card[1]:
        war_count += 1
        print("war!")
        table_cards.extend(user.remove_war_cards())
        table_cards.extend(computer.remove_war_cards())

        c_card = computer.play_card()
        p_card = user.play_card()

        table_cards.append(c_card)
        table_cards.append(p_card)

        if RANKS.index(c_card[1]) < RANKS.index(p_card[1]):
            print(user.name + " has the higher card, adding to hand")
            user.hand.add(table_cards)
        else:
            print(computer.name + " has the higher card, adding to hand")
            computer.hand.add(table_cards)
    else:
        if RANKS.index(c_card[1]) < RANKS.index(p_card[1]):
            print(user.name + " has the higher card, adding to hand")
            user.hand.add(table_cards)
        else:
            print(computer.name + " has the higher card, adding to hand")
            computer.hand.add(table_cards)

print("Game over, number of rounds: " + str(total_rounds))
print("a war happened " + str(war_count) + " times")
