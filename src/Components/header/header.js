import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import './header.css'

import {FaTimesCircle} from 'react-icons/fa'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default class header extends Component {
    constructor(){
      super()
      this.state={
          scrolled:false,
          showMenu:false,
      }
      this.showMenu = this.showMenu.bind(this);

      
    }
    showMenu(event) {
      event.preventDefault();
      console.log(event)
      this.setState({
        showMenu: true,
      });

    }
    CloseMenu = ()=>{
      this.setState({
        showMenu:false
      })
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
            <div className='inheader' data-aos="zoom-in" data-aos-duration="2000">
                <div >
                  <NavLink to='/' className='logo'></NavLink>

                </div>
                <ul className='headright'>
                  <li>
                  <NavLink   to='/' className='navlink' 
                      >Home</NavLink>
                  </li>
                  <li>
                    <NavLink   to='/projects' className='navlink' >Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' className='navlink' >About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/skills' className='navlink' >Skills</NavLink>
                  </li>
                </ul>
                <div className='headdrop'>
                    <div className='dropdow'>
                      <button onClick={this.showMenu} className='dropbtn'>Menu</button>
                      {
                        this.state.showMenu
                        ?(
                        <div id='myDropdown' className='dropdown-cantent'>

                            <a onClick={this.CloseMenu} className='dropclose'> <FaTimesCircle/></a> 
                            <NavLink to='/' className='navlink'>Home</NavLink>
                            <NavLink to='/projects' className='navlink' >Portfolio</NavLink>
                            <NavLink to='/about' className='navlink' >About</NavLink>
                            <NavLink to='/skills' className='navlink' >Skills</NavLink>
                        
                          
                          </div>
                        )
                        :(
                          null
                        )
                      }
                      
                    </div>
                    


                </div>
            </div>



              
          
            
            
          
            </header>
        ) 
    }
}
