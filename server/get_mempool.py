import urllib, json
import pyrebase
from datetime import datetime
from pytz import timezone

#load tainted input list from the text file
taintedList = []
with open("taintedList.txt", "r") as ins:
    for line in ins:
        taintedList.append(line)

#get current mempool data from API endpoint
url = "https://blockchain.info/unconfirmed-transactions?format=json"
response = urllib.urlopen(url)
data = json.loads(response.read())


config = {
    "apiKey": "AIzaSyANEGBNvsMQuCXp7eWZYVcqD_JTFyx8IpY",
    "authDomain": "chain-kleaner.firebaseapp.com",
    "databaseURL": "https://chain-kleaner.firebaseio.com",
    "storageBucket": "chain-kleaner.appspot.com",
    "serviceAccount": "chain-kleaner-firebase-adminsdk-lgcun-c91d551ac2.json"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

# data = data["txs"]
for i in range(len(data["txs"])):
    index = data["txs"][i]["tx_index"]

    inputCount = len(data["txs"][i]["inputs"])
    isTxTainted = False

    for x in range(inputCount):
        for z in range(len(taintedList)):
            if(data["txs"][i]["inputs"][x]["prev_out"]["addr"] == taintedList[z]):
                isTxTainted = True
                break

    if(isTxTainted):
        data["txs"][i]["isTainted"] = 1
    else:
        data["txs"][i]["isTainted"] = 0

    db.child("mempool").child(index).set(data["txs"][i])

sl = timezone('Asia/Colombo')
sa_time = datetime.now(sl)

print "New mempool transactions inserted on - "+sa_time.strftime('%Y-%m-%d_%H-%M-%S')
