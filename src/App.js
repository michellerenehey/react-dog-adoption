import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import background from './background.png';

import Dogs from './views/Dogs/Dogs';
import Dog from './views/Dog/Dog';
import DogEdit from './views/Dog/DogEdit';
import Header from './views/Header/Header';
import DogAdmin from './views/Admin/DogAdmin';

function App() {
  return (
    <div className="app-style" style={{ backgroundImage: `url(${background})` }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dogs} />
          <Route exact path="/dogs/:id" component={Dog} />
          <Route exact path="/dogs/:id/edit" component={DogEdit} />
          <Route exact path="/admin" component={DogAdmin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
