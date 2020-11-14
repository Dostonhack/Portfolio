import React, { Component } from 'react'
import './skills.css'


export default class skills extends Component {
    render() {
        
        return (
            <div className='skillspage'>
                
                <div className='homeSkill'>
                    <div className='homeSkillin'>
                        <span>Dig a little deeper.</span>
                        <a href="https://drive.google.com/file/d/1UtcO3vrplqySA-GPZ7XsGoF6DUSUzJcl/view?usp=sharing" download className='skillLink' target="_blank" download>DOWNLOAD RESUME </a>
                    </div>
                </div>

                <p className='myskills'>Technologies</p>
                <div className='sklis-ver'>
                
                    <div className='sklis1'>
                        <h2>Frond End</h2>
                        <ul>
                            <li >HTML</li>
                            <li>CSS</li>
                            <li>Boostrap</li>
                            <li>JavaScript</li>
                            <li> jQuery(limited)</li>
                            <li>React JS (limited)</li>
                            <li>Responsive Layout</li>
                        </ul>
                    </div>
                    <div className='sklis2'>
                        <h2>Back End</h2>
                            <ul>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>MySql</li>
                                <li>Npm </li>
                                <li>Version Control(Git)</li>
                                <li>WordPress (limited) </li>
                            </ul>
                    </div>                             
                </div>
                <div className='footerpageskills'>
                        <p>Eliboyev Doston  Web 
                            Full Stack Develpor  </p>
                </div>
            </div>
        )
    }
}
