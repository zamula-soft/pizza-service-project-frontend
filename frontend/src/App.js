import './AppBlank.css';
import ListCafe from './components/cafe/ListCafe';
import ListPizza from './components/pizza/ListPizza';
import { Container } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/common/Header';
import FooterComponent from './components/common/Footer';
import CreateCafe from './components/cafe/CreateCafe';
import UpdateCafe from './components/cafe/UpdateCafe';
import { Search } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <Router>
          <HeaderComponent />
          <br/>
            <Container>
              <Switch>
                <Route path="/" exact component={ListCafe}></Route>
                <Route path="/cafe" component={ListCafe}></Route>
                <Route path="/cafe/search?name=:name" component={ListCafe}></Route>
                <Route path="/add-cafe/" component={CreateCafe}></Route>
                <Route path="/update-cafe/:id" component={UpdateCafe}></Route>
                <Route path="/pizza" component={ListPizza}></Route>
              </Switch>
            </Container>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;