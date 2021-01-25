import logo from './logo.svg';
import './App.css';

function App() {

var defaultWorker = { 
  name: {
    first: "Bob",
    last: "Smith"
  },
  officeNumber: "462"}

function logActivity(p=defaultWorker){
  console.log("Example 1: Default Parameters");
  console.log(`${p.name.first}'s office: ${p.officeNumber}`)
}
logActivity()
  return (
    <div className="App">
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



                      

export default App;
