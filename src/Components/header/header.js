import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'


import logo from './img/d-logo-300x300.png';

export default class header extends Component {
    constructor(){
      super()
      this.state={
          scrolled:false,
          
      }
    }
    

    componentDidMount(){
      window.addEventListener('scroll', ()=>{
        const istop =window.scrollY< 100;
          if(istop!==true){
            this.setState({scrolled:true})
          }else{
            this.setState({scrolled:false})
          }
      });
    }

    componentWillUnmount(){
      window.removeEventListener('scroll')
    }

    render() {
      

        
      
        return (
            <header className={this.state.scrolled ? 'header1  scrolled  ': 'header1' }>
            <div className='inheader'>
                <div className='logo'>
                  <NavLink to='/'> <img src={logo}/></NavLink>
                </div>
                <ul className='headright'>
                  <li>
                  <NavLink   to='/' className='navlink' 
                      >Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' className='navlink' >About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/skills' className='navlink' >Skills</NavLink>
                  </li>
                  <li>
                    <NavLink   to='/projects' className='navlink' >Project</NavLink>
                  </li>
                  <li>
                    <NavLink   to='/contact' className='navlink' >Contact</NavLink>
                  </li>
                </ul>




              
           </div>
            
            
          </header>
        ) 
    }
}
