import './App.css';
import ContentTest from './components/ContentTest/ContentTest.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContentTest name="Box" />
    </div>
  );
}

export default App;
