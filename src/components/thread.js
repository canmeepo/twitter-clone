import React from 'react';
import { Image, Item, Button } from 'semantic-ui-react';

class Thread extends React.Component {
  render() {
    const {id, text, image} = this.props;
    return (
    	<Item>
     		<Item.Image size='small' src={image} />
     		<Item.Content>
      		<Item.Description>
      			{text}
      		</Item.Description> 
      		</Item.Content>
      	</Item>
    )
  }
}

export default Thread;