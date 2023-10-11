import string
import requests
import hashlib

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

def check_common(password):
    with open('../../assets/rockyou.txt', 'r', encoding='utf-8', errors='ignore') as archivo:
        for linea in archivo:
            if password == linea.strip():
                return True
        return False

def check_length(password):
    return(len(password) >= 8)

def check_is_password_leaked(password: str):
    # Hash the password using SHA-1 algorithm
    password_hash = hashlib.sha1(password.encode('utf-8')).hexdigest().upper()

    # Make a request to "Have I Been Pwned" API to check if the password has been leaked
    response = requests.get(f"https://api.pwnedpasswords.com/range/{password_hash[:5]}")

    # If the response status code is 200, it means the password has been leaked
    return response.status_code == 200

print(check_length("testtst"))