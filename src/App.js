
import './App.css';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Home from './components/Homepage';
import NavigationBar from './components/NavigationBar/navigationBar';
import Display from './components/Pics';

function App() {
  return (
   <div>
    <NavigationBar/>
    <Home/>
    <Categories/>
    <Display/>
    <Footer/>
 
   </div>
  );
}

export default App;
