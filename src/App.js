import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home/Home';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      
    </div>
  );
}

export default App;
