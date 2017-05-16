import React from 'react';
import ReactDom from 'react-dom';

require('es6-promise').polyfill();
require('isomorphic-fetch');

class Article extends React.Component {
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
						<span>{post.label}</span>
						<span>{post.text}</span>
					</div>
				))}
			</div>
		)
	}
}

ReactDom.render(
	<Article/>,
	document.getElementById('root')
)