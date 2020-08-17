import React, { Component } from 'react'

import './skills.css'

export default class skills extends Component {
    render() {
        return (
            <div className='skillspage'>
                {/* <div className='bgsk1'></div> */}
                {/* <div className='bgsk2'></div> */}
                <div className='homeSkill'>

                </div>
                <p className='myskills'>Technologies</p>

                
                <div className='sklis'>
                
                    <div className='sklis1'>
                        <h2>Frond End</h2>
                        <ul>
                            <li >HTML</li>
                            <li>CSS</li>
                            <li>Boostrap</li>
                            <li>JavaScript</li>
                            <li> jQuery(limited)</li>
                            <li>React JS</li>
                            <li>Responsive Layout</li>
                            <li>Less</li>
                            <li>Sass</li>

                        
                        </ul>


                    </div>
                
                    <div className='sklis2'>
                    <h2>Back End</h2>
                    <div>
                        <ul>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>MySql</li>
                            <li>Npm </li>
                            <li>Version Control(Git)</li>
                        </ul>
                    
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
