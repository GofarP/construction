import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ConstructionImg from "../../assets/images/construction2.jpg";
import BlogImg from "../../assets/images/construction3.jpg";

import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import AvatarImg from "../../assets/images/author-2.jpg";
import { Pagination } from "swiper/modules";

const Home = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <section className="section-1">
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amazing Constructions</span>
                                <h1>
                                    Crafting dreams with <br />
                                    precision and excellence.
                                </h1>
                                <p>
                                    We excel at transforming visions into
                                    reality through understanding craftmanship
                                    and precise
                                </p>
                                <div className="">
                                    <button className="btn btn-primary">
                                        Contact Now
                                    </button>
                                    <button className="btn btn-secondary ms-2">
                                        View Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-2 py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={AboutImg} alt="" className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <span>about us</span>
                                <h2>
                                    Crafting structures that last a lifetime
                                </h2>
                                <p>
                                    Building enduring structures requires a
                                    comprehensive approach that combines
                                    advanced materials, resilient design,
                                    routine maintenance, and sustainable
                                    practices. By drawing on historical insights
                                    and utilizing modern technology.
                                </p>
                                <p>
                                    Designing structures that stand the test of
                                    time involves a seamless blend of
                                    cutting-edge materials, durable design,
                                    ongoing upkeep, and eco-friendly practices.
                                    By combining lessons from the past with the
                                    power of modern technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center mb-5">
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>
                                We offer a diverse array of construction
                                services, spanning residential, commercial, and
                                industrial projects.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ServiceImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ServiceImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ServiceImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ServiceImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-4 py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Why Choose Us</span>
                            <h2>Discover our wide variety of projects</h2>
                            <p>
                                Created in close partnership with our client and
                                collaborators, this approach merges industry
                                expertise, decades of experience, innovation,
                                and flexibility to consistently deliver
                                excellence
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon1} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Small actions created big impacts.
                                            it all begins and ends with each
                                            employee committing to safer work
                                            practices daily, ensuring tehy
                                            return home safely
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon2} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Small actions created big impacts.
                                            it all begins and ends with each
                                            employee committing to safer work
                                            practices daily, ensuring tehy
                                            return home safely
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4">
                                    <div className="card-icon">
                                        <img src={Icon3} alt="" />
                                    </div>
                                    <div className="card-title mt-3">
                                        <h3>Cutting-Edge Solutions</h3>
                                    </div>
                                    <div>
                                        <p>
                                            Small actions created big impacts.
                                            it all begins and ends with each
                                            employee committing to safer work
                                            practices daily, ensuring tehy
                                            return home safely
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center mb-5">
                            <span>Our Projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>
                                We offer a diverse array of construction
                                services, spanning residential, commercial, and
                                industrial projects.
                            </p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ConstructionImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ConstructionImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ConstructionImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="item">
                                    <div className="service-image">
                                        <img
                                            src={ConstructionImg}
                                            alt="Service"
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Specialty construction is a
                                                niche sector within the
                                                construction industry that
                                                focuses on projects requiring
                                                specialized skills.
                                            </p>
                                        </div>
                                        <a
                                            href="#"
                                            className="btn btn-primary btn-sm mt-2"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-5  py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Our Project</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>
                                We Offer a diverse array of construction
                                services, spanning residential, commercial, and
                                industrial project
                            </p>
                        </div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className="content pt-4 pb-3">
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptatibus rerum maxime sunt
                                                dolor quibusdam error
                                                consequuntur nisi explicabo
                                                libero odio fugiat et
                                                perspiciatis tempora, vitae
                                                molestias blanditiis quos.
                                                Itaque, ipsam?
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img
                                                    src={AvatarImg}
                                                    alt=""
                                                    width={50}
                                                />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">
                                                    John Doe
                                                </div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className="content pt-4 pb-3">
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptatibus rerum maxime sunt
                                                dolor quibusdam error
                                                consequuntur nisi explicabo
                                                libero odio fugiat et
                                                perspiciatis tempora, vitae
                                                molestias blanditiis quos.
                                                Itaque, ipsam?
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img
                                                    src={AvatarImg}
                                                    alt=""
                                                    width={50}
                                                />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">
                                                    John Doe
                                                </div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className="content pt-4 pb-3">
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptatibus rerum maxime sunt
                                                dolor quibusdam error
                                                consequuntur nisi explicabo
                                                libero odio fugiat et
                                                perspiciatis tempora, vitae
                                                molestias blanditiis quos.
                                                Itaque, ipsam?
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img
                                                    src={AvatarImg}
                                                    alt=""
                                                    width={50}
                                                />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">
                                                    John Doe
                                                </div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-star-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>

                                        <div className="content pt-4 pb-3">
                                            <p>
                                                Lorem, ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Voluptatibus rerum maxime sunt
                                                dolor quibusdam error
                                                consequuntur nisi explicabo
                                                libero odio fugiat et
                                                perspiciatis tempora, vitae
                                                molestias blanditiis quos.
                                                Itaque, ipsam?
                                            </p>
                                        </div>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img
                                                    src={AvatarImg}
                                                    alt=""
                                                    width={50}
                                                />
                                            </div>
                                            <div className="ps-3">
                                                <div className="name">
                                                    John Doe
                                                </div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="section-6 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Blog & News</span>
                            <h2>What people are saying about us</h2>
                            <p>
                                We offer a diverse array of construction
                                services, spanning residential, commercial, and
                                industrial product
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img
                                            src={BlogImg}
                                            alt=""
                                            className="w-100"
                                        />
                                    </div>
                                    <div className="card-body p-5">
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Home;
