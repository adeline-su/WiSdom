import firebase_admin
from firebase_admin import db
import json
from scrape_forbes_companies import get_scrape_result
from flask import Flask, jsonify, request

#initialize flask app
#app = Flask(__name__)

scrape_result = get_scrape_result()
print(type(scrape_result))

cred_object = firebase_admin.credentials.Certificate('/Users/juliazhu/Downloads/wisdom-fdb61-firebase-adminsdk-x76z7-e0b3d77315.json')
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL':"https://wisdom-fdb61-default-rtdb.firebaseio.com/"
	})

"""
ref = db.reference("/")
ref.set({
	"Books":
	{
		"Best_Sellers": -1
	}
})



#@app.route('https://wisdom-fdb61-default-rtdb.firebaseio.com/Companies', methods=['POST'])
def post_to_firebase():
    data = scrape_result
    ref.push(data)
   # return '', 206

post_to_firebase()
"""
ref = db.reference("/Companies")

ref.delete()

ref = db.reference("/Companies")

for key, value in scrape_result.items():
	print("key:",key)
	print("val:",value)
	ref.push().set(value)
    