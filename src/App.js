import React, {Component} from 'react';
import headshot from './images/portraits/square/03.jpg';
import avatar from './images/portraits/square/avatar.jpg';
import pimage1 from './images/portfolio/wide-01.jpg';
import pimage2 from './images/portfolio/wide-02.png';
import pimage3 from './images/portfolio/wide-03.png';
import pimage4 from './images/portfolio/wide-04.jpg';
import pimage5 from './images/portfolio/wide-05.jpg';
import m1 from './images/portraits/square/04.jpg';
import m2 from './images/portraits/square/05.jpg';
import m3 from './images/portraits/square/06.jpg';
import m4 from './images/portraits/square/01.jpg';
import m5 from './images/portraits/square/02.jpg';


import './App.css';

class Navbar extends Component {
    render() {
        return (

            <div className="znav-container znav-dark znav-fixed" id="znav-container">
                <div className="container">
                    <nav className="navbar navbar-toggleable-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger hamburger--emphatic">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                </div>
                            </div>
                        </button>
                        <a className="navbar-brand overflow-hidden" href="#">FAVOUR &nbsp;&nbsp;</a>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <a href="#" target="_blank">Download Resume</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>


        )
    }
}

class WebsiteBody extends Component {
    render() {

        return (
            <div>

                <section className="pb-4 pt-11">
                    <div className="background-holder overlay overlay-1 headerImage"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row justify-content-center align-items-end text-center text-md-left">
                                    <div className="col-8 col-md-4">
                                        <a href={avatar} data-lightbox="profile-pic">
                                            <img className="img-thumbnail radius-primary"
                                                 src={avatar}/>
                                        </a>
                                    </div>
                                    <div className="col-12 col-md-8 mt-3 mt-md-0 color-white font-1">
                                        <h4 className="mb-0">Favour Ori</h4>
                                        <p className="lead mb-0">Software Engineer</p>
                                        <p className="mb-0">From Abia State, Nigeria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

        )
    }
}


