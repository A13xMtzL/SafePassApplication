import secrets
import string

def check_char(valid_chars,password):
    """
    Given a list of chars groups, checks that the password at least
    have one char of each group. Returns a boolean.
    """
    valid =[]
    for group in valid_chars:
        group_valid = []
        for c in group:
            if c in password:
                group_valid.append(True)
            else:
                group_valid.append(False)
            if any(group_valid):
                valid.append(True)
            else:
                valid.append(False)
    return all(valid)
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
    while check_char(selection, password):
        password = ''.join(secrets.choice(valid_chars) for _ in range(length))
    return password

if __name__ == "__main__":
    selection = ["lower", "special", "upper", "number"]
    print(generator(selection, 20))