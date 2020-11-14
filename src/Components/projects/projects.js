import React, { Component } from 'react'
import './projects.css'
import probg2 from './img/pro-bg-2.png'
import probg3 from './img/pro-bg-3.png'
import probg5 from './img/pro-bg-5.jpg'
import probg4 from './img/pro-bg-4.png'




export default class projects extends Component {
    render() {
        return (
            <div className='projects'>
                <div className ='projects-one'>
                    <div className='projects-one-in'>
                        <span className='projects-name'>Doston's Portfolio.</span>
                    </div>
                    {/* ////////////////// */}
                    <div projects='projects-two'>
                        <span className='pro-two-in'>My Portfolio</span><br/>
                    </div>
                    {/* /////////////////// */}

                    <div className='pro-three'>
                        <div className='projects-cards'>
                            <img src={probg2} className='pro-img'/>
                            <a href="https://magazineuzb.netlify.app/" className='pro-btn'>VIEW PROJECT</a>
                            
                        </div>
                        
                        <div className='projects-cards'>
                            <img src={probg3} className='pro-img'/>
                            <a href='https://habruzb.netlify.app/' className='pro-btn'>VIEW PROJECT</a>
                        </div>
                        
                        <div className='projects-cards'>
                            <img src={probg5} className='pro-img'/>
                            <a href='https://siblimeuz.netlify.app/' className='pro-btn'>VIEW PROJECT</a>
                        </div>
                        
                        <div className='projects-cards'>
                            <img src={probg4} className='pro-img'/>
                            <a href='https://vigilant-lewin-114902.netlify.app/' className='pro-btn'>VIEW PROJECT</a>
                        </div>
                        
                    </div>
                    

                </div>
                <div className='footerpage'>
                        <p>Eliboyev Doston  Web Full Stack Develpor  </p>
                </div>
            </div>
                
                
        )

    }
}
