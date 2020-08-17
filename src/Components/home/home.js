import React, { Component } from 'react'
import './home.css'
import Typical from 'react-typical'


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();




export default class home extends Component {
    render() {
        
        return (
            
                <div  className='homepage' >
                <div className='bg1' data-aos="zoom-in" data-aos-duration="2000"></div>
              
                <div className='bg2' data-aos="zoom-in" data-aos-duration="2000">
                </div>
                <p className='phello' data-aos="zoom-in" data-aos-duration="2000">HELLO</p>
                <div className='typewrite' data-aos="zoom-in" data-aos-duration="2000">
                
                <Typical
                    steps={[
                        
                   
                    'I am  Doston Eliboyev', 1000,
                    'I am Web Developer ',1000,

                
                ]}
                    loop={Infinity}
                    wrapper="p"
                    />
                    </div> 
                    
                </div>
                
            
            
        )
    }
}
