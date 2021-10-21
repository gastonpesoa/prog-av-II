import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Router from './component/Router';

function App() {
  return (
    <div className="container">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
