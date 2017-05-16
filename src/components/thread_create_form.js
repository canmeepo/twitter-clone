import React, { Component } from 'react';
import { Form, Button} from 'semantic-ui-react';
import Dropzone from 'react-dropzone-component';

class ThreadCreateForm extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            image: undefined,
        }
    }

  render() {
    return (
        <Form>
            <Form.field>
                label="message"
                control='textarea'
                rows='3'
                onChange={
                    (event) => this.setState({ newPostText: event.target.value })
            }/>
            </Form.field>
            <Form.field>
                <Dropzone
                    config={{ postUrl: 'no-url'}}
                    eventHandlers={{
                        addedfile: (file) => this.setState({ newPostImage: file })
                    }}
                    djsConfig={{ autoProcessQueue: false}}
                />
            </Form.field>
            <Button onClick={this.submit.bind(this)}>Send</Button>
        </Form>
    )
  }

  submit(event) {
    const {text, image} = this.state;
    event.preventDefault();

    let formData = new FormData();
    formData.append('text', text);
    formData.append('image', image);

    fetch('/thread', {
        method: 'POST',
        body: formData
    })

    .then(response => response.json())
    .then(json => console.log(json))
  }
}

export default ThreadCreateForm;
