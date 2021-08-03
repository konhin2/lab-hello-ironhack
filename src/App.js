import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Elements from './components/Body'

function App() {
  return (
    <>
      <div className="section1">
        <Header />
      </div>
      <div className="section2">
        <Elements />
      </div>
    </>
    
  );
}

export default App;
