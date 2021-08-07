import './App.css';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import WordsoftheDay from '../WordsoftheDay/WordoftheDay';
import FormView from '../FormView/FormView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Home/>
      </header>
    </div>
  )
}

export default App;
