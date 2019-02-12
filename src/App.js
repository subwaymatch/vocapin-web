import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.scss';
import NoteList from './NoteList/NoteList';
import Note from './Note/Note';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h2>Page Title</h2>
          <nav>
           <NavLink to ='/notelist'>List</NavLink>
          </nav>

          <div>
            <Route path='/notelist' component={NoteList}/>
            <Route path='/note/:id' component={Note}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;