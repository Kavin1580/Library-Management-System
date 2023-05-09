import { Link } from "react-router-dom";
import "../styles/landingpage.css"
const LandingPage = () => {
    return (
    <div className="main">
            <div className="landingpage">
                <header className="header_section">
                <div className="container">
                    <nav className="navbar ">
                        <a className="navbar-logo" href="index.html">
                            <img src="images/logo1.png" alt="logo" height="100px" width="250px" />
                            <span className="span">
                                <h1>COMIC Liabrary</h1>
                            </span>
                        </a>
                    </nav>
                </div>
            </header>
            {/* header ended */}
            <section className=" slider_section">
                <div className="container">
                    <div className="col">
                        <div className="detail-box">
                            <h1>
                                Comic Library<br />
                                <span>
                                    Read Anywher Anytime
                                </span>
                            </h1>
                            <p>
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less
                                normal distribution of letters, as
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi incidunt eligendi tempore soluta quo eum quam totam reiciendis facilis impedit unde, quos iusto recusandae aliquid blanditiis culpa animi quibusdam. Perferendis?
                            </p>
                            <div className="btn">
                                <Link to="/admin-login">Admin Login </Link>
                                <Link to="/user-login">User Login </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
            {/* slide ended */}
            {/* offer section */}
            <section className="offer_section">
                <div className="container">
                    <div className="heading_container">
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                         <img src="/images/creative.png" alt="" height="70px" width="70px" />
                                </div>
                                <div className="detail-box1">
                                    <h4>
                                    CREATIVE LEARNER
                                    </h4>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis optio modi perspiciatis delectus dolorum porro quam ullam, distinctio tempora, dignissimos at est consequatur voluptatibus id expedita doloremque ipsam facere omnis sunt, culpa illum voluptate tempore dicta veniam. Deleniti possimus laudantium quisquam officiis asperiores quasi tenetur accusantium dignissimos nihil magni eos porro animi tempora sed vel officia quo ullam obcaecati ducimus fuga, veniam veritatis? Laborum enim neque, molestiae, natus dolores dicta quaerat aliquam pariatur similique maxime at beatae autem distinctio nemo nulla corporis fugiat a vel! Voluptatibus harum, sapiente maxime ad voluptatem sed modi pariatur vero vel. Natus doloremque accusamus quam?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                <img src="/images/teacher.png" alt=""  height="70px" width="70px"/>
                             </div>
                                <div className="detail-box1">
                                    <h4>
                                        CERTIFIED TEACHERS
                                    </h4>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempora hic doloribus doloremque, neque eligendi porro dolore minus officiis aliquam error veritatis iusto veniam facilis officia, velit voluptates delectus fuga magni quasi ab inventore nemo omnis ipsam. Accusantium, quisquam modi animi sequi odit dolorum minus reiciendis facere magni vitae natus? Perferendis quibusdam deserunt neque repellat fugiat tempore nemo, eveniet aliquam, autem quia tempora ex? Omnis nisi quo totam reprehenderit qui atque, quisquam perferendis quidem eligendi sint commodi illo et quasi est cum sed dolore unde quae. Nostrum dolore ipsum, harum quos labore ullam soluta. Perferendis commodi itaque dolores nobis recusandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-box">
                                <div className="img-box">
                                <img src="/images/happy.png" alt=""  height="70px" width="70px" />
                             </div>
                                <div className="detail-box1">
                                    <h4>
                                       HAPPY ENVIRONMENT
                                    </h4>
                                    <p>
                                        It is a long established fact that a reader will be distracted
                                        by the readable content of a page when looking at its layout.
                                        The point of using Lorem
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis tempore repudiandae a commodi at doloribus inventore odit eligendi nisi nulla. Dolorem veniam consequatur officia nesciunt sit rerum assumenda voluptates quia aperiam aut minus necessitatibus, quibusdam quaerat architecto similique quod dolor distinctio labore perspiciatis laborum saepe atque sunt? Debitis molestiae error sint repudiandae vel, illo quia aut deserunt temporibus voluptates nobis ea hic, blanditiis ducimus molestias dolores nesciunt laudantium atque eligendi ipsa. Veniam accusantium soluta ut aut. Ab nisi, doloribus saepe ratione repudiandae mollitia magnam debitis recusandae deleniti omnis eveniet perspiciatis, rem expedita ullam hic? Vitae deserunt neque quos blanditiis quis?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end offer section */}
        </div>

    )
}

export default LandingPage;