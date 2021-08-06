import './App.css';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import WordsoftheDay from '../WordoftheDay/WordoftheDay';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <Home/> */}
         <WordsoftheDay/>
      </header>
    </div>
  )
}

export default App;
