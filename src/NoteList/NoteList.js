import React, { Component } from 'react';
import NoteListItem from './NoteListItem/NoteListItem'; 
import './NoteList.scss';

const noteList = [
	{
		id: 'a1', 
		title: 'TOEFL Essential 300', 
		price: '0',
		link: '#'
	},
	{
		id: 'a2', 
		title: 'TOEFL Advanced 1000', 
		price: '1.99',
		link: '#'
	},
	{
		id: 'a3', 
		title: 'GRE Essential 300', 
		price: '0',
		link: '#'
	},
	{
		id: 'a5', 
		title: 'SAT Essential 300', 
		price: '0',
		link: '#'
	}
];

class NoteList extends Component {
	render() {
		return (
			<div className="NoteList">
				{
					noteList.map((note) => {
						return <NoteListItem key={note.id} note={note} />
					})
				}
			</div>
		);
	}
}

export default NoteList; 