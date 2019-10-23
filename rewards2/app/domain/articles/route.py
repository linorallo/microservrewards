# coding=utf_8

import flask

import app.domain.articles.crud_service as crud
import app.domain.articles.rest_validations as restValidator
import app.utils.errors as errors
import app.utils.json_serializer as json
import app.utils.security as security


def init(app):
    """
    Inicializa las rutas para Rewards\n
    app: Flask
    """
    @app.route('/v1/rewards/levels', methods=['GET'])
    def getLevels():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))
            return json.dic_to_json(crud.getLevels())
        except Exception as err:
            return errors.handleError(err)


    @app.route('/v1/rewards/<userId>', methods=['GET'])
    def getScore(userId):
            try:
                security.validateAdminRole(flask.request.headers.get("Authorization"))
                return json.dic_to_json(crud.getScore(userId))
            except Exception as err:
                return errors.handleError(err)

    @app.route('/v1/rewards/manage', methods=['GET'])
    def manageScore():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))
            params = json.body_to_dic(flask.request.data)
            userId = params['userId']
            result = crud.manageScore(userId, params)
            return result
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/update-points-value', methods=['POST'])
    def updateValuePoint():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            result = crud.updateValuePoint(params)
            
            return result
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/create-level', methods=['POST'])
    def createLevel():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            result = crud.createLevel(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/levels/<levelId>', methods=['DELETE'])
    def deleteLevel(levelId):
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))
            result = crud.deleteLevel(levelId)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/levels/<levelId>/modify-level', methods=['POST'])
    def modifyLevel(levelId):
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))
            params = json.body_to_dic(flask.request.data)
            result = crud.modifyLevel(levelId, params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/<articleId>', methods=['GET'])
    def getArticle(articleId):
        try:
            return json.dic_to_json(crud.getArticle(articleId))
        except Exception as err:
            return errors.handleError(err)
