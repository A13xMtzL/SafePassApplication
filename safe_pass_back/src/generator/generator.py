import secrets
import string
from checker.checker import check_char

def generator(selection,length):
    """"
    Selection string must be sanitized
    Selection is a list containing the type of chars the password must have, ("lower","upper","number","special")
    """
    mode = {"lower": string.ascii_lowercase, "upper": string.ascii_uppercase, "number": string.digits, "special": string.punctuation}
    valid_chars = ""
    for arr in selection:
        valid_chars += mode[arr]
    password = ''.join(secrets.choice(valid_chars) for _ in range(length))
    valid_chars_list = [[mode[sel]] for sel in selection]
    while check_char(valid_chars_list, password):
        password = ''.join(secrets.choice(valid_chars) for _ in range(length))
    return password
