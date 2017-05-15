import React from 'react';
import ReactDom from 'react-dom';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Pages extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch('/post')
			.then(response => response.json())
			.then(posts =>
			this.setState({ posts })
		);
	}

	render() {
		return (
			<div>
				{this.state.posts.map(post => (
					<div>
						<b>{thread.label}</b>
						<b>{thread.text}</b>
					</div>
				))}
			</div>
		)
	}
}

ReactDom.render(
	<Pages/>,
	document.getElementById('root')
)