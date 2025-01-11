import React, { Fragment } from"react";
import Headr from "./header";
import "./home.css";
import sorax from"./../../assest/genie.png";
import soraxi from "./../../assest/waf.jpg";
import Data from"../../Data";
import Carousel from 'react-bootstrap/Carousel';
import item from "./../../assest/item.jpeg"
import item1 from "./../../assest/item1.jpg"




export default function Home(){

    const blogitem = Data.map((item)=>{
        return(

            <div className="col-md-4">
                <div className="box">
                <img src={item.img}/>
                <h5>{item.title}</h5>
                </div>
                <button><a href="#" id="btno">order now</a></button>
              
            </div>

        ) })

    return (
    <Fragment>
        <Headr/>
        
        <section className="numbres" >
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1200+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>117+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>823+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>993+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
                </div> 
        </section>
        
        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={sorax} title="sora"/>
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on building real projects from the best methods.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#">learn more</a></button>
                    </div>
                </div>
            </div>

        </section>
        <section className="ingredients">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything with the best possible methods.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. 
                            Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button> <a href="#">learn more</a></button>
                    </div>
                    <div className="col-md-6">
                        <img src={soraxi} alt="ingredients"/>
                    </div>
                </div>
            </div>
        </section>
        <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>As much as whats wrong with you,we make your dream house for you.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus<br></br> a odio
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#">watch Our story</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="blogs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12  col-lg12">
                        <h2>Explore Our services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}

                </div>
            </div>
        </section >
        <section className="sliderx">
            <div className="comtainer">
                <div className="col-lg-12 col-md-12">
                    <h2>testimonials</h2>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">

                    <Carousel>
                        <Carousel.Item>
                            <img src={item}/>
                            <Carousel.Caption>
                            <p>presedent</p>
                            <span>presedent</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={item1}/>

                            <Carousel.Caption>
                            <p>manager</p>
                            <span>manager</span>
                            </Carousel.Caption>
                        </Carousel.Item>
                    
                    </Carousel>

                    </div>
                </div>
            </div>

        </section>

    </Fragment>
    );
}