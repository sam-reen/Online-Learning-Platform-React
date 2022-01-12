import React from 'react';
// import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

function Navbar() {
    return (
        <>

            <header>
                <div id="header-sticky" class="header__area header__transparent header__padding">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
                                <div class="header__left d-flex">
                                    <div class="logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/1.png" alt="logo" />
                                        </a>
                                    </div>
                                    <div class="header__category d-none d-lg-block">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <a href="course-grid.html" class="cat-menu d-flex align-items-center">
                                                        <div class="cat-dot-icon d-inline-block">
                                                            <svg viewBox="0 0 276.2 276.2">
                                                                <g>
                                                                    <g>
                                                                        <path class="cat-dot" d="M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z" />
                                                                        <path class="cat-dot" d="M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z" />
                                                                        <path class="cat-dot" d="M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z" />
                                                                        <path class="cat-dot" d="M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z" />
                                                                        <path class="cat-dot" d="M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z" />
                                                                        <path class="cat-dot" d="M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z" />
                                                                        <path class="cat-dot" d="M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    " />
                                                                        <path class="cat-dot" d="M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z" />
                                                                        <path class="cat-dot" d="M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z" />
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <span>Category</span>
                                                    </a>
                                                    <ul class="cat-submenu">
                                                        <li><a href="course-details.html">Development</a></li>
                                                        <li><a href="course-details.html">Business</a></li>
                                                        <li><a href="course-details.html">Design</a></li>
                                                        <li><a href="course-details.html">Marketing</a></li>
                                                        <li><a href="course-details.html">Lifestyle</a></li>
                                                        <li><a href="course-details.html">Teaching and Academics</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
                                <div class="header__right d-flex justify-content-end align-items-center">
                                    <div class="main-menu">
                                        <nav id="mobile-menu">
                                            <ul className='nav-items'>
                                                {NavItems.map((item) => {
                                                   <li key = {item.id} className = {item.cName}>
                                                        <link to = {item.path}>{item.title}</link>
                                                   </li> 
                                                })}
                                            </ul>
                                        </nav>
                                   
                                    </div>
                                    <div class="header__search p-relative ml-50 d-none d-md-block">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit"><i class="fad fa-search"></i></button>
                                        </form>
                                        <div class="header__cart">
                                            <a href="javascript:void(0);" class="cart-toggle-btn">
                                                <div class="header__cart-icon">
                                                    <svg viewBox="0 0 24 24">
                                                        <circle class="st0" cx="9" cy="21" r="1" />
                                                        <circle class="st0" cx="20" cy="21" r="1" />
                                                        <path class="st0" d="M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6" />
                                                    </svg>
                                                </div>
                                                <span class="cart-item">2</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="header__btn ml-20 d-none d-sm-block">
                                        <a href="contact.html" class="e-btn">Try for free</a>
                                    </div>
                                    <div class="sidebar__menu d-xl-none">
                                        <div class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                                            <span class="line">hello</span>
                                            <span class="line"></span>
                                            <span class="line"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;

