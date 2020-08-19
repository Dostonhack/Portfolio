import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import './header.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
 

// import logo from './img/logo3.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


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
      

      const options = [
        <Link   to='/' className='navlink'>Home</Link>,
        <Link to='/project' className='navlink' >Project</Link>,
        <Link to='/about' className='navlink' >About</Link>
        
      ];
      const defaultOption = options[0];
        
      
        return (
            <header className={this.state.scrolled ? 'header1  scrolled  ': 'header1' }>
            <div className='inheader' data-aos="zoom-in" data-aos-duration="2000">
                <div >
                  <NavLink to='/' className='logo'>  <span>DE</span></NavLink>
                  {/* <NavLink to='/'> <img src={logo}/></NavLink> */}
                </div>
                <ul className='headright'>
                  <li>
                  <NavLink   to='/' className='navlink' 
                      >Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/project' className='navlink' >Project</NavLink>
                  </li>
                  <li>
                    <NavLink to='/about' className='navlink' >About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/skills' className='navlink' >Skills</NavLink>
                  </li>
                  
                  <li>
                    <NavLink   to='/contact' className='navlink' >Contact</NavLink>
                  </li>
                </ul>
                <div className='headdrop'>
                  {/* <select>
                    <option  selected value="grapefruit">Home</option>
                    <option value="lime">Project</option>
                    <option  value="coconut">About</option>
                    <option value="mango">Skills</option>
                    <option value="mango">Contact</option>
                    
                  </select> */}
                  <Dropdown options={options}  className='ClassNameDrop' onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

                </div>




              
           </div>
            
            
          </header>
        ) 
    }
}
