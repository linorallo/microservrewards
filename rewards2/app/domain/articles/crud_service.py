# coding=utf_8

import datetime
import pymongo
import json
import app.gateways.rabbit_service as rabbit
import app.domain.articles.crud_service as crud
import app.utils.errors as error
import app.utils.mongo as db
import bson.objectid as bson
import logging

def getScore(userId):
    """
    Consultar puntaje. \n
    userId: string ObjectId\n
    params: dict<propiedad, valor> Usuario\n
    return dict<propiedad, valor> Usuario\n
    """
    """
    @api {get} /v1/rewards/:userId Consultar Puntaje
    @apiName Consultar Puntaje
    @apiGroup Puntaje

    @apiUse AuthHeader

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            "_id":":userId"
            “score” : “{score}”,
            “levelName” : “{levelName}” 
        }

    @apiUse Errors

    """
    try:
        
        result = db.scores.find_one({"_id": bson.ObjectId(userId)})
        levelId =result["level"]
        level = db.levels.find_one({"_id" : bson.ObjectId(levelId)})
        resultReady = {
            "_id":userId,
            "score":result["score"],
            "levelName":level["levelName"]
        }                
        if (not result):
            raise error.InvalidArgument("_id", "Document does not exists")
        return resultReady
    
    except Exception:
        raise error.InvalidArgument("_id", "Invalid object id")


def manageScore(userID, params  ):
    """
    Gestionar puntaje. \n
    userId: string ObjectId\n
    params: dict<propiedad, valor> Usuario\n
    return dict<propiedad, valor> Usuario\n
    """
    """
    @api {post} /v1/rewards/:userId/manage Gestionar Puntaje
    @apiName Gestionar Puntaje
    @apiGroup Puntaje

    @apiUse AuthHeader

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            “action” : “SUMAR|RESTAR”,
            “valor” : “{valor}” 

        }

    @apiUse Errors
    
    """
    try:
        rawresults = db.scores.find_one({"_id":bson.ObjectId(userID)})
        if(params["action"]=="SUMAR"):
            updatedValue=int(rawresults['score'])+int(params['valor'])
        else:
            if(params["action"]=="RESTAR"):
                if(int(rawresults['score'])-int(params['valor'])<0):
                    raise error.InvalidArgument('score', 'Value not valid')
                updatedValue=int(rawresults['score'])-int(params['valor'])
            else:
                raise error.InvalidArgument('action','Action not valid')
        if (not rawresults):
            raise error.InvalidArgument("_id", "Document does not exists")
        db.scores.find_one_and_update({'_id':bson.ObjectId(userID)},{'$set':{'score':int(updatedValue)}})
        checkLevel(userID)
        return str(updatedValue)
    except Exception as err:
        raise err

def updateValuePoint(params):
    """
    Modificar valor del puntaje. \n
    params: dict<propiedad, valor> Valor Puntaje\n
    return dict<propiedad, valor> Valor Puntaje\n
    """
    """
    @api {post} /v1/rewards/update-points-value Modificar Valor de Puntaje
    @apiName Valor de Puntaje
    @apiGroup Puntaje

    @apiUse AuthHeader

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            “pointValue” : “{pointValue}”
        }

    @apiUse Errors

    """
    try:
        pointValue=int(params['pointValue'])
        if(pointValue<0):
            raise error.InvalidArgument('pointValue','pointValue cannot be negative')
        db.scores.find_one_and_update({'name':'cotizacion'},{'$set':{'pointValue':pointValue}})
        return "Points value updated"
    except Exception as err:
        raise err


def createLevel(params):
    """
    Agrega un nivel.\n
    params: dict<propiedad, valor> Nivel\n
    return dict<propiedad, valor> Nivel
    """
    """
    @api {post} /v1/rewards/create-level Crear Nivel
    @apiName Crear Nivel
    @apiGroup Niveles

    @apiUse AuthHeader

    @apiExample {json} Body
        {
            “levelName” : “{levelName}”,
            “minPointValue” : “{minPointValue}”,
            “maxPointValue” : “{maxPointValue}”

        }

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            “levelId” : “{levelId}”,
            “levelName” : “{levelName}”,
	        “minPointalue” : “{minPointValue}”,
	        “maxPointValue” : “{maxPointValue}”

        }

    @apiUse Errors

    """
    try:
        db.levels.insert_one(params)
        name=params['levelName']
        return db.levels.find_one({'levelName':name})
        
    except Exception as err:
        raise err

