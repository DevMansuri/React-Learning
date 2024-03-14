import './App.css';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import Greet from './components/Greet';
import Message from './components/Message';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name = "nadim">
        <p>this is a children</p>
      </Greet>
      <Greet name = "wasim"></Greet>
      <Greet name = "salim"></Greet>
      <Welcome name = "addu"></Welcome>
      <Message></Message>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
    </div>
  );
}

export default App;
