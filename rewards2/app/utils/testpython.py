import json

import bson.objectid as bson
import pymongo
"import rewards2.app.utils.mongo as db"

dbresult='{ "name":"John", "age":30, "city":"New York"}'
userID="5d854866831e8b2b9293a045"
'dbresult2=db.scores.find_one({"_id":bson.ObjectId(userID)})'

rawresult=json.loads(dbresult)
"rawresult2=json.loads(dbresult2)"
print(rawresult["city"])
"print(dbresult2)"
"print(rawresult2)"