import { Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

export default (
 <Switch>
  <Route exact path='/' component={Home} />
 </Switch>
)