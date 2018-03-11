import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import './index.css';
import Home from './components/routes/home/Home.component';
import About from './components/routes/about/About';
import Contact from './Contact';
import Project from './components/routes/project/project.component.js'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/project' component ={Project}/>
        </div>
    </BrowserRouter>,


    document.getElementById('root'));
registerServiceWorker();
