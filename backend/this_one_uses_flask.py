from flask import Flask, jsonify, request
from scrape_forbes_companies import get_scrape_result

app = Flask(__name__)

@app.route('/everything')
def get_everything():
    results=get_scrape_result()
    return jsonify(results)

app.run(debug = True, port = 8080)
'''
use REST
learn the different types of databases and how to host

'''