import React from 'react'
import { BsFillPencilFill, BsReverseLayoutTextWindowReverse } from 'react-icons/bs';
import { BiDroplet } from 'react-icons/bi';
import "./services.css"
const Services = () => {
    return (
        <section className="services">
            <div className="services-container">
                <div className="services-row">
                    <div className="card">
                        <div style={{backgroundColor: '#e81500'}} className="icon">
                            <BsFillPencilFill className='icons' />
                        </div>
                        <h3 className='services-h3'>Illustration</h3>
                        <p>I provide custom illustration services for contract clients</p>
                    </div>

                    <div className="card">
                        <div style={{ backgroundColor: '#f4a100' }} className="icon">
                            <BsReverseLayoutTextWindowReverse className='icons' />
                        </div>
                        <h3 className='services-h3'>UI Design</h3>
                        <p>User experience and interface designs is one of my specialties</p>
                    </div>

                    <div className="card">
                        <div style={{ backgroundColor: '#0061f2' }} className="icon">
                            <BiDroplet className='icons' />
                        </div>
                        <h3 className='services-h3'>Graphic Design</h3>
                        <p>Photo restoration, post processing, and other photo services</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;