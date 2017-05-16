import React from 'react';
import { Container, Button, Item, Header } from 'semantic-ui-react';
import Thread from './thread';
import Dropzone from 'react-dropzone-component';
import showThreadCreateForm from './thread_create_form';

class Board extends React.Component {
	constructor() {
		super();
		this.state = {
			threads: [],
			showThreadCreateForm: false,
		}
	}

	componentDidMount() {
		fetch('/thread')
			.then(response => response.json())
			.then(threads =>
			this.setState({ threads })
		);
	}

	render() {
		return (
			<Container>
				<Header as='h1'>title</Header>
				<Item.Group>
				{this.state.threads.map(threads => (
					<Thread
						title={thread.title}
						text={thread.text}
						image={thread.image}
					/>
				))}
			</Item.Group>
				{	
					(this.state,showThreadCreateForm)
						? <div>
							<Button onClick={() => this.setState({showThreadCreateForm: false})}>
							close form 
							</Button>
							<ThreadCreateForm />
							</div>
						: <Button onClick={() => this.setState({showThreadCreateForm:true})}>
							close form 
							</Button>
				}
			</Container>
		)
	}
}

export default Board; 