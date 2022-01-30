import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About';
import axios from 'axios';
import { useState } from 'react';
import Users from './components/Users';
import Search from './components/Search';
import UserDetailsPage from './components/UserDetailsPage';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [showClear, setShowClear] = useState(false);

  // useEffect(async() => {
  //     const response = await axios('https://api.github.com/users');
  //     console.log(response.data);
  //     //update the users state from empty to some data
  //     setUsersList(response.data);
  // }, [])

  const searchName = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    setUsersList(res.data.items);
    setShowClear(!showClear);
  }

  const clearUser = () => {
    setUsersList([]);
  }

  return (
    <Router>
      <Navbar />
      <div className="container">
          <Switch>
            <Route exact path="/home" render = {
              props => (
                <div>
                <Search searchName={searchName} clearUser={clearUser} showClear={usersList.length > 1 ? true : false} />
                <Users users={usersList} />
                </div>
              )
            } />           
            <Route exact path="/about" element={<About />} />
            <Route exact path="/user/:anything" element={<UserDetailsPage />} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
