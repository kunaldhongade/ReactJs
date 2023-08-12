import './App.css';

function App() {
  let name = 'react app'
  let classNameApp = "App-header"
  console.log("App")
  return (
    <div className="App">
      <div className={classNameApp}>
        {name}
        <Demo />
      </div>
    </div>
  );
}

function Demo() {
  console.log("Demo")
  return (
    <div className="App">
      <div className="App-header">
        THis is Demo
      </div>
    </div>
  )
}

export default App;