class MainBody extends Component {
    render() {
        return (
            <div>


                <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <p className="lead font-1 color-4">Passionate about designing and developing Innovative
                                    products that are not just Intuitive but also
                                    serve as creative solutions to problems people face in the society.</p>
                                <h5 className="mt-6 mb-4">Recent projects</h5>
                                <div className="row no-gutters">
                                    <div className="col pr-1">
                                        <a href={pimage1} data-lightbox="data-lightbox">
                                            <img src={pimage1}/>
                                        </a>
                                    </div>
                                    <div className="col pl-1">
                                        <a href={pimage2} data-lightbox="data-lightbox">
                                            <img src={pimage2}/>
                                        </a>
                                    </div>
                                </div>
                                <div className="row no-gutters mt-2">
                                    <div className="col pr-1">
                                        <a href={pimage3} data-lightbox="data-lightbox">
                                            <img src={pimage3}/>
                                        </a>
                                    </div>
                                    <div className="col px-1">
                                        <a href={pimage4} data-lightbox="data-lightbox">
                                            <img src={pimage4}/>
                                        </a>
                                    </div>
                                    <div className="col pl-1">
                                        <a href={pimage5} data-lightbox="data-lightbox">
                                            <img src={pimage5}/>
                                        </a>
                                    </div>
                                </div>
                                <h5 className="mt-6 mb-4">Recent Activities</h5>
                                <hr className="color-9"/>
                                <div className="row align-items-center">
                                    <div className="col-md-2 col-3 text-center">
                                        <i className="fs-4 color-4 icon-Speach-BubbleDialog"></i>
                                    </div>
                                    <div className="col">
                                        <h6 className="color-6">25th April, 2018</h6>
                                        <a className="font-1" href="#">Speaker @YCBF Atlanta, Ga</a>
                                        <p className="font-1 color-2 fw-300">Spoke in a panel of 4 - discussing Big
                                            Data & how it impacts society.</p>
                                    </div>
                                </div>
                                <hr className="color-9"/>
                                <div className="row align-items-center">
                                    <div className="col-md-2 col-3 text-center">
                                        <i className="fs-4 color-4 icon-Speach-BubbleDialog"></i>
                                    </div>
                                    <div className="col">
                                        <h6 className="color-6">28th April, 2018</h6>
                                        <a className="font-1" href="#">Founded Host9ja </a>
                                        <p className="font-1 color-2 fw-300">Affordable Hosting solutions for
                                            Nigerians</p>
                                    </div>
                                </div>
                                <hr className="color-9"/>
                                <div className="row align-items-center">
                                    <div className="col-md-2 col-3 text-center">
                                        <i className="fs-4 color-4 icon-Speach-BubbleDialog"></i>
                                    </div>
                                    <div className="col">
                                        <h6 className="color-6">5th March, 2018</h6>
                                        <a className="font-1" href="#">Pitched FavCode54</a>
                                    </div>
                                </div>
                                <hr className="color-9"/>
                                <div className="row align-items-center">
                                    <div className="col-md-2 col-3 text-center">
                                        <i className="fs-4 color-4 icon-Arrow-Mix"></i>
                                    </div>
                                    <div className="col">
                                        <h6 className="color-6">2nd February, 2018</h6>
                                        <a className="font-1" href="#">Founded FavCode54.org</a>
                                        <p className="font-1 color-2 fw-300">Program to mentor the next
                                            Gen of African Software Engineers</p>
                                    </div>
                                </div>
                                <hr className="color-9"/>
                                <div className="row align-items-center1">
                                    <div className="offset-3 offset-md-2 col my-4">
                                        <a className="btn btn-primary gradientButton" href="#">View All</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col pl-lg-5 mt-6 mt-lg-0">
                                <div className="row">
                                    <div className="col-md-6 col-lg-12 mb-7">
                                        <div className="row font-1">
                                            <div className="col-12 mb-4">
                                                <h6 className="text-uppercase mb-0">Facebook</h6>
                                                <div className="fs-4 fw-200 color-5">@Favorori</div>
                                            </div>
                                            <div className="col-12 mb-4">
                                                <h6 className="text-uppercase mb-0">Instagram</h6>
                                                <div className="fs-4 fw-100 color-5">@Favorori</div>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="text-uppercase mb-0">Twitter</h6>
                                                <div className="fs-4 fw-100 color-5">@Favorori1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-12">
                                        <h5 className="mb-4">Mentees</h5>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-4">
                                                <img className="img-thumbnail radius-primary"
                                                     src={m1}/>
                                            </div>
                                            <div className="col font-1 pl-0">
                                                <a href="#">Maxwell Okechukwu Udoji</a>
                                                <p className="fs--1 color-4 mb-0">Software Engineer</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-4">
                                                <img className="img-thumbnail radius-primary"
                                                     src={m2}/>
                                            </div>
                                            <div className="col font-1 pl-0">
                                                <a href="#">Bright Mene Sunday</a>
                                                <p className="fs--1 color-4 mb-0">Frontend Developer @Tell'Em</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-4">
                                                <img className="img-thumbnail radius-primary"
                                                     src={m3}/>
                                            </div>
                                            <div className="col font-1 pl-0">
                                                <a href="#">Ifeanyi Ojo</a>
                                                <p className="fs--1 color-4 mb-0">Software Engineer</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-4">
                                                <img className="img-thumbnail radius-primary"
                                                     src={m4}/>
                                            </div>
                                            <div className="col font-1 pl-0">
                                                <a href="#">Johnson Esther</a>
                                                <p className="fs--1 color-4 mb-0">Software Engineer</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-3">
                                            <div className="col-4">
                                                <img className="img-thumbnail radius-primary"
                                                     src={m5}/>
                                            </div>
                                            <div className="col font-1 pl-0">
                                                <a href="#">Chiziaruhoma Ogbonda</a>
                                                <p className="fs--1 color-4 mb-0">Andriod Geek @Favcode54</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>)
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <WebsiteBody/>
                <MainBody/>

            </div>
        );
    }
}

export default App;
