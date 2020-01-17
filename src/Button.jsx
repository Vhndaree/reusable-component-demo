import React, {Component} from 'react';
import { Button } from 'reusable-ui-kit';

class MyButton extends Component {
  state = { clicked: 0, firstClick: false };

  onClick = () => {
    const { clicked } = this.state;
    const newClicked = clicked + 1;
    this.setState({
      clicked: newClicked,
      firstClick: true
    });
  }

  reset = () => {
    this.setState({ clicked: 0, firstClick: false });
  }
  
  render() {
    const { clicked, firstClick } = this.state;
    let content = firstClick ? "You Clicked me " + clicked + " time" : "";
    content += clicked > 1 ? "s." : !!content ? "." : "";
    return (
      <>
        <div><Button.Primary onClick={this.onClick}> Click me </ Button.Primary></div>
        <br/>
        <div><Button.Secondary onClick={this.reset}>Reset</Button.Secondary></div>
        {content}
      </>
    );
  }
}

export default MyButton;