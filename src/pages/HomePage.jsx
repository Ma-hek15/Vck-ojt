import Header from "../components/Header/Header";
import Footer  from "../components/Footer/Footer";
import '../styles/Pages.css';
//import "../styles/SharedPageLayout.css"; // <-- Import the new shared CSS file
// import "../styles/HomePage.css" // <-- If you have page-specific styles, import it AFTER the shared one

const HomePage = () => {
    return(
         <>
            <div className="header-wrapper">
                <Header />
            </div>
            <div className="main-wrapper"> {/* Uses shared class */}
                <div className="main-box"> {/* Uses shared class */}
                    <div className="main-content-scrollable">
                    <div className="hero-section">
                        <img alt="Vivekanand College Campus"className="hero-banner-image" src="/Images/college-banner.png" />
                        <div className="hero-overlay-text">
                            <h1>Welcome to Vivekanand College!</h1>
                            <p id="para">Your journey to excellence starts here.</p>
                            <a className="btn hero-btn" href="/admission">Apply Now!</a>
                        </div>
                    </div>

                    {/* <img src="../Images/viv.png" alt="VCK logo" className=""/>
                    <h1> Welcome to Vivekanand College</h1>
                    <p> Your journey to excellence starts from here</p> */}
                        <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation,and holistic development. Established in 1980,we have proudly served generations of students, empowering them to achieve their full potential. <br /> <br /> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped. </p>
                        <h2>Why choose Vivekanand College?</h2> <hr />
                        <ul type="circle">
                            <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                            <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                            <li><b>Modern Facilities:</b> Well-equipped labs, expansive library,  and comfortable campus.</li>
                            <li><b>Holistic Development:</b> Focus on co-curicular activities, sports, and community service.</li>
                            <li><b>Strong Placements:</b> Excellent Career oppurtunities with leading companies.</li>
                        </ul>
                        <h2> Campus Life & Facilities</h2> <hr />
                        <div className="campus-images-container">
                            <img src="\Images\vck 2.jpg" alt="Vivekanand College Information" className="campus-image"/>
                            <img src="\Images\vckk.jpeg" alt="Vivekanand College Campus" className="campus-image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;