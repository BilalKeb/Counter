import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './composent/Counter';

class App extends React.Component {
  constructor() {
    super() // permet de récupérer les props 

    this.state = {
      count1 : 0,
      count2 : 2
    } 
  }
  handelPlusClick = () => {
      if (this.state.count1 < 100) {
        if (this.state.count1 === this.state.count2 - 1) {
          this.setState({count2: this.state.count2 + 1})
          this.setState({count1: this.state.count1 +1})
        }  else {
          this.setState({count1: this.state.count1 + 1})
        }
      }
  }
  handleMinusClick = () => { 
    // Bonus1
    if (this.state.count1 > 0)                
    this.setState({count1:this.state.count1 - 1})
  }


  handelPlusClick2 = () => {
    if (this.state.count2 < 100) {
      this.setState({count2: this.state.count2 + 1})
    }
  }
    handleMinusClick2 = () => { 
      
      if (this.state.count2 > 0) {
        if (this.state.count1 === this.state.count2 - 1) {
          this.setState({count2: this.state.count2 - 1})
          this.setState({count1: this.state.count1 - 1})
        }  else {
          this.setState({count2: this.state.count2 - 1})
        }
      }
  }
  render(){
    return (
    
      <div className="App">
        <h1>counter</h1>
        <Counter count={this.state.count1} increment={this.handelPlusClick} substract={this.handleMinusClick}/> {/* il faut appeler la balise comme dans l'import, pour que on puisse afficher le contenu de dans le fichier - le contenue que tu a stoqué dans Counter.js */}
        <Counter count={this.state.count2} increment={this.handelPlusClick2} substract={this.handleMinusClick2}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
     
    );
  }
}
export default App;
