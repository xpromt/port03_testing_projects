import { Routes, Route } from "react-router-dom";

import './App.css';
import Layout from './components/Layout/Layout';
import AnimatedForm from './components/AnimatedForm/AnimatedForm';
import Click from './components/Click/Click';
import RComponent from './components/RComponent/RComponent';
import WrongPage from './components/WrongPage/WrongPage';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<AnimatedForm />} />
          <Route path="AnimatedForm" element = {<AnimatedForm />} />
          <Route path="click" element = {<Click />} />
          <Route path="rcomponent" element = {<RComponent />} />
          <Route path="*" element = {<WrongPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
