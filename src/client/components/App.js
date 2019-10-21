import React from 'react';
import Button from 'components/Button';

class App extends React.Component {
  renderBtn = () => console.log('Clicked in App');

  render() {
    return (
      <div>
        <h1>App</h1>
        <Button text="Click Here" renderBtn={this.renderBtn} cn="btn" />
      </div>
    );
  }
}

export default App;
