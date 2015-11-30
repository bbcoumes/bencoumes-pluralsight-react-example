"use strict";

var Dispatcher = require('../dispatcher/appDispatcher.js');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitializeActions = {
	initApp: function() {
			
			Dispatcher.dispatch({
				actionType: ActionTypes.INITIALIZE,
				initialData: {
					authors: AuthorApi.getAllAuthors()
				}
			});
		}
};

module.exports = InitializeActions;