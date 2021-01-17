def array_check(nums):
    for item in range(len(nums) - 2):
        if nums[item] == 1 and nums[item + 1] == 2 and nums[item + 2] == 3:
            return True
    return False


def string_bits(my_str):
    result = ""
    for item in range(len(my_str)):
        if item % 2 == 0:
            result += my_str[item]
    return result


def end_other(a, b):
    a = a.lower()
    b = b.lower()
    # return(b.endswith(a) or a.endswith(b)) # the best way
    return a[-[len(b)]:] == b or a == b[-len(a):]


def double_char(mystr):
    result = ''
    for char in mystr:
        result += char * 2
    return result


def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)


def fix_teen(n):
    if n[13, 14, 17, 18, 19]:
        return 0
    return n

def count_evens(nums):
    counter = 0
    for element in nums:
        if element % 2 == 0:
            counter += 1
    return 0

