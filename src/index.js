import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Upload from './pages/Upload'

import './App.css'



const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Switch>
         <Route path='/upload' component={Upload}/>
        <Route path='/' component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
