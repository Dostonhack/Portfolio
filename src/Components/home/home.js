import React, { Component } from 'react'
import './home.css'
import Typical from 'react-typical'
import { FaTelegram ,FaInstagram, FaGithub} from 'react-icons/fa';

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
                        
                    
                    'I am  Doston Eliboyev', 3000,
                    'I am Web Developer ',3000,


                
                ]}
                    loop={Infinity}
                    wrapper="p"
                    />
                    </div> 
                    <div className='home-soial'>
                        <a href='https://github.com/Dostonhack' className='home-soial-link'><FaGithub/></a>
                        <a  href='https://www.instagram.com/doston_eliboyev_samarqand/?utm_source=instagram&utm_medium=email&utm_campaign=unseen_direct_message_email&click_source=user_cta' className='home-soial-link'><FaInstagram /></a>
                        <a  href='https://t.me/DostonEliboyev' className='home-soial-link'><FaTelegram /></a>
                    </div>
                    
                </div>
                
            
            
        )
    }
}
