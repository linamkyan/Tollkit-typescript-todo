import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Todo} from "./features/todo/Todo";
import TodoList from "./TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <TodoList />
        {/*<Counter />*/}
      </header>
    </div>
  );
}

export default App;
