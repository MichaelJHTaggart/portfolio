import './App.css';
import Header from './components/Navigation/Header'
import routes from './Routes'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
