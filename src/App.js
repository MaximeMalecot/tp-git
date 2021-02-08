import logo from './logo.svg';
import './App.css';
import CustomButton from './Components/Button';
import Login from './Components/Login';
import Home from './Components/Home';
import Text from './Components/Text';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header/>
        <CustomButton value={ "Le J" } action={()=> { alert("C le S") } }/>
        <Home/>
        <Login/>
        <Text/>
      </header>
    </div>
  );
}

export default App;
