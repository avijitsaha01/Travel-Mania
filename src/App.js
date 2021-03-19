import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Login from './component/Login/Login';


function App() {

  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
