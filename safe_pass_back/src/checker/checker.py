import string

def check_char(password):
    """
    Given a list of chars groups, checks that the password at least
    have one char of each group. Returns a boolean.
    """
    valid_chars = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
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

def check_common(password):
    with open('../../assets/rockyou.txt', 'r', encoding='utf-8', errors='ignore') as archivo:
        for linea in archivo:
            if password == linea.strip():
                return(True)
        return(False)

def check_length(password):
    return(len(password) >= 8)

print(check_length("testtst"))