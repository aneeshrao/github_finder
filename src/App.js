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
  const [user, setUser] = useState({});
  const [publicRepo, setPublicRepo] = useState([]);

  // useEffect(async() => {
  //     const response = await axios('https://api.github.com/users');
  //     console.log(response.data);
  //     //update the users state from empty to some data
  //     setUsersList(response.data);
  // }, [])
  
  //Fetching the public repos
  const getPublicRepo = async (user) => {
    const res = await axios.get(`https://api.github.com/users/${user}/repos?per_page=7&sort=asc`);
    setPublicRepo(res.data);
  }

  //fetching the user details
  const getUserDetail = async (login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`)
    console.log(res);
    setUser(res.data);
  }

  //searching the user
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
            <Route exact path="/" render = {
              props => (
                <div>
                  <Search searchName={searchName} clearUser={clearUser} showClear={usersList.length > 1 ? true : false} />
                  <Users users={usersList} />
                </div>
              )
            } />          
            <Route exact path="/user/:anything"  render = {
              props => (
              <div>
                <UserDetailsPage user={user} getUserDetail={getUserDetail} {...props} getRepo={getPublicRepo} repo={publicRepo}></UserDetailsPage>
              </div>
              )
            } />
            <Route exact path="/about" component={About} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
