import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import DogEdit from './views/Dog/DogEdit';
import Header from './views/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/dogs/:id/edit" component={DogEdit} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
