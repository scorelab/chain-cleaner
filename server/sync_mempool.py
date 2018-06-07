import urllib, json
import pyrebase
from datetime import datetime
from pytz import timezone

config = {
    "apiKey": "AIzaSyANEGBNvsMQuCXp7eWZYVcqD_JTFyx8IpY",
    "authDomain": "chain-kleaner.firebaseapp.com",
    "databaseURL": "https://chain-kleaner.firebaseio.com",
    "storageBucket": "chain-kleaner.appspot.com",
    "serviceAccount": "chain-kleaner-firebase-adminsdk-lgcun-c91d551ac2.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

#get all tx and search if it is spent or not
all_tx = db.child("mempool").get()
for user in all_tx.each():
    hash = user.val()["hash"]

    url = "https://blockchain.info/rawtx/"+hash
    response = urllib.urlopen(url)

    try:
        data = json.loads(response.read())
        if "block_height" in data:
            key = user.key()
            db.child("mempool").child(key).remove()

    except ValueError, e:
        key = user.key()
        db.child("mempool").child(key).remove()



sl = timezone('Asia/Colombo')
sa_time = datetime.now(sl)

print "Mempool transactions updated on - "+sa_time.strftime('%Y-%m-%d_%H-%M-%S')
