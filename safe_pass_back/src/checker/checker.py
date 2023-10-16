import string
import requests
import hashlib

def check_char(valid_chars: list,password: str):
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

def check_common(password: str):
    with open('../../assets/rockyou.txt', 'r', encoding='utf-8', errors='ignore') as archivo:
        for linea in archivo:
            if password == linea.strip():
                return True
        return False

def check_length(password: str):
    return(len(password) >= 8)

def check_is_password_leaked(password: str):
    # Hash the password using SHA-1 algorithm
    password_hash = hashlib.sha1(password.encode('utf-8')).hexdigest().upper()

    # Make a request to "Have I Been Pwned" API to check if the password has been leaked
    response = requests.get(f"https://api.pwnedpasswords.com/range/{password_hash[:5]}")

    # If the response status code is 200, it means the password has been leaked
    #return response.status_code == 200
    pnum = False
    if response.status_code == 200:
        hash_list = response.text.splitlines()
        for item in hash_list:
            if item[0:35] == password_hash[5:]:
              pnum = True
        return pnum
    return False

def check_password_quality(password: str):
    chars_groups = [string.ascii_lowercase,string.ascii_uppercase,string.digits,string.punctuation]
    if not check_length(password):
        return "Very Poor"
    elif check_char([string.ascii_lowercase],password) or check_char([string.ascii_uppercase],password) or check_char([string.digits],password) or check_char([string.punctuation],password):
        return "Poor"
    else:
        for i in range(4):
            for j in range(i+1,4):
                if check_char([chars_groups[i],chars_groups[j]],password):
                    return "Good"
        return "Very Good"

