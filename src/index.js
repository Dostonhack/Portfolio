import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter , Route,Switch} from 'react-router-dom'


import home from './Components/home/home'
import about from './Components/about/about'
import skills from './Components/skills/skills'
import projects from './Components/projects/projects'

import Header from './Components/header/header'
import Footer from './Components/footer/footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={home}/>
                <Route exact path='/projects' component={projects}/>
                <Route exact path='/about' component={about}/>
                <Route exact path='/skills' component={skills}/>
                {/* <Route component={NoFount}/> */}

            </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
