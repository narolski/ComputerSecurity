import operator


class Cipher:
    """
    Representation of the intercepted cipher.
    """

    def __init__(self, cipher):
        """
        Initializes the cipher with the given cipher-text.
        The cipher-text is then converted to a list of characters.
        :param cipher:
        """
        self.chars = []
        cipher_charcodes = str(cipher).split(' ')

        for code in cipher_charcodes:
            "Convert the ASCII char code into character representation"
            self.chars.append(chr(int(code, 2)))

    def char_at(self, index):
        """
        Returns the character in the cipher at a given index
        :param index:
        :return: char
        """
        if index < len(self.chars):
            return self.chars[index]
        else:
            return ' '


class Decipherer:
    """
    Handles the decipherment of the cipher.
    """

    def __init__(self, intercepted_data, target_data):
        """
        Initializes the decipherer.
        :param intercepted_data: file containing the intercepted ciphers
        :param target_data: file containing the target cipher to be decoded
        """
        self.ciphers = []
        self.intercepted_file = intercepted_data
        self.target_file = target_data

        self.to_decrypt = None
        self.letters_odds = None
        self.generate_letters_odds_dict()

    def crack_encryption_key(self):
        """
        Cracks the encryption key used to encode the intercepted data.
        The key is found by guessing the occurrences of spaces in intercepts which are encrypted using the same key.
            cipher1 XOR cipher2 = message1 XOR key XOR message2 XOR key = message1 XOR message 2
            key = message XOR cipher
        By guessing the parts of message, we are effectively guessing the key used to encrypt data.

        :return: returns string representing the encryption key
        """
        key = []
        longest_cipher_len = 0

        for cipher in self.ciphers:
            "Finds the longest cryptogram in cipher"
            if len(cipher.chars) > longest_cipher_len:
                longest_cipher_len = len(cipher.chars)

        for i in range(0, longest_cipher_len):
            predicted_key = {}
            ciphers_to_examine = []

            for cipher in self.ciphers:
                "Examines only the cryptograms of correct length"
                if i < len(cipher.chars):
                    ciphers_to_examine.append(cipher)

            for cipher in ciphers_to_examine:

                for letter in self.letters_odds.keys():
                    "XOR-s the currently examined letter of cipher with all letters of alphabet and stores it" \
                        "along with the odds of the occurrence"
                    prob_xor = (ord(cipher.char_at(i)) ^ ord(letter), self.letters_odds[letter])

                    if prob_xor[0] not in predicted_key.keys():
                        "Store the odds of occurrence in predicted_key dict"
                        predicted_key[prob_xor[0]] = prob_xor[1]
                    else:
                        "If the char was already examined, raise the odds of its' occurrence"
                        predicted_key[prob_xor[0]] = predicted_key.get(prob_xor[0]) + self.letters_odds.get(letter)

            # Sorts the chars by probability of occurrence
            srt = sorted(predicted_key.items(), key=operator.itemgetter(1), reverse=True)
            predicted_key = dict(srt)

            key.append(self.get_best_key_char(i, predicted_key))

        return key

    def get_best_key_char(self, index, predicted_key):
        """
        Finds the best char for the key at a given index so that it decrypts the given ciphers.
        :param index: index at which the char is placed
        :param predicted_key: the dictionary holding the probability of occurrence for XOR-ed chars
        :return: best character to put at a given index
        """
        best_char_match = ord(' ')
        best_num_of_matches = 0
        ciphers_to_examine = []

        for cipher in self.ciphers:
            if index < len(cipher.chars):
                ciphers_to_examine.append(cipher)

        for char in predicted_key.keys():
            readable_char_matches = 0

            for cipher in ciphers_to_examine:
                if (chr(ord(cipher.char_at(index)) ^ char)) in self.letters_odds.keys():
                    "If by XOR-ing char from cipher and our candidate we got readable char, increment number of matches"
                    readable_char_matches += 1

            if readable_char_matches > best_num_of_matches:
                "Store our best match for the examined cipher"
                best_num_of_matches = readable_char_matches
                best_char_match = char

            if readable_char_matches >= len(self.ciphers):
                return char

        return best_char_match

    def generate_letters_odds_dict(self):
        """
        Generates a dictionary holding the odds of occurrence for readable letters of the alphabet
        :return: self
        """
        self.letters_odds = {
            ' ': 100, 'a': 89, 'i': 82, 'o': 77, 'e': 77, 'z': 56, 'n': 55, 'r': 47, 'w': 47, 's': 43, 't': 40, 'c': 40,
            'y': 38, 'k': 35, 'd': 33, 'p': 31, 'm': 28, 'u': 25, 'j': 23, 'l': 21, 'b': 15, 'g': 14, 'h': 11, 'f': 3,
            'q': 0.5, 'v': 0.5, 'x': 0.5, ',': 12, '.': 12, '-': 11, '"': 11, '!': 10, '?': 10, ':': 9, ';': 8, '(': 7,
            ')': 7
        }

        for i in range(65, 91):
            "Defines odds of occurrence for A-Z"
            # TODO: Find better way to associate the odds to the A-Z letters.
            self.letters_odds[chr(i)] = 10

        for i in range(48, 58):
            "Defines odss of occurrence for 0-9"
            self.letters_odds[chr(i)] = 10

    def convert_key_to_string(self, key):
        """
        Converts the key represented as a list of ASCII char codes to string.
        :param key: list of char codes
        :return: key in a string representation
        """
        string_key = ''

        for charcode in key:
            string_key += chr(charcode)

        return string_key

    def convert_key_to_hex(self, key):
        """
        Converts the key represented as a list of ASCII char codes to hexadecimal format.
        :param key: list of char codes
        :return: key as a string of hex codes
        """
        hex_string_key = ''

        for charcode in key:
            hex_string_key += hex(charcode)[2:]

        return hex_string_key

    def load_ciphers(self):
        """
        Loads the intercept data stolen in files.
        """
        data = open(self.intercepted_file, 'r').readlines()
        target = open(self.target_file, 'r').readline()

        for cipher in data:
            self.ciphers.append(Cipher(cipher))

        self.to_decrypt = Cipher(target)

    def save_decrypted_messages(self):
        """
        Decrypts the message char-by-char and saves it in the output file.
        :return: self
        """
        key = self.crack_encryption_key()
        hex_key = self.convert_key_to_hex(key)

        print("Decrypted key:\n{}".format(hex_key))
        output = open('decrypted_messages.txt', 'w')

        # Write the key to output file as well
        output.write("Decrypted key: {} \n\n".format(hex_key))

        for cipher in self.ciphers:
            for i in range(0, len(cipher.chars)):
                output.write(chr(ord(cipher.char_at(i)) ^ key[i]))

            output.write('\n\n')

        # Decode the target cipher
        output.write("Decoded target cipher: \n")

        for i in range(0, len(self.to_decrypt.chars)):
            output.write(chr(ord(self.to_decrypt.char_at(i)) ^ key[i]))


    def decrypt_data(self):
        """
        Calls methods handling the decryption of ciphers.
        :return: self
        """
        self.load_ciphers()
        self.save_decrypted_messages()