import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// component
import Books from '../components/Books';

// api collection
import { Books as BooksCollection } from '../../api/books/books';

// main container 
export default createContainer(props => {

  //subscribe data
	const subscription = Meteor.subscribe('books');

	return {
		firstName: 'Alaina',
		readBooks: BooksCollection.find({ read: true }).fetch(),
		unreadBooks: BooksCollection.find({ read: false }).fetch()
	};
}, Books);
