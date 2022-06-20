
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}  from 'react-router-dom';
import { Component } from 'react';
import Home from './component/Home';
import Contact from './component/contact';
import About from './component/about';
import { Provider } from 'react-redux/es/exports';
import store from './component/store/index';
class App extends Component{

  render() {
    return(
      <Provider store={store}>
      <Router>
        <div>
          <ul className='menu'>
            <li><h3>Dell Technologies    </h3></li>
            <li><input type="text" placeholder="Search.." className='sea'></input></li>
            <li>
             <Link to="/" className='me'>Home</Link>
            </li>
            <li>
             <Link to="/about" className='me'>About Us</Link>
            </li>
            <li>
             <Link to="/contact" className='me'>Contact Us</Link> 
            </li>
          </ul>
         
          <Routes>
            <Route exact path='/' element = {<Home />}/>
            <Route exact path='/about' element = {<About />}/>
            <Route exact path='/contact' element = {<Contact />}/>
          </Routes>
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
