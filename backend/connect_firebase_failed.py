"""
import firebase_admin


cred_obj = firebase_admin.credentials.Certificate('....path to file')
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL':https://console.firebase.google.com/u/0/project/wisdom-fdb61/database/wisdom-fdb61-default-rtdb/data
	})



import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

# Fetch the service account key JSON file contents
cred = credentials.Certificate('path/to/serviceAccountKey.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://console.firebase.google.com/u/0/project/wisdom-fdb61/database/wisdom-fdb61-default-rtdb/data'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules
ref = db.reference('restricted_access/secret_document')
print(ref.get())

"""

import pyrebase
config = {
  "apiKey": "AIzaSyBip9y6etWgl_mN6xUyxXFo8vZAa8rBToU",
  "authDomain": "wisdom-fdb61.firebaseapp.com",
  "databaseURL": "https://wisdom-fdb61-default-rtdb.firebaseio.com/",
  "storageBucket": "wisdom-fdb61.appspot.com",
  "serviceAccount": "~/Downloads/wisdom-fdb61-firebase-adminsdk-x76z7-e0b3d77315.json"
}

firebase = pyrebase.initialize_app(config)


# Get a reference to the auth service
auth = firebase.auth()

# Log the user in
user = auth.sign_in_with_email_and_password(email, password)

# Get a reference to the database service
db = firebase.database()

#storage = firebase.storage()


# data to save
data = {
    "name": "Mortimer 'Morty' Smith"
}

# Pass the user's idToken to the push method
results = db.child("users").push(data, user['idToken'])

auth.send_email_verification(user['idToken'])

# before the 1 hour expiry:
user = auth.refresh(user['refreshToken'])

db.child("users").child("Morty")
db.child("users").push(data)



