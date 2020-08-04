import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter , Route,Switch} from 'react-router-dom'


import home from './Components/home/home'
import about from './Components/about/about'
import skills from './Components/skills/skills'
import projects from './Components/projects/projects'
import contact from './Components/contact/contact'

import Header from './Components/header/header'


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={home}/>
                <Route exact path='/about' component={about}/>
                <Route exact path='/skills' component={skills}/>
                <Route exact path='/projects' component={projects}/>
                <Route exact path='/contact' component={contact}/>
             
                {/* <Route component={NoFount}/> */}

            </Switch>
            
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
