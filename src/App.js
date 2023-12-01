

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SignUp from './SignUp';
import Login from './Login';
import ChangePassword from './ChangePassword';
import Test from './Test';
import CheckBox from './CheckBox';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            
            <Route exact path="/"> 
              <Home />
            </Route>

            <Route exact path="/create"> 
              <Create />
            </Route>

            <Route exact path="/sign-up">
              <SignUp/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <Route exact path="/blogs/:id"> 
              <BlogDetails />
            </Route>

            <Route exact path="/change-password">
              <ChangePassword/>
            </Route>

            <Route exact path="/test">
              <Test/>
            </Route>

            <Route exact path="/test1">
              <CheckBox/>
            </Route>

            <Route path='*'>
              <NotFound/>
            </Route>

          </Switch>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
