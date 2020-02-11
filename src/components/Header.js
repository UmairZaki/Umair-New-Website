import React from 'react'
import pic51 from '../assets/images/pic01.jpg'


class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="x"><img src={pic51}  height="200px" width="auto"  alt="" /></span>
                    <h1>Umair Zaki</h1>
                    <h4>Web Developer UI - JAMStack<br />
Machine Learning AI Services</h4>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