def modifyLevel(levelId, params):
    """
    Mofifica un nivel.\n
    params: dict<propiedad, valor> Nivel\n
    return dict<propiedad, valor> Nivel
    """
    """
    @api {post} /v1/rewards/modify-level Modificar Nivel
    @apiName Modificar Nivel
    @apiGroup Niveles

    @apiUse AuthHeader

    @apiExample {json} Body
        {
            "levelName" :"{levelName}",
            “minPointValue” : “{minPointValue}”,
            “maxPointValue” : “{maxPointValue}”

        }

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            “levelId” : “{levelId}”,
            “levelName” : “{levelName}”,
	        “minValue” : “{minValue}”,
	        “maxValue” : “{maxValue}”

        }

    @apiUse Errors

    """
    try:
        db.levels.find_one_and_update({"_id":bson.ObjectId(levelId)},{'$set':{'levelName':params['levelName'],'minPointValue':params['minPointValue'],'maxPointValue':params['maxPointValue']}})
        level = db.levels.find_one({"_id":bson.ObjectId(levelId)})
        message = {
            "levelId" : levelId,
            "levelName" : level['levelName'],
            'minPointValue' : level['minPointValue'],
            'maxPointValue' : level['maxPointValue']
        }
        return message 
    except Exception as err:
        raise err


def deleteLevel(levelId):
    """
    Marca un nivel como invalido.\n
    levelId: string ObjectId
    """
    """
    Elimina un nivel : delLevel(levelId: string)

    @api {delete} /rewards/levels/:levelId Eliminar Nivel
    @apiName Eliminar Nivel
    @apiGroup Niveles

    @apiUse AuthHeader
    @apiSuccessExample {json} 200 Respuesta
        HTTP/1.1 200 OK

    @apiUse Errors

    """
    db.levels.delete_one({'_id':bson.ObjectId(levelId)})
    

def getLevels():
    """
    Consultar niveles. \n
    """
    """
    @api {get} /v1/rewards/levels Consultar Niveles
    @apiName Consultar Niveles
    @apiGroup Niveles

    @apiUse AuthHeader

    @apiSuccessExample {json} Respuesta
        HTTP/1.1 200 OK
        {
            “pointValue” : “{pointValue}”,
	        “{levelId}” : {
                “levelName” : “{levelName}”,
	            “minPointValue” : “{minPointValue}”,
	            “maxPointValue” : “{maxPointValue}”
            }
        }

    @apiUse Errors

    """
    print(db.levels.count())
    results=db.levels.find({})
    levels={
        'pointValue': db.scores.find_one({"name":"cotizacion"})["pointValue"],
    }
    for level in results:
        levelName = level["levelName"]
        minPointValue  = level['minPointValue']
        maxPointValue = level['maxPointValue']
        levelData={
            'levelName' : levelName,
            'minPointValue' : minPointValue,
            'maxPointValue' : maxPointValue
        }

        levels[str(level['_id'])] = levelData
    
    if(not results):
        raise error("el find no funciona")
    return levels


def checkLevel(userId):
    levels = db.levels.find({})
    score = int(getScore(userId)["score"])
    print(score)
    for i in levels:
        if(int(i["minPointValue"])<=int(score)):
            if(int(i["maxPointValue"])>score):
                levelId = str(i["_id"])
                db.scores.find_one_and_update({'userId':userId},{'$set':{'level':levelId}})
                rabbit.sendLevelNotice(userId, levelId)

def updateScore(userId, amount):
    rawValuePoint = db.scores.find_one({"name":"cotizacion"})
    valuePoint=float(rawValuePoint["pointValue"])
    userScores=db.scores.find_one({'userId':userId})
    newScore=(amount/valuePoint)+float(userScores['score'])
    db.scores.find_one_and_update({'userId':userId}, {'$set':{'score':int(newScore)}})
    checkLevel(userId)
