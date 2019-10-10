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
            return json.dic_to_json(crud.getLevels())
        except Exception as err:
            return errors.handleError(err)


    @app.route('/v1/rewards/<userId>', methods=['GET'])
    def getScore(userId):
            try:
                return json.dic_to_json(crud.getScore(userId))
            except Exception as err:
                return errors.handleError(err)
    """         try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            params = restValidator.validateAddArticleParams(params)

            result = crud.addArticle(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)
    """
    @app.route('/v1/rewards/<userId>/manage', methods=['POST'])
    def manageScore(userId):
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            result = crud.manageScore(userId, params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/update-points-value', methods=['POST'])
    def valuePoint():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            result = crud.valuePoint(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/create-level', methods=['POST'])
    def createLevel():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            params = restValidator.validateCreateLevelParams(params)

            result = crud.createLevel(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/delete-level', methods=['POST'])
    def deleteLevel():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            result = crud.deleteLevel(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/edit-level', methods=['POST'])
    def editLevel():
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))

            params = json.body_to_dic(flask.request.data)

            params = restValidator.validateEditLevelParams(params)

            result = crud.deleteLevel(params)

            return json.dic_to_json(result)
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/rewards/<articleId>', methods=['GET'])
    def getArticle(articleId):
        try:
            return json.dic_to_json(crud.getArticle(articleId))
        except Exception as err:
            return errors.handleError(err)

    
    @app.route('/v1/articles/<articleId>', methods=['DELETE'])
    def delArticle(articleId):
        try:
            security.validateAdminRole(flask.request.headers.get("Authorization"))
            crud.delArticle(articleId)
            return ""
        except Exception as err:
            return errors.handleError(err)

    @app.route('/v1/articles/search/<criteria>', methods=['GET'])
    def searchArticles(criteria):
        try:
            return json.dic_to_json(find.searchArticles(criteria))
        except Exception as err:
            return errors.handleError(err)
