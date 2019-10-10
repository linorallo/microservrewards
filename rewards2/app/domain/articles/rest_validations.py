# coding=utf_8
# Son las validaciones de los servicios rest, se validan los parametros obtenidos desde las llamadas externas rest

import numbers

import app.domain.articles.crud_service as crud
import app.utils.errors as error
import app.utils.schema_validator as schemaValidator

# Son validaciones sobre las propiedades que pueden actualizarse desde REST
LEVEL_CREATE_SCHEMA = {
    "nameLevel": {
        "type": str,
        "minLen": 1,
        "maxLen": 20
        },
    "minScore": {
        "type": int
        },
    "maxScore":{
        "type":int
    }
}

LEVEL_UPDATE_SCHEMA ={
    "minScore": {
        "type": int,
        "minLen": 1
        },
    "maxScore": {
        "type": int,
        "minLen": 1
        }
}

def validateEditScoreParams(userId, params):
    """
    Valida los parametros para actualizar un objeto.\n
    params: dict<action, valor> Score
    """
    if (not userId):
        raise error.InvalidArgument("_id", "Inválido")



def validateCreateLevelParams(params):
    """
    Valida los parametros para crear un objeto.\n
    params: dict<propiedad, valor> Article
    """

    return schemaValidator.validateAndClean(LEVEL_CREATE_SCHEMA, params)


def validateEditArticleParams(articleId, params):
    """
    Valida los parametros para actualizar un objeto.\n
    params: dict<propiedad, valor> Article
    """

    return schemaValidator.validateAndClean(LEVEL_UPDATE_SCHEMA, params)
