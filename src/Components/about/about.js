import React, { Component } from 'react'
import {FaFacebookF,FaInstagram,FaMapMarkerAlt, FaTelegramPlane,FaMobileAlt,FaEnvelopeOpen} from 'react-icons/fa';

import Footer from '../footer/footer'

import {Link} from 'react-router-dom'
import './about.css'
export default class about extends Component {
    render() {
        return (
            <div className='AboutPage'>
                <div className='about-one'>
                    <div className='about-one-in'>
                        <p className='about-text'>My Passions & Personality.</p>
                    </div>
                </div>
                
                <div className='about-two'>
                    <div className='two-img'></div>
                    <div className='abo-two-text'>
                        <h1>A few fun facts about myself</h1>
                        <p>
                            I am Doston Eliboyev, a 26-year-old Full Stack Develpor( Javascript) from Samarkand, Uzbekistan,
                            I have been interested in IT since I was young,
                            I sometimes play video games,
                            I find AliTech  training course and I stady for 6 months in AliTech Education (Front-End),
                            When I started in third course, I formed a team and hit Back End (Python) independently(September-October 2019)
                            We couldn’t get the job done with the team
                            In November, AliTech opened a back end course and I bought it,
                            In March we completed the Back end course with our team (March 2019),
                            I did a 3-month internship at AliTech and I also worked as a salesman in the sales department,
                            I and my friend Qodir were selling the My Center project,
                            We sold 30 of the 50 training centers and 5 centers said they would buy later,
                            I'm at home right now.


                        </p>
                    </div>

                </div>

                <div className='about-three'>
                    


                        <div className='cantact'>
                            <div className='cantact-in'>
                            <h1 style={{color:'white', padding:'20px  0'}}>Cantact Information</h1>
                            <div className='cantact-info'>
                                <p> <FaMapMarkerAlt />  A.B.Rosiy street Samarkand ctiy</p>
                                <p> <FaMobileAlt /> +998(99)573-06-52</p>
                                <p> <FaEnvelopeOpen />  doston1721@gmail.com</p>

                            </div>
                            <div className='cantact-soial'>
                                <a href='https://t.me/DostonEliboyev' className='home-soial-link'><FaTelegramPlane/></a>
                                <a href='https://www.instagram.com/doston_eliboyev_samarqand/?utm_source=instagram&utm_medium=email&utm_campaign=unseen_direct_message_email&click_source=user_cta'className='home-soial-link'><FaInstagram /></a>
                                <a href='https://www.facebook.com/doston.eliboyev.75'  className='home-soial-link'><FaFacebookF/></a>
                            </div>
                            </div>
                        </div>

                        <div className='about-img'></div>
            </div>
            <Footer className='aboutFooter'/>
                

            </div> 
        )
    }
}
