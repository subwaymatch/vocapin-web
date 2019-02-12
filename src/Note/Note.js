import React, { Component } from 'react'; 
import './Note.scss'

class Note extends Component {
	constructor() {
		super();

		this.state = {
			vocabs: []
		};
	}

	componentDidMount() {
		console.log('componentDidMount()');

		this.setState({
			vocabs: [
				{
					id: 'voluminous',
					desc: 'having or marked by great volume or bulk'
				},
				{
					id: 'hallucinate', 
					desc: 'dream of something that has never been yours'
				}
			]
		});
	}

	render() {
		console.log(this); 

		return (
			<div className='Note'>
				{
					this.state.vocabs.map((vocab) => {
						return <div key={vocab.id} className="note-vocab">
							<span>{vocab.id}</span>
							<p>{vocab.desc}</p>
						</div>
					})
				}
			</div>
		);
	}
}

export default Note; 