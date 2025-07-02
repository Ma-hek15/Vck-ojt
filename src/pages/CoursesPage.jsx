import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; // Make sure Footer is imported if you use it
//import "../styles/SharedPageLayout.css"; // Import the shared CSS
// import "../styles/CoursesPage.css"; // Import this if you have page-specific styles for courses

const CoursesPage = () => {
    return(
        <> {/* Using a fragment to wrap Header, main content, and Footer */}
            <div className="header-wrapper">
                <Header />
            </div>

            <div className="main-wrapper"> {/* The main wrapper for centering the content box */}
                <div className="main-box"> {/* The white, shadowed content box */}
                    <div className="main-content-scrollable">
                    <h1 className="main-box-title">Our Academic Programs</h1> {/* Main title for the page */}
                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

                     {/* This div will contain the scrollable content */}

                        <h2>Discover Campus Life</h2>
                        <hr />
                        {/* It's good practice to add a "controls" attribute to videos for user interaction */}
                        <div className="video-container"> {/* Wrapper for responsive video sizing */}
                            <video src="../Videos/college-tour.mp4" width="900" controls className="course-page-video"/>
                        </div>

                        <h2>Undergraduate Programs (UG)</h2><hr />
                        <ul type="square">
                            <li> <b>Bachelor of Science (B.Sc.) </b></li>
                                <ul>
                                    <li> Computer Science (3 Years)</li>
                                    <li>Information Technology (3 Years)</li>
                                    <li>Biotechnology (3 Years)</li>
                                </ul>
                                <br /> {/* Use CSS for spacing instead of <br /> tags between list items */}
                            <li> <b>Bachelor of Commerce (B.Com) </b></li>
                                <ul>
                                    <li>Accounting & Finance (3 Years)</li>
                                    <li>Banking & Insurance (3 Years)</li>
                                </ul>
                                <br /> {/* Use CSS for spacing */}
                            <li> <b>Bachelor of Arts (B.A.)</b> </li>
                                <ul>
                                    <li>English Literature (3 Years)</li>
                                    <li>Psychology (3 Years)</li>
                                </ul>
                        </ul>

                        <h2>Postgraduate Programs (PG)</h2> <hr />
                        <ul type="square">
                            <li> <b>Master of Science (M.Sc.) </b></li>
                            <ul>
                                <li> Computer Science (2 Years)</li>
                                <li> Information Technology (2 Years)</li>
                            </ul>
                            <li> <b>Master of Commerce (M.Com.) </b>(2 Years)</li>
                            <li> <b>Master of Arts (M.A.) </b>(2 Years)</li>
                        </ul>

                        <h2> Program Details & Fee Structure (Annual)</h2> <hr /> {/* Removed "(PG)" from title as table includes UG */}
                       <div className="table-container"> {/* Wrapper for responsive table */}
                            <table border="2" className="course-fee-table" style={{color:"black"}}>
                                <thead>
                                    <tr>
                                        <th>Program Type</th>
                                        <th>Course Name</th>
                                        <th>Duration</th>
                                        <th>Annual Fee (INR)</th>
                                        <th>Eligibility</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>UG</td>
                                        <td>B.Sc. Computer Science</td>
                                        <td>3 Years</td>
                                        <td>₹ 85,000</td>
                                        <td>10+2 with PCM (50%)</td>
                                    </tr>
                                    <tr>
                                        <td>UG</td>
                                        <td>B.Com. Accounting & Finance</td>
                                        <td>3 Years</td>
                                        <td>₹ 70,000</td>
                                        <td>10+2 Commerce (45%)</td>
                                    </tr>
                                    <tr>
                                        <td>PG</td>
                                        <td>M.Sc. Information Technology</td>
                                        <td>2 Years</td>
                                        <td>₹ 95,000</td>
                                        <td>B.Sc. IT/CS (50%)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2>Specialized & Vocational Programs</h2> <hr /> {/* Clarified title */}
                        <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

                        <p>Have questions about a specific course?</p>
                        <button className="inquire-button">Inquire About Courses</button>

                    </div> {/* End of main-content-scrollable */}
                </div> {/* End of main-box */}
            </div> {/* End of main-wrapper */}

            <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    )
}

export default CoursesPage;