import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic52 from '../assets/images/01.jpg'
import pic53 from '../assets/images/02.jpg'


import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic03.png'
import pic03 from '../assets/images/pic04.png'
import pic04 from '../assets/images/pic05.png'
import pic05 from '../assets/images/pic06.png'
import pic06 from '../assets/images/pic07.png'
import pic07 from '../assets/images/pic08.png'
import pic08 from '../assets/images/pic09.png'
import pic09 from '../assets/images/pic10.png'
import pic10 from '../assets/images/pic11.png'
import pic11 from '../assets/images/pic00.png'
import pic13 from '../assets/images/pic12.png'
import pic14 from '../assets/images/pic13.png'
import pic15 from '../assets/images/pic14.png'
import pic16 from '../assets/images/pic15.png'
import pic17 from '../assets/images/pic16.png'
import pic18 from '../assets/images/pic17.png'
import pic19 from '../assets/images/pic18.png'
import pic20 from '../assets/images/pic19.png'
import pic21 from '../assets/images/pic20.png'
import pic22 from '../assets/images/pic21.png'
import pic23 from '../assets/images/pic22.png'
import pic24 from '../assets/images/pic23.png'
import pic25 from '../assets/images/pic24.png'
import pic27 from '../assets/images/pic26.png'
import pic28 from '../assets/images/pic27.png'
import pic29 from '../assets/images/pic28.png'
import pic30 from '../assets/images/pic29.png'
import pic31 from '../assets/images/pic30.png'
import pic32 from '../assets/images/pic31.png'
import pic33 from '../assets/images/pic32.png'
import pic34 from '../assets/images/pic33.png'
import pic35 from '../assets/images/pic34.png'
import pic36 from '../assets/images/pic35.png'
import pic37 from '../assets/images/pic36.png'
import pic38 from '../assets/images/pic37.png'
import pic39 from '../assets/images/pic41.png'
import pic41 from '../assets/images/pic44.png'


