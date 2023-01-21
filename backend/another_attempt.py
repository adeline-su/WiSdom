import firebase_admin
from firebase_admin import db
import json


cred_object = firebase_admin.credentials.Certificate(r"\Users\suade\uofthacks\wisdom-fdb61-firebase-adminsdk-x76z7-94e7f12e91.json")
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL':"https://wisdom-fdb61-default-rtdb.firebaseio.com/"
	})

ref = db.reference("/")

with open("test.json", "r") as f:
	file_contents = json.load(f)
ref.set(file_contents)