import { Component } from "react"
import paris from '../Images/paris.jpg';
import paris2 from '../Images/paris 2.jpg';
import gucci2 from '../Images/gucci2.jpg';
import rare from '../Images/rare';
import perfumes from '../Images/perfumes.jpg';
import powder from '../Images/powder';
import add from '../Images/add';
import cardi from '../Images/cardi.jpg';
export default function Homepage() {
    return (

        <div className="main">
            <nav class="navbar navbar-default ">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#myPage">Logo</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#services">SERVICES</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#pricing">PRICING</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="jumbotron">
                <h1>RAY Cosmetics</h1>
                <p>We will make your own starlight<br></br>Put you under global spotlight</p>
                <form className="form-inline">
                    <div className="input-group">
                        <input type="search" class="form-control" size="50" placeholder="Search our products" required />
                        <div className="input-group-btn">
                            <button type="button" class="btn btn-danger">Search</button>
                        </div>
                    </div>
                </form>

            </div>
            <div class="container-fluid para1 ">
                <div className="row">
                    <div className="col-sm-8 get">
                        <h2>About Our Page</h2>
                        <h4>Letting our customers to explore with colours</h4>
                        <p>We are one of the bestest cosmetics in the world <br></br> all the products are made with  full care and low chemicals <br></br> we are delivering it with love. </p>
                        <button class="btn btn-default btn-lg ">Get in Touch</button>
                    </div>

                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div>
                </div>
            </div>
            <div className="container-fluid para2 bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2>
                        <h5><strong>MISSION:</strong> Our mission to make our products available through out the world </h5>
                        <p><strong>VISION:</strong> Our vision to make each and every women to feel privilaged about their gender </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid para3">
                <h2>SERVICES</h2>
                <h4>What we offer</h4>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-off logo-small"></span>
                        <h4>POWER</h4>
                        <p>The Power of our products were won millions of peoples heart</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-heart logo-small"></span>
                        <h4>LOVE</h4>
                        <p>Valentine's Day Special make everyone to fell in love with you </p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-lock logo-small"></span>
                        <h4>Shopping store</h4>
                        <p>We will bring our online store to be a nearby store</p>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small"></span>
                        <h4>GREEN</h4>
                        <p>We only belong to vegan community</p>
                    </div>
                    <div className="col-sm-4">
                        <span class="glyphicon glyphicon-certificate logo-small"></span>
                        <h4>CERTIFIED</h4>
                        <p>We are the certified one around the world</p>
                    </div>
                    <div className="col-sm-4">
                        <span class="glyphicon glyphicon-wrench logo-small"></span>
                        <h4>HARD WORK</h4>
                        <p>Thousands of people pouring their hardwork to make this product even more beautiful and useful</p>

                    </div>

                </div>

            </div>
            <div className="container-fluid text-center bg-grey del">
                <h2>Headquaters</h2>
                <h4>Our main parts of our cosmetic world</h4>
                <div className="row text-center">
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <img src={paris} alt="Paris" />
                            <p><strong>Paris</strong></p>
                            <p>Yes, we built in Paris</p>

                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <img src={paris2} alt="New York" />
                            <p><strong>New York</strong></p>
                            <p>yes,we built in New york too</p>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <img src={gucci2} alt="London" />
                            <p><strong>London</strong></p>
                            <p>yes,we built in London too</p>

                        </div>

                    </div>

                </div>

            </div>
            <h2>What our customers say</h2>
            <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div class="carousel-inner" role="listbox">
                    <div class="item active review">
                        <h4>"This company is the best. I am so happy with the result!"<br /><span>lily wayne, Vice President, Comment Box</span></h4>
                    </div>
                    <div class="item review">
                        <h4>"One word... WOW!!"<br /><span>Zoey Dove, Saleswomen, Rep Inc</span></h4>
                    </div>
                    <div class="item review">
                        <h4>"Could I... BE any more happy with theirs products?"<br /><span>Emma Stone, Actress, LaLaLand</span></h4>
                    </div>
                </div>


                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="container-fluid">
                <div className="text-center">
                    <h2>Newly Launched products</h2>
                    <h4>Choose a shade that works for you</h4>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default text-center">
                            <div className="Lip Gloss">
                                <h2>Lip Crayon</h2>
                            </div>
                            <div className="panel-body ">
                                <img src={rare} alt="lipstick" />
                            </div>
                            <div className="panel-footer">
                                <h4>All shades are available</h4>
                                <button className="btn btn-lg">Buy Now</button>
                                <button className="btn btn-lg">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default text-center">
                            <div className="Perfume">
                                <h2>Perfumes</h2>
                            </div>
                            <div className="panel-body">
                                <img src={perfumes} alt="perfumes" />
                            </div>
                            <div className="panel-footer">
                                <h4>Variety of flavours available</h4>
                                <button className="btn btn-lg">Buy Now</button>
                                <button className="btn btn-lg">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default text-center">
                            <div className="concealer">
                                <h2>Concealer</h2>
                            </div>
                            <div className="panel-body">
                                <img src={powder} alt="concealer" />
                            </div>
                            <div className="panel-footer">
                                <h4>All shades are available</h4>
                                <button className="btn btn-lg">Buy Now</button>
                                <button className="btn btn-lg">Add to Cart</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container-fluid bg-grey">
                <h2 className="text-center">Contact</h2>
                <div className="row">
                    <div className="col-sm-5">
                        <p>Contact us and we'll get back to you within 24 hours.</p>
                        <p><span class="glyphicon glyphicon-map-marker"></span> New York, US</p>
                        <p><span class="glyphicon glyphicon-phone"></span> +00 1515151515</p>
                        <p><span class="glyphicon glyphicon-envelope"></span> raycosmetics@gmail.com</p>
                    </div>
                    <div className="col-sm-7">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="email" email="email" placeholder="Email" type="text" required />
                            </div>
                        </div>
                        <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                        <div className="row">
                            <div className="col-sm-12 form-group">
                                <button className="btn btn-default pull-right">Send</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="row image">
                <div className="col-sm-6">
                    <img src={add} alt="add" />
                </div>
                <div className="col-sm-6">
                    <img src={cardi} alt="cardi" />
                </div>

            </div>


        </div>

    )
}