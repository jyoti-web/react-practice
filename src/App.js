import React, { Component } from 'react';
import './App.css';
import Example from './Example/example';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Jyoti', age: 20},
      {id: '2', name: 'Chinki', age: 23},
      {id: '3', name: 'Navjot', age: 21}
    ],
    otherpersons: 'some other persons add  in this group',
    showPersons: false
  }
  // ===========================================
  // Change the name when click on button
  // ===========================================
  // switchNameHandlers = (newName) => {
  //   //console.log('Was Clicked');
  //   this.setState( {
  //     persons: [
  //       {name: newName, age: 21 },
  //       {name: 'Chinki Sharma', age: 24},
  //       {name: 'Navjot Bhangu', age: 22}
  //     ]
  //   })
  // }
  // add two way binding using input
  changeNameHandlers = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
    const person = {
      ...this.state.persons[personIndex]
    };
   // const person = Object.assign({}, this.state.persons[personIndex]);
   person.name = event.target.value;
   const persons = [...this.state.persons];
   persons[personIndex] = person;
   this.setState({persons: persons });
    // this.setState( {
    //   persons: [
    //     {name: "Jyoti", age: 20},
    //     {name: event.target.value, age: 24},
    //     {name: 'Navjot Bhangu', age: 22}
    //   ]
    // })
  }
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }
  toggleNameHandlers = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render(){
    // javascript inline styling css
    const buttonstyle = {
      backgroundColor: 'green',
      padding: '10px',
      margin: '10px',
      color: 'white',
      fontWeight: '600',
      border: '1px solid #eee',
      fontSize: '20px',
      boxShadow: '2px 3px #eee',
      // using radium
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'

      // }
    };
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Example
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.changeNameHandlers(event, person.id)}/>
          })}
          {/* <Example 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Example 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandlers.bind(this, 'Jot Gupta')}
            changed={this.changeNameHandlers} >My Hobbies: Designing</Example>
          <Example 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/> */}
      </div> 
      );
      buttonstyle.backgroundColor = 'red';
      // buttonstyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    // using classe wihtout conditions 
    // let classes = ['red', 'bold'].join(' ');
    // =======================
    // using array classes with conditionalExpression
    // ===================================
    const classes= [];
    if(this.state.persons.length <= 2){
      classes.push('red'); // classes = ['red'];
    }
    if(this.state.persons.length <= 1){
      classes.push('bold'); // classes = ['bold'];
    }
    return (
      //<StyleRoot>
      <div className="App">
        <h1>My React Practice App</h1>
        {/* using without  conditions<p className={classes}>This is really working!!!</p> */}
        <p className={classes.join(' ')}>This is really working!!!</p>
        <button style={buttonstyle} 
        onClick={ this.toggleNameHandlers}>Switch name</button>
        {persons}
      </div>
      //</StyleRoot>
      );

    }
}

export default App;
