import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import Component1 from './components/Header/component1';
import Component2 from './components/Header/component2';
import Count from './components/count/Count';
import Course_component from './components/course_component/Course_component';
// import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Nav/Home';
// import Profile from './components/Nav/Profile';
import Courses from './components/Nav/Courses';
import Contactus from './components/Nav/Contactus';
import Nav from './components/Nav/Nav';
import Search from './components/Project/Home/search/Search';
import Profilee from './components/Project/Home/Profile/Profilee';
import Home from './components/Project/Home/Home';
import Header from './components/Menu/Header';
import Items from './components/Menu/Items';
import Menucard from './components/Menu/Menucard';




function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Header/> */}
      {/* <Items/> */}
      <Menucard/>

      </div>
  );
}

export default App;
