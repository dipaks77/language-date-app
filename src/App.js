import './App.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PublicRoutes from './routes/PublicRoutes'
import LanguageSelectionComponent from './components/LanguageSelectionComponent';

const App = () => {

  const items = ["en-US", "en-GB", "pt-BR"]

  return (
    <BrowserRouter>
      <Switch>
        <Redirect path='/' to='/date' exact />
        <PublicRoutes path='/date' component={LanguageSelectionComponent} items={items} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
