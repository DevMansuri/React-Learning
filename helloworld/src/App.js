import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name = "nadim">
        <p>this is a children</p>
      </Greet>
      <Greet name = "wasim"></Greet>
      <Greet name = "salim"></Greet>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
