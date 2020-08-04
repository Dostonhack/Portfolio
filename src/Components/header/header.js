import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../header/header.css'

import './img/D-Slasher.jpg'
export default class header extends Component {
    constructor(){
      super()
      this.state={
          scrolled:false
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
       
        console.log(logo)
      
        return (
            <header className={this.state.scrolled ? 'header1  scrolled  ': 'header1' }>
            <div className='inheader'>
                <logo/>
                <ul className='headright'>
                  <li>
                    <NavLink   to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                    <NavLink  to='/skills'>Skills</NavLink>
                  </li>
                  <li>
                    <NavLink   to='/projects'>Project</NavLink>
                  </li>
                  <li>
                    <NavLink   to='/contact'>Contact</NavLink>
                  </li>
                </ul>




              
           </div>
            
            
          </header>
        ) 
    }
}
