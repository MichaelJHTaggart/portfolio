import './App.css';
import Header from './components/Navigation/Header'
import routes from './Routes'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1A76D3'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
