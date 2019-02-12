import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class NoteListItem extends Component {
	render() {
		let note = this.props.note; 

		return (
			<Link to={`/note/${note.id}`} className="NoteListItem">
				<div className="note-title">
					{note.title}
				</div>
				
				<div className="note-price">
					{note.price}
				</div>
			</Link>
		)
	}
}

export default NoteListItem; 