class Homepage extends React.Component {
    render() {
        const siteTitle = "Umair Zaki";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1 special a d">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>My Achievements</h2>
                            </header>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic52}   alt="" /></span>
                            <h3>Microsoft Technology Associate</h3>
                            <h4>Introduction to Programming using Python</h4>
                            <p>I had passed the Microsoft Technology Associate Certificate (MTA-98-381) Introduction to programming using Python with 89% marks on August 23, 2019.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic53}   alt="" /></span>
                            <h3>Coursera Certificate</h3>
                            <h4>AI For Everyone deeplearning.ai</h4>
                            <p>I had passed the Corsera Certificate (deeplearning.ai) AI For Everyone with 93% marks on July 12, 2019. Verify at coursera.org/verify/YHQEDEGRL7QH Coursera has confirmed the identity of this individual and their participation in the course.</p>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2 d">
                    <div className="grid-wrapper">
                    
                        <div className="col-12 ">
                        <header className="major z">
                                <h2>My Skills</h2>
                            </header>
                            <ul className="major-icons d">
                            <li>
              <span className="icon style1 ">
                <img src={pic08}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Python</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic09}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Numpy</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic10}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Pandas</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic07}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Matplotlib</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic06}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Neural Network</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic05}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Deep Learning</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic02}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Keras</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic01}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Scikit Learn</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic03}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Tensorflow</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic04}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Artificial Intelligence</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic11}  height="120px" width="auto"  alt="" />
              </span>
                <h5>HTML5</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic13}  height="120px" width="auto"  alt="" />
              </span>
                <h5>CSS</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic14}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Saas</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic15}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Java Script</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic17}  height="120px" width="auto"  alt="" />
              </span>
                <h5>NodeJs</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic16}  height="120px" width="auto"  alt="" />
              </span>
                <h5>React</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic18}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Gatsby</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic19}  height="120px" width="auto"  alt="" />
              </span>
                <h5>NPM</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic20}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Flask</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic21}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Terraform</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic22}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Windows</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic23}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Ubuntu</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic24}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Git</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic25}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Docker</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic27}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Kubernetes</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic28}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Jupyter Notebook</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic29}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Visual Studio</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic30}  height="120px" width="auto"  alt="" />
              </span>
                <h5>GraphQL</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic31}  height="120px" width="auto"  alt="" />
              </span>
                <h5>MongoDb</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic32} height="120px" width="auto"  alt="" />
              </span>
                <h5>Postman</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic38}  height="120px" width="auto"  alt="" />
              </span>
                <h5>MySQL</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic33}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Rust</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic34}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Lean Startup</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic35}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Agile</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic36}  height="120px" width="auto"  alt="" />
              </span>
                <h5>DevOps</h5>
              </li>
              <li>
              <span className="icon style1 d">
                <img src={pic37}  height="120px" width="auto"  alt="" />
              </span>
                <h5>Desing Thinking</h5>
              </li>

                            </ul>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special a">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>My Work</h2>
                            </header>
                        </div>

                        <div className="col-6 y">
                            <h3>Artificial Intelligence Deep Learning Projects</h3>
                            <p>I trained the model with all following aspects:</p>
                            <ul>
                <li>Baseline Neural Network (Import Libraries, Load Data, Prepare partitions(train, test and validation data), label encoding and One hot encoding if needed, Make Model, Make Compiler, Train Model, Evaluate Model and Save Model)</li>
                <li>Baseline Model With Data Standarization</li>
                <li>Evaluate a Smaller Network (Small Dense Layers)</li>
                <li>Evaluate a very Smaller Network that Underfit</li>
                <li>Evaluate a larger Network (Large Dense Layers)</li>
                <li>Evaluate a very Larger Network that Overfit</li>
                <li>Tuning the Model (Change Optimizer and number of Epochs)</li>
                <li>Visualization of Epochs(Accuracy and Loss) through Matplotlib</li>
                <li>Use Dropout and Weight Regularization for best results</li>
              </ul>
                    
                    <h4>1- Binary Classification Sonar Dataset</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Sonar-Dataset" target = "_blank"> Click Here</a></p>
                    <h4>2- Multiclass Classification Iris Dataset</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Iris-Dataset" target = "_blank"> Click Here</a></p>
                    <h4>3- Regression Housing Dataset</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Deep-Learning-Housing-Dataset" target = "_blank"> Click Here</a></p>
                    <h4>4- Save & Load Keras Model</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Save-Load-Keras-Model" target = "_blank"> Click Here</a></p>
                    <h4>5- Face Detection with Keras MTCNN</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Face-Detection-with-Keras-MTCNN" target = "_blank"> Click Here</a></p>
                        </div>
                        <div className="col-6 y">
                        <h3>Gatsby React Project</h3>
                    <p>I design these websites with Gatsby, React, HTML5, Sass(CSS) and Java Script.
                    Some of the following websites are made by me</p>
                    <h4>1- Umair-Zaki</h4>
                    <p>to see my website <a href="https://umair-zaki.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>2- Umair Zaki Portfolio</h4>
                    <p>to see my website <a href="https://umairzakiportfolio.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>3- Umair Zaki CV</h4>
                    <p>to see my website <a href="https://umairzakicv.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>4- Umair Zaki Resume</h4>
                    <p>to see my website <a href="https://umairzakiresume.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>5- Umair Zaki</h4>
                    <p>to see my website <a href="https://umairzaki.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>6- PIAIC New</h4>
                    <p>to see my website <a href="https://piaic-new.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h4>7- PIAIC For Learning</h4>
                    <p>to see my website <a href="https://peaceful-goldwasser-23267b.netlify.com/" target = "_blank"> Click Here</a></p>
                    <h3>Python Flask Project</h3>
                    <h4>1- GraphQl-Mongodb-API</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/GraphQl-Mongodb-API" target = "_blank"> Click Here</a></p>
                    <h4>2- PostgreSQL-Todo-APP-Unit-Testing</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/PostgreSQL-Todo-APP-Unit-Testing" target = "_blank"> Click Here</a></p>
                    <h4>3- Todo-APP-Unit-Testing-Mongodb</h4>
                    <p>to see my code <a href="https://github.com/UmairZaki/Todo-APP-Unit-Testing-Mongodb" target = "_blank"> Click Here</a></p>   
                        
                        </div>
                
                        
                            <div className="col-6 y b ">
                        <ul >
                        <li><h3>Upwork</h3>
                  <p>to see my Upwork Profile <a href="https://www.upwork.com/freelancers/~0141d6a9695a2de52a" target = "_blank"> Click Here</a></p></li>
                  <li><span >
                <img src={pic39} height="100px"  width="auto"  alt="" />
              </span></li>
              </ul>
              </div>
              
                        <div className="col-6 y b ">
                        <ul >
                        <li ><h3>Fiverr</h3>
                  <p>to see my Fiverr Profile <a href="https://www.fiverr.com/users/umairjamstackai/seller_dashboard" target = "_blank"> Click Here</a></p></li>
            
                  <li><span >
                <img src={pic41} height="100px"  width="auto"  alt="" />
              </span></li>
              </ul>
              </div>
              </div>
                    
                </section>



                <section id="four" className="main style2 special d">
                  <div className="container">
                        <header className="major">
                            <h2>Profile</h2>
                        </header>
                        <p>Father: Muhammad Zaki</p>
                        <p>CNIC: 42301-6362390-9</p>
                        <p>Date of Birth: 16-July-1989</p>
                        <p>Marital Status: Single</p>
                        <p>Country: Pakistan</p>
                    </div>
                    <div className="container">
                        <header className="major">
                            <h2>Education</h2>
                        </header>

                        <p>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</p>
                        <p>Intermediate from Karachi Board (Commerce Grade "C" 2010)</p>
                        <p>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</p>  
                        
                    </div>
                    <div className="container">
                    
                                        <h1 className="icon fa-home"><span className="label">Address</span></h1>
                                        <p>Plot # 1/29, 4th Floor, Flat # A7,
                                              Block 5b, Nazimabad,<br />
                                              Karachi, Pakistan.</p>
                                    
                                        <h1 className="icon fa-mobile"><span className="label">Phone</span></h1>
                                        <p>+92 313-287-3668</p>
                                    
                                        <h2 className="icon fa-envelope-o"><span className="label">Email</span></h2>
                                        <p>umairzakicnbc@gmail.com</p>
                                
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;