import React from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps { }
interface IState {
  name: string
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'Animesh'
    }
  }

  private toggleName = ()=> {
    if (this.state.name==='Animesh') {
      this.setState({name:'Animesh Srivastava'})
    }
    else {
      this.setState({name:'Animesh'})
    }      
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.name}</p>
          <button onClick={()=>{this.toggleName()}}>Toggle ME</button>
        </header>
      </div>
    );
  }
}

export default App;
