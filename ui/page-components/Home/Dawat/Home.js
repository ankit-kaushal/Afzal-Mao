/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

function Home() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Afzal Restaurant" />
        <meta name="keywords" content="King of Kepsa" />
        <meta name="author" content="BDEXPERT" />
        <meta name="google-site-verification" content="en_jVXHSfOJqWbteT7ZVXW4W9vE1hsyXhaAdX3p2nC8" />

        <title>Afzal Restaurant</title>

        <link rel="shortcut icon" type="image/ico" href="https://www.afzalmao.com/img/favicon.png" />

        <link rel="stylesheet" href="https://www.afzalmao.com/css/normalize.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/animate.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/pogo-slider.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/owl.carousel.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/datepicker.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/timepicker.min.css" />
        <link rel="stylesheet" href="https://www.afzalmao.com/css/magnific-popup.css" />
        <link href="https://www.afzalmao.com/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://www.afzalmao.com/css/font-awesome.min.css" rel="stylesheet" />

        <link href="https://www.afzalmao.com/style.css" rel="stylesheet" />
        <link href="https://www.afzalmao.com/css/responsive.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script:400,700|Lato:400,700|PT+Sans+Narrow:400,700" rel="stylesheet" />

        <script src="https://www.afzalmao.com/js/vendor/modernizr-2.8.3.min.js" />
      </head>

      <body>
        {/* <div className="preeloader">
          <div className="preloader-spinner"><i className="fa fa-cutlery" /></div>
        </div> */}

        <a href="#home" className="scrolltotop"><i className="fa fa-long-arrow-up" /></a>

        <header className="top-area" id="home">
          <div className="header-top-area">
            <div className="top-bar">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6 col-sm-8">
                    <div className="call-to-action">
                      <p style={{ textTransform: 'lowercase' }}>
                        <i className="fa fa-envelope-o" />
                        Email:
                        {' '}
                        <a href="mailto:contact@afzalmao.com">contact@afzalmao.com</a>
                      </p>

                    </div>
                  </div>
                  <div className="col-md-5 col-lg-6 col-sm-4">
                    <div className="book-table-popup">
                      <a
                        href="#reservation-form-modal"
                        data-toggle="modal"
                      >
                        Order Now
                      </a>
                    </div>
                    <div className="top-social-bookmark">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/Afzal-Mao-104390698904646"
                          >
                            <i className="fa fa-facebook" />
                          </a>
                        </li>

                        <li>
                          <a href="https://www.instagram.com/afzalmaorestaurant/"><i className="fa fa-instagram" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mainmenu-area" id="mainmenu-area">
              <div className="mainmenu-area-bg" />
              <nav className="navbar">
                <div className="container">
                  <div className="navbar-header">
                    <button
                      className="collapsed navbar-toggle"
                      type="button"
                      data-toggle="collapse"
                      data-target=".bs-example-js-navbar-scrollspy"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <a
                      href="#home"
                      className="navbar-brand"
                    >
                      <img
                        src="https://www.afzalmao.com/img/logo.png"
                        alt="logo"
                      />
                    </a>
                    <a
                      href="#home"
                      className="navbar-brand white"
                    >
                      <img
                        src="https://www.afzalmao.com/img/logo1.png"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div
                    className="collapse navbar-collapse bs-example-js-navbar-scrollspy"
                  >
                    <ul id="nav" className="nav navbar-nav">
                      <li className="active"><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#promotion">Story</a></li>
                      <li><a href="#menu">Menu</a></li>
                      <li><a href="#team">Location</a></li>
                      <li><a href="#blog">Reviews</a></li>
                      <li><a href="#gallery">Gallery</a></li>
                      <li><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="slider-area">
            <div className="pogoSlider">
              <div
                className="pogoSlider-slide"
                data-transition="fade"
                data-duration="1500"
                style={{ background: 'url(https://www.afzalmao.com/img/slider/slide1.jpg) no-repeat scroll 0 0 cover' }}
              >
                <h2
                  className="pogoSlider-slide-element"
                  data-in="slideDown"
                  data-out="flipX"
                  data-duration="700"
                >
                  Welcome to
                </h2>
                <h1
                  className="pogoSlider-slide-element"
                  data-in="expand"
                  data-out="flipX"
                  data-duration="1500"
                >
                  <span>Afzal</span>
                  {' '}
                  Mao Restaurant
                </h1>
                <h3
                  className="pogoSlider-slide-element"
                  data-in="slideUp"
                  data-out="flipX"
                  data-duration="700"
                >
                  <a
                    href="#reservation-form-modal"
                    data-toggle="modal"
                  >
                    Order Now
                  </a>
                </h3>
              </div>
              <div
                className="pogoSlider-slide"
                data-transition="fade"
                style={{
                  background: 'url(https://www.afzalmao.com/img/slider/slide2.jpg) no-repeat scroll 0 0 cover',
                }}
              >
                <h2
                  className="pogoSlider-slide-element"
                  data-in="slideDown"
                  data-out="flipX"
                  data-duration="700"
                >
                  Explore Our Delicacies
                </h2>
                <h1
                  className="pogoSlider-slide-element"
                  data-in="expand"
                  data-out="flipX"
                  data-duration="1500"
                >
                  See Whats
                  {' '}
                  <span>our</span>
                  {' '}
                  Speciality
                </h1>
                <h3
                  className="pogoSlider-slide-element"
                  data-in="slideUp"
                  data-out="flipX"
                  data-duration="700"
                >
                  <a href="#menu">See Menu</a>
                </h3>
              </div>
              <div
                className="pogoSlider-slide"
                data-transition="fade"
                style={{
                  background: 'url(https://www.afzalmao.com/img/slider/slide3.jpg) no-repeat scroll 0 0 cover',
                }}
              >
                <h2
                  className="pogoSlider-slide-element"
                  data-in="slideDown"
                  data-out="flipX"
                  data-duration="700"
                >
                  Get your favorite dish
                </h2>
                <h1
                  className="pogoSlider-slide-element"
                  data-in="expand"
                  data-out="flipX"
                  data-duration="1500"
                >
                  delivered
                  {' '}
                  <span>to your </span>
                  {' '}
                  doorstep
                </h1>
                <h3
                  className="pogoSlider-slide-element"
                  data-in="slideUp"
                  data-out="flipX"
                  data-duration="700"
                >
                  <a
                    href="#reservation-form-modal"
                    data-toggle="modal"
                  >
                    Order Now
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </header>

        <section className="about-area section-padding" id="about">
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>About Us</h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="about-content">
                  <p>
                    <span className="big-text">W</span>
                    {' '}
                    ith a humble beginning in 1920
                    as a small Cafe, Afzal Mao has come a long way in creating a
                    niche for itself. From bringing different cuisines to being the
                    pioneers of their signature dish ‘Kepsa,’ Afzal Mao is a place
                    where you can be sure of experiencing authentic flavours of
                    different cuisines.
                  </p>

                  <p>
                    Nestled in the hustling city of Mumbai, Afzal Mao is not just a
                    restaurant but a legacy that has been nurturing authentic
                    flavours for generations.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="right-about-content">
                  <div className="video-wrapper">
                    <div className="video-container" id="video-container">
                      <iframe
                        width="auto"
                        height="315"
                        src="https://www.youtube.com/embed/l6G8X6zCDU8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="rating text-center">
                  <p>With 4.2 rating on Swiggy and Zomato</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promotions-area section-padding" id="promotion">
          <div className="promotion-area-bg" data-stellar-background-ratio="0.6" />
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>The Kepsa Kahani</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                style={{ paddingBottom: '100px' }}
              >
                <div className="single-promotions">
                  <div className="promotions-img">
                    <img src="img/promotions/kepsa.jpg" alt="" />
                  </div>
                  <div className="promotions-details">
                    <p>
                      Food blurs boundaries and Kepsa stands true to this belief.
                      Afzal Mao brings you a unique culinary story dipped in diverse
                      flavours. A story when tender chicken is drenched in the
                      signature Mughalai gravy crafted by the ancestors of Afzal Mao
                      is topped with a range of fried rice depending on your taste.
                    </p>
                    <p>
                      Kepsa at Afzal Mao is a splash of flavours and an experience
                      that would linger in your senses for a long time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="menus-area section-padding" id="menu">
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>Our Speciality</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="food-menu-list food-menu-slider">
                  <div className="single-menu-two">
                    <div className="food-menu-img-two">
                      <img src="https://www.afzalmao.com/img/menu/menu1.jpg" alt="" />
                    </div>
                    <div className="food-menu-details-two">
                      <h3>Kebab</h3>
                    </div>
                  </div>
                  <div className="single-menu-two">
                    <div className="food-menu-details-two">
                      <h3>Kepsa</h3>
                    </div>
                    <div className="food-menu-img-two">
                      <img src="https://www.afzalmao.com/img/menu/menu2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="single-menu-two">
                    <div className="food-menu-img-two">
                      <img src="https://www.afzalmao.com/img/menu/menu3.jpg" alt="" />
                    </div>
                    <div className="food-menu-details-two">
                      <h3>Custard</h3>
                    </div>
                  </div>
                  <div className="single-menu-two">
                    <div className="food-menu-details-two">
                      <h3>Tikka</h3>
                    </div>
                    <div className="food-menu-img-two">
                      <img src="https://www.afzalmao.com/img/menu/menu4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="single-menu-two">
                    <div className="food-menu-img-two">
                      <img src="https://www.afzalmao.com/img/menu/menu5.jpg" alt="" />
                    </div>
                    <div className="food-menu-details-two">
                      <h3>Rabdi</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="text-center wow fadeIn">
                  <a
                    href="./menu.html"
                    className="normal-button"
                    data-toggle="modal"
                  >
                    VIEW FULL MENU
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="reservation-button-area section-padding"
          id="reservation-button"
        >
          <div
            className="reservation-button-area-bg"
            data-stellar-background-ratio="0.6"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="resarvation-from-button text-center wow fadeIn">
                  <h2>Order a dish Now !</h2>
                  <a
                    href="#reservation-form-modal"
                    className="reservation-button"
                    data-toggle="modal"
                  >
                    CLICK HERE TO ORDER
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div
                  className="modal fade"
                  id="reservation-form-modal"
                  tabIndex="-1"
                  role="dialog"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 className="modal-title">
                          Order Food from Our Partner Sites
                        </h4>
                      </div>
                      <div className="modal-body">
                        <div className="reservation-form">
                          <form
                            action="#"
                            className="table-booking-form"
                            id="reservation"
                          >
                            <div className="row">
                              <div>
                                <select style={{ color: 'black' }}>
                                  <option>Select Address</option>
                                  <option value="1">
                                    Mazgaon
                                  </option>
                                  <option value="2">
                                    Crawford
                                  </option>
                                  <option value="3">Vashi Naka</option>
                                </select>
                              </div>

                              <div>
                                <div
                                  className="1 select"
                                  style={{ display: 'flex', flexDirection: 'row' }}
                                >
                                  <a
                                    href="https://www.swiggy.com/restaurants/afzal-restaurant-byculla-mumbai-64881"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/swiggy.jpeg"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                  <a
                                    href="https://zoma.to/order/46577"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/zomato.png"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                  <a
                                    href="tel:+919892192727"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/call.png"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div
                                  className="2 select"
                                  style={{ display: 'flex', flexDirection: 'row' }}
                                >

                                  <a
                                    href="https://zoma.to/order/19663298"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/zomato.png"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                  <a
                                    href="tel:+919820938863"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/call.png"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                </div>
                                <div
                                  className="3 select"
                                  style={{ display: 'flex', flexDirection: 'row' }}
                                >

                                  <a
                                    href="tel:+919594814962"
                                    style={{ margin: 'auto' }}
                                  >
                                    <img
                                      src="https://www.afzalmao.com/img/call.png"
                                      height="100px"
                                      width="100px"
                                      style={{ borderRadius: '10px' }}
                                      alt="img"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-area section-padding" id="team">
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>Our Location</h2>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <iframe
                  title="Map 1"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15094.432957156305!2d72.82696146977537!3d18.94872700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdea26beacf%3A0xa9f34addf57c70f8!2sAfzal%20Mao%20Restaurant!5e0!3m2!1sen!2sin!4v1648982724861!5m2!1sen!2sin"
                  width="auto"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="card">
                <iframe
                  title="Map 2"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.117747466838!2d72.83865521500555!3d18.97040656021254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce3847d7ddfd%3A0x2d576c4d5c795115!2sAfzal%20Restaurant!5e0!3m2!1sen!2sin!4v1648983723226!5m2!1sen!2sin"
                  width="auto"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="card">
                <iframe
                  title="Map 3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15094.432957156305!2d72.82696146977537!3d18.94872700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdea26beacf%3A0xa9f34addf57c70f8!2sAfzal%20Mao%20Restaurant!5e0!3m2!1sen!2sin!4v1648982724861!5m2!1sen!2sin"
                  width="auto"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area section-padding" id="blog">
          <div className="blog-area-bg" data-stellar-background-ratio="0.6" />
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row post-slider">
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-post text-center">
                  <div className="post-details">
                    <p style={{ fontFamily: 'Dancing Script, cursive' }}>
                      I order food from Afzal Mao quite often. I love the taste and
                      their service is very prompt. Even while home delivery, the
                      food arrives hot and tasty.
                    </p>
                    <p className="post-meta">~ Raghuveer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-post text-center">
                  <div className="post-details">
                    <p style={{ fontFamily: 'Dancing Script, cursive' }}>
                      My office is close to Mazgao. I and my office mates visit
                      Afzal mao quite often during lunchtime. The Kepsa with Chines
                      fried rice is our favorite. However, the other chicken
                      preparations are tasty too.
                    </p>
                    <p className="post-meta">~ Madhukar</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-post text-center">
                  <div className="post-details">
                    <p style={{ fontFamily: 'Dancing Script, cursive' }}>
                      I had gone to Afzal Mao with my friends, after that I have
                      ordered food home very often. The rotis and butter chicken is
                      very delicious. The food at Afzal Mao is tasty and served
                      fresh.
                    </p>
                    <p className="post-meta">- Natsha</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="single-post text-center">
                  <div className="post-details">
                    <p style={{ fontFamily: 'Dancing Script, cursive' }}>
                      I moved to Mumbai from Hyderabad. I have always been a fan of
                      Hyderabadi flavours. In Mumbai I have experienced authentic
                      Mughalai flavours at Afzal Mao. My all time favorite is Kepsa.
                    </p>
                    <p className="post-meta">- Natsha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-area section-padding" id="gallery">
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="area-title text-center">
                  <h2>Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row gallery-section">
              <div className="cont">
                <div />
                <div />
                <div />
                <div />

                <span>Tastes so good!</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="text-center wow fadeIn">
                  <a
                    href="./gallery.html"
                    className="normal-button"
                    data-toggle="modal"
                  >
                    SEE ALL IMAGES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-area" id="contact">
          <div className="footer-area-bg" data-stellar-background-ratio="0.6" />
          <div className="container wow fadeIn">
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="footer-top section-padding text-center">
                  <div className="footer-logo">
                    <a href="#"><img src="img/logo0.png" alt="" /></a>
                  </div>
                  <div className="footer-address">
                    <div className="address">
                      <div className="add partial-border">
                        <p style={{ textAlign: 'center' }}><b>MAZGAON</b></p>
                        <p>
                          9-A, Shop 36/37, Tulshiwadi, Shivdas Champsi Marg, Opp.
                          Sai Niketan Building, Mazgaon, Mumbai - 400010
                        </p>
                        <p>
                          TEL::
                          <a
                            style={{ marginLeft: '43px' }}
                            href="callto:23776405"
                          >
                            2377 6405
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '85px' }}
                            href="callto:23770786"
                          >
                            2377 0786
                          </a>
                        </p>

                        <p>
                          CELL::
                          <a
                            style={{ marginLeft: '28px' }}
                            href="callto:+919892192727"
                          >
                            +91 9892192727
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+918879235135"
                          >
                            +91 8879235135
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+918657282348"
                          >
                            +91 8657282348
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+918657282354"
                          >
                            +91 8657282354
                          </a>
                        </p>

                      </div>
                      <div className="add partial-border">
                        <p style={{ textAlign: 'center' }}><b>CRAWFORD MARKET</b></p>
                        <p>
                          58 Carnac Road, Opp. DCB Bank, Crawford Market, Mumbai -
                          400001
                        </p>

                        <p>
                          CELL::
                          <a
                            style={{ marginLeft: '25px' }}
                            href="callto:+919820938863"
                          >
                            +91 9820938863
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+917738522088"
                          >
                            +91 7738522088
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+917738702088"
                          >
                            +91 7738702088
                          </a>
                        </p>

                      </div>
                      <div className="add partial-border">
                        <p style={{ textAlign: 'center' }}><b>VASHI NAKA</b></p>
                        <p>
                          Indira Nagar, Vashi Naka, RC Marg, Mahul Road, Nr. Bharat
                          Petrol Pump, Mumbai - 400074
                        </p>

                        <p>
                          CELL::
                          <a
                            style={{ marginLeft: '25px' }}
                            href="callto:+919594814962"
                          >
                            +91 9594814962
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+917045316222"
                          >
                            +91 7045316222
                          </a>
                        </p>
                        <p>
                          <a
                            style={{ marginLeft: '80px' }}
                            href="callto:+919594809932"
                          >
                            +91 9594809932
                          </a>
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                <div className="footer-copyright">
                  <p>
                    &copy; 2022
                    <a href="http://afzalmao.com/">Afzal Mao Restaurant</a>
                    {' '}
                    All
                    Right Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12" />
            </div>
          </div>
        </div>

        <script src="https://www.afzalmao.com/js/vendor/jquery-1.12.4.min.js" />
        <script src="https://www.afzalmao.com/js/vendor/bootstrap.min.js" />

        <script src="https://www.afzalmao.com/js/vendor/jquery.easing.1.3.js" />
        <script src="https://www.afzalmao.com/js/vendor/jquery-migrate-1.2.1.min.js" />
        <script src="https://www.afzalmao.com/js/jquery.pogo-slider.js" />
        <script src="https://www.afzalmao.com/js/owl.carousel.min.js" />
        <script src="https://www.afzalmao.com/js/stellar.js" />
        <script src="https://www.afzalmao.com/js/jquery.mixitup.min.js" />
        <script src="https://www.afzalmao.com/js/instafeed.min.js" />
        <script src="https://www.afzalmao.com/js/datepicker.min.js" />
        <script src="https://www.afzalmao.com/js/timepicker.min.js" />
        <script src="https://www.afzalmao.com/js/wow.min.js" />
        <script src="https://www.afzalmao.com/js/jquery.magnific-popup.min.js" />
        <script src="https://www.afzalmao.com/js/jquery.sticky.js" />

        <script src="https://www.afzalmao.com/js/main.js" />
      </body>
    </>
  );
}

export default Home;
