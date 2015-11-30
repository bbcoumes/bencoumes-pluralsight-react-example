"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/ActionTypes');

var AuthorActions = {
	createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		//hey dispatcher, tell all stores that an author has been created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

	updateAuthor: function(author) {
		var updatedAuthor = AuthorApi.saveAuthor(author);

		//hey dispatcher, tell all stores that an author has been created
		Dispatcher.dispatch({
			actionType: ActionTypes.UPDATE_AUTHOR,
			author: updatedAuthor
		});
	},

	deleteAuthor: function(id) {
		AuthorApi.deleteAuthor(id);
		
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
};

module.exports = AuthorActions; 