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

website_table = soup.find(class_ ="table-row-group").prettify()

website_table_rank = soup.find_all(class_="rank first table-cell rank")
website_table_orgName = soup.find_all(class_="organizationName second table-cell name")
website_table_industries = soup.find_all(class_="industries table-cell industries")
website_table_country = soup.find_all(class_="country table-cell country/territory")
website_table_emp = soup.find_all(class_="employees table-cell employees")

website_array_rank = []
website_array_orgName = []
website_array_industries = []
website_array_country = []
website_array_emp = []

i = 0
scrape_result = {}
while i < 400 : #get the first 400 results from the source website
    scrape_result[website_table_orgName[i].string] ={"OrganizationName": website_table_orgName[i].string,
                                                     "Rank": website_table_rank[i].string[:-1], 
                                                    "Industries" : website_table_industries[i].string,
                                                    "Country" : website_table_country[i].string,
                                                    "Employees": website_table_emp[i].string }
    i += 1

def get_scrape_result():
    return scrape_result