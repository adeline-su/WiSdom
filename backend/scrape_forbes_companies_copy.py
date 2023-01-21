import requests
from lxml import html
from bs4 import BeautifulSoup
import pandas as pd 
from flask import Flask, jsonify, request
from flask_cors import CORS
import json
 

app = Flask(__name__)
CORS(app)

headers = {
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/71.0.3578.80 Chrome/71.0.3578.80 Safari/537.36",
}

url = "https://www.forbes.com/lists/female-friendly-companies/?sh=488343e64dcd"
BASE_URL = "https://www.forbes.com/lists/female-friendly-companies/?sh=488343e64dcd"

source = requests.get(url)
soup = BeautifulSoup(source.text, 'html.parser')

#title = soup.find('title')
#print("Title of website: ", title.text)

# many_link=soup.find_all('a') # here i extracted all the anchor tags of my website
# total_links=len(many_link) # len function is use to calculate length of your array
# print("total links in my website :",total_links)
# print(many_link[100])

# print(len(soup))
# print(len(soup.body))

# desired = soup.find_all('a aria-label')
# print(len(desired))

#print(soup.prettify())
#print(soup.find(class_ ="table-row-group").prettify())

# website_table = soup.find(class_ ="table-row-group").find_all('a')
# for i in many_link[]: # here i use slicing to fetch only first 6 links from rest of them.
#     print(i)

# website_table_filter = soup.find_all('a')

#print(len(website_table))
#print(website_table_filter)

# data = json.loads(''.join(soup.find(class_ ="table-row-group").find_all('a')).prettify())
# print(data)

data = json.loads(soup.prettify())

file = open('C:\Users\suade\uofthacks\WiSdom\temp-webscraping\soup.txt', 'r+w')
#for line in 
with open('soup.json', 'w') as outfile :
    json.dump(data, outfile)

