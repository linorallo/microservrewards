# coding=utf_8

import datetime
import pymongo

import app.utils.errors as error
import app.utils.mongo as db
import bson.objectid as bson

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
            “score” : “{score}”,
            “levelName” : “{levelName}” 
        }

    @apiUse Errors

    """
    try:
        ''
        result = db.scores.find_one({"_id": bson.ObjectId(userId)})
        if (not result):
            raise error.InvalidArgument("_id", "Document does not exists")
        return result
    except Exception:
        raise error.InvalidArgument("_id", "Invalid object id")

def manageScore(userID, params):
    """
    Gestionar puntaje. \n
    userId: string ObjectId\n
    params: dict<propiedad, valor> Usuario\n
    return dict<propiedad, valor> Usuario\n
    """
    """
    @api {get} /v1/rewards/:userId/manage Gestionar Puntaje
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
    params["_id"] = userId
    return _addOrManageScore(params)

def updateScoreValue(params):
    """
    Modificar valor del puntaje. \n
    params: dict<propiedad, valor> Valor Puntaje\n
    return dict<propiedad, valor> Valor Puntaje\n
    """
    """
    @api {get} /v1/rewards/update-points-value Modificar Valor de Puntaje
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
    params["_id"] = userId
    return _addOrUpdateScoreValue(params)   


def addLevel(params):
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
            “minValue” : “{minValue}”,
            “maxValue” : “{maxValue}”

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
    return _addOrCreateLevel(params)

def modifyLevel(params):
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
            “minValue” : “{minValue}”,
            “maxValue” : “{maxValue}”

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
    return _addOrModifyLevel(params)

def delLevel(levelId):
    """
    Marca un nivel como invalido.\n
    levelId: string ObjectId
    """
    """
    Elimina un nivel : delLevel(levelId: string)

    @api {delete} /rewards/:levelId Eliminar Nivel
    @apiName Eliminar Nivel
    @apiGroup Niveles

    @apiUse AuthHeader

    @apiSuccessExample {json} 200 Respuesta
        HTTP/1.1 200 OK

    @apiUse Errors

    """
    level = getLevel(levelId)
    db.levels.delete(level)

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
	            “minValue” : “{minValue}”,
	            “maxValue” : “{maxValue}”
            }
        }

    @apiUse Errors

    """
    results=db.levels.count()
    results=db.levels.find_one({}) 
    'Esto funciona pero hay q lograr traer todas las entradas como un array'
    
    if(not results):
        raise error("el find no funciona")
    return results